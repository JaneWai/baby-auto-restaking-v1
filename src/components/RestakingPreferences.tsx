import React, { useState } from 'react'
import { Settings, Save, AlertCircle, CheckCircle } from 'lucide-react'

interface RestakingPreferencesProps {
  walletAddress: string
}

const RestakingPreferences: React.FC<RestakingPreferencesProps> = ({ walletAddress }) => {
  const [selectedDestination, setSelectedDestination] = useState('validators')
  const [selectedValidator, setSelectedValidator] = useState('')
  const [selectedPool, setSelectedPool] = useState('')
  const [autoRestakeEnabled, setAutoRestakeEnabled] = useState(true)
  const [minThreshold, setMinThreshold] = useState('100')
  const [isSaving, setIsSaving] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const validators = [
    { id: 'val1', name: 'Validator Pool A', apy: '13.2%', commission: '5%', status: 'Active' },
    { id: 'val2', name: 'Validator Pool B', apy: '12.8%', commission: '4%', status: 'Active' },
    { id: 'val3', name: 'Validator Pool C', apy: '14.1%', commission: '6%', status: 'Active' },
  ]

  const liquidityPools = [
    { id: 'lp1', name: 'BABY/ETH LP', apy: '18.5%', tvl: '$2.4M', rewards: 'BABY + ETH' },
    { id: 'lp2', name: 'BABY/USDC LP', apy: '16.2%', tvl: '$1.8M', rewards: 'BABY + USDC' },
    { id: 'lp3', name: 'BABY/BTC LP', apy: '19.8%', tvl: '$3.1M', rewards: 'BABY + BTC' },
  ]

  const handleSave = async () => {
    setIsSaving(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 3000)
    }, 2000)
  }

  return (
    <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 shadow-lg">
      <div className="p-6 border-b border-white/20">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <Settings className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Restaking Preferences</h3>
            <p className="text-sm text-gray-600">Configure your automatic restaking settings</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-8">
        {/* Auto-Restaking Toggle */}
        <div className="flex items-center justify-between p-4 backdrop-blur-md bg-white/10 rounded-lg border border-white/20">
          <div>
            <h4 className="font-medium text-gray-800">Enable Auto-Restaking</h4>
            <p className="text-sm text-gray-600">Automatically restake rewards when they reach the minimum threshold</p>
          </div>
          <button
            onClick={() => setAutoRestakeEnabled(!autoRestakeEnabled)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              autoRestakeEnabled ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                autoRestakeEnabled ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {/* Minimum Threshold */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Minimum Threshold (BABY Tokens)
          </label>
          <input
            type="number"
            value={minThreshold}
            onChange={(e) => setMinThreshold(e.target.value)}
            className="w-full px-4 py-3 backdrop-blur-md bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder-gray-500"
            placeholder="Enter minimum amount"
          />
          <p className="text-xs text-gray-500 mt-1">Restaking will trigger when rewards reach this amount</p>
        </div>

        {/* Destination Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Restaking Destination
          </label>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              onClick={() => setSelectedDestination('validators')}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedDestination === 'validators'
                  ? 'border-blue-500 bg-blue-500/10'
                  : 'border-white/30 bg-white/10 hover:bg-white/20'
              }`}
            >
              <h4 className="font-medium text-gray-800 mb-1">Validators</h4>
              <p className="text-sm text-gray-600">Stake with network validators</p>
            </button>
            
            <button
              onClick={() => setSelectedDestination('liquidity')}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedDestination === 'liquidity'
                  ? 'border-blue-500 bg-blue-500/10'
                  : 'border-white/30 bg-white/10 hover:bg-white/20'
              }`}
            >
              <h4 className="font-medium text-gray-800 mb-1">Liquidity Pools</h4>
              <p className="text-sm text-gray-600">Provide liquidity for trading</p>
            </button>
          </div>

          {/* Validator Selection */}
          {selectedDestination === 'validators' && (
            <div className="space-y-3">
              <h5 className="font-medium text-gray-700">Select Validator</h5>
              {validators.map((validator) => (
                <label key={validator.id} className="block">
                  <input
                    type="radio"
                    name="validator"
                    value={validator.id}
                    checked={selectedValidator === validator.id}
                    onChange={(e) => setSelectedValidator(e.target.value)}
                    className="sr-only"
                  />
                  <div className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    selectedValidator === validator.id
                      ? 'border-blue-500 bg-blue-500/10'
                      : 'border-white/30 bg-white/10 hover:bg-white/20'
                  }`}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h6 className="font-medium text-gray-800">{validator.name}</h6>
                        <p className="text-sm text-gray-600">Commission: {validator.commission}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">{validator.apy}</p>
                        <p className="text-xs text-gray-500">{validator.status}</p>
                      </div>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          )}

          {/* Liquidity Pool Selection */}
          {selectedDestination === 'liquidity' && (
            <div className="space-y-3">
              <h5 className="font-medium text-gray-700">Select Liquidity Pool</h5>
              {liquidityPools.map((pool) => (
                <label key={pool.id} className="block">
                  <input
                    type="radio"
                    name="pool"
                    value={pool.id}
                    checked={selectedPool === pool.id}
                    onChange={(e) => setSelectedPool(e.target.value)}
                    className="sr-only"
                  />
                  <div className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    selectedPool === pool.id
                      ? 'border-blue-500 bg-blue-500/10'
                      : 'border-white/30 bg-white/10 hover:bg-white/20'
                  }`}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h6 className="font-medium text-gray-800">{pool.name}</h6>
                        <p className="text-sm text-gray-600">TVL: {pool.tvl}</p>
                        <p className="text-xs text-gray-500">Rewards: {pool.rewards}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">{pool.apy}</p>
                        <p className="text-xs text-gray-500">APY</p>
                      </div>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Warning */}
        <div className="flex items-start space-x-3 p-4 backdrop-blur-md bg-yellow-500/10 rounded-lg border border-yellow-300/30">
          <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm text-yellow-800 font-medium">Important Notice</p>
            <p className="text-sm text-yellow-700">
              Changes to your restaking preferences will take effect after the next reward distribution. 
              Make sure to review your selections carefully before saving.
            </p>
          </div>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="flex items-center space-x-3 p-4 backdrop-blur-md bg-green-500/10 rounded-lg border border-green-300/30">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <p className="text-sm text-green-800 font-medium">
              Preferences saved successfully! Your settings will be applied to future restaking operations.
            </p>
          </div>
        )}

        {/* Save Button */}
        <button
          onClick={handleSave}
          disabled={isSaving || (!selectedValidator && selectedDestination === 'validators') || (!selectedPool && selectedDestination === 'liquidity')}
          className="w-full flex items-center justify-center space-x-2 py-3 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
        >
          {isSaving ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Saving...</span>
            </>
          ) : (
            <>
              <Save className="w-5 h-5" />
              <span>Save Preferences</span>
            </>
          )}
        </button>
      </div>
    </div>
  )
}

export default RestakingPreferences
