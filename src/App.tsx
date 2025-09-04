import React, { useState } from 'react'
import Header from './components/Header'
import WalletConnection from './components/WalletConnection'
import StakingDashboard from './components/StakingDashboard'
import RestakingPreferences from './components/RestakingPreferences'
import Footer from './components/Footer'

function App() {
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState('')

  const handleWalletConnect = (address: string) => {
    setWalletAddress(address)
    setIsWalletConnected(true)
  }

  const handleWalletDisconnect = () => {
    setWalletAddress('')
    setIsWalletConnected(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 font-inter">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-teal-400/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-300/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-teal-300/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
        <Header 
          isWalletConnected={isWalletConnected}
          walletAddress={walletAddress}
          onWalletDisconnect={handleWalletDisconnect}
        />
        
        <main className="container mx-auto px-4 py-8">
          {!isWalletConnected ? (
            <WalletConnection onWalletConnect={handleWalletConnect} />
          ) : (
            <div className="space-y-8">
              <StakingDashboard walletAddress={walletAddress} />
              <RestakingPreferences walletAddress={walletAddress} />
            </div>
          )}
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
