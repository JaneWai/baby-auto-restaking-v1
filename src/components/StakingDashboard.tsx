import React from 'react'
import { TrendingUp, Coins, Clock, Target } from 'lucide-react'

interface StakingDashboardProps {
  walletAddress: string
}

const StakingDashboard: React.FC<StakingDashboardProps> = ({ walletAddress }) => {
  // Mock data
  const stakingData = {
    totalStaked: '125,000',
    pendingRewards: '2,847.32',
    nextRestaking: '2h 15m',
    apy: '12.5%',
    totalEarned: '18,492.67'
  }

  const recentActivity = [
    { type: 'restake', amount: '1,234.56', destination: 'Validator Pool A', time: '2 hours ago' },
    { type: 'restake', amount: '987.43', destination: 'LP Pool ETH/BABY', time: '1 day ago' },
    { type: 'restake', amount: '2,156.78', destination: 'Validator Pool B', time: '3 days ago' },
  ]

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="backdrop-blur-md bg-white/10 rounded-xl p-6 border border-white/20 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Coins className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-sm text-gray-500">Total Staked</span>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">{stakingData.totalStaked}</p>
            <p className="text-sm text-gray-600">BABY Tokens</p>
          </div>
        </div>

        <div className="backdrop-blur-md bg-white/10 rounded-xl p-6 border border-white/20 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-500/20 rounded-lg">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-sm text-gray-500">Pending Rewards</span>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">{stakingData.pendingRewards}</p>
            <p className="text-sm text-gray-600">BABY Tokens</p>
          </div>
        </div>

        <div className="backdrop-blur-md bg-white/10 rounded-xl p-6 border border-white/20 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-sm text-gray-500">Next Restaking</span>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">{stakingData.nextRestaking}</p>
            <p className="text-sm text-gray-600">Estimated</p>
          </div>
        </div>

        <div className="backdrop-blur-md bg-white/10 rounded-xl p-6 border border-white/20 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-orange-500/20 rounded-lg">
              <Target className="w-6 h-6 text-orange-600" />
            </div>
            <span className="text-sm text-gray-500">Current APY</span>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">{stakingData.apy}</p>
            <p className="text-sm text-gray-600">Annual Yield</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 shadow-lg">
        <div className="p-6 border-b border-white/20">
          <h3 className="text-xl font-semibold text-gray-800">Recent Restaking Activity</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-4 backdrop-blur-md bg-white/10 rounded-lg border border-white/20">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Auto-Restaked {activity.amount} BABY</p>
                    <p className="text-sm text-gray-600">to {activity.destination}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StakingDashboard
