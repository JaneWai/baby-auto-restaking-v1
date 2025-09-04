import React from 'react'
import { Coins, LogOut } from 'lucide-react'

interface HeaderProps {
  isWalletConnected: boolean
  walletAddress: string
  onWalletDisconnect: () => void
}

const Header: React.FC<HeaderProps> = ({ isWalletConnected, walletAddress, onWalletDisconnect }) => {
  return (
    <header className="relative">
      <div className="backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg">
                <Coins className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">BABY Restaking</h1>
                <p className="text-sm text-gray-600">Automated Reward Management</p>
              </div>
            </div>

            {isWalletConnected && (
              <div className="flex items-center space-x-4">
                <div className="backdrop-blur-md bg-white/20 rounded-xl px-4 py-2 border border-white/30">
                  <p className="text-sm text-gray-700 font-medium">
                    {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                  </p>
                </div>
                <button
                  onClick={onWalletDisconnect}
                  className="p-2 backdrop-blur-md bg-red-500/20 hover:bg-red-500/30 rounded-xl border border-red-300/30 transition-all duration-200 group"
                >
                  <LogOut className="w-5 h-5 text-red-600 group-hover:text-red-700" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
