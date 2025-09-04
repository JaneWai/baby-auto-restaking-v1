import React, { useState } from 'react'
import { Wallet, Shield, Zap, ArrowRight, Coins } from 'lucide-react'

interface WalletConnectionProps {
  onWalletConnect: (address: string) => void
}

const WalletConnection: React.FC<WalletConnectionProps> = ({ onWalletConnect }) => {
  const [isConnecting, setIsConnecting] = useState(false)

  const handleConnect = async (walletType: string) => {
    setIsConnecting(true)
    
    // Simulate wallet connection
    setTimeout(() => {
      const mockAddress = '0x' + Math.random().toString(16).substr(2, 40)
      onWalletConnect(mockAddress)
      setIsConnecting(false)
    }, 2000)
  }

  const walletOptions = [
    { name: 'MetaMask', icon: '🦊', popular: true },
    { name: 'WalletConnect', icon: '🔗', popular: true },
    { name: 'Coinbase Wallet', icon: '🔵', popular: false },
    { name: 'Trust Wallet', icon: '🛡️', popular: false },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 shadow-xl">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
            <Coins className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            BABY Token Auto-Restaking
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Set your restaking preferences once and let our platform automatically manage your BABY rewards. 
            Choose between validators and liquidity pools with a single transaction.
          </p>
          
          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="backdrop-blur-md bg-white/10 rounded-xl p-6 border border-white/20">
              <Zap className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Automated Execution</h3>
              <p className="text-sm text-gray-600">No manual claims needed. Set it and forget it.</p>
            </div>
            <div className="backdrop-blur-md bg-white/10 rounded-xl p-6 border border-white/20">
              <Shield className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Flexible Destinations</h3>
              <p className="text-sm text-gray-600">Choose validators or liquidity pools for your rewards.</p>
            </div>
            <div className="backdrop-blur-md bg-white/10 rounded-xl p-6 border border-white/20">
              <Wallet className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">One-Click Setup</h3>
              <p className="text-sm text-gray-600">Simple setup process with broad wallet support.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wallet Connection */}
      <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 shadow-xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Connect Your Wallet</h2>
          <p className="text-gray-600">Choose your preferred wallet to get started</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {walletOptions.map((wallet) => (
            <button
              key={wallet.name}
              onClick={() => handleConnect(wallet.name)}
              disabled={isConnecting}
              className="group relative backdrop-blur-md bg-white/20 hover:bg-white/30 rounded-xl p-6 border border-white/30 hover:border-white/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">{wallet.icon}</span>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-800">{wallet.name}</h3>
                    {wallet.popular && (
                      <span className="text-xs text-blue-600 font-medium">Popular</span>
                    )}
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
              </div>
              
              {isConnecting && (
                <div className="absolute inset-0 backdrop-blur-md bg-white/20 rounded-xl flex items-center justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            By connecting your wallet, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  )
}

export default WalletConnection
