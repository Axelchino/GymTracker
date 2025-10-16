import { TrendingUp, BarChart3, Award } from 'lucide-react';

export function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Progress & Analytics</h1>
        <p className="text-gray-400">Track your strength gains and volume trends</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card-elevated">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="text-primary-green" size={24} />
            <h3 className="font-semibold">Volume Trend</h3>
          </div>
          <p className="text-3xl font-bold mb-1">--</p>
          <p className="text-sm text-gray-400">Weekly average</p>
        </div>

        <div className="card-elevated">
          <div className="flex items-center gap-2 mb-3">
            <BarChart3 className="text-primary-blue" size={24} />
            <h3 className="font-semibold">Strength Gains</h3>
          </div>
          <p className="text-3xl font-bold mb-1">--</p>
          <p className="text-sm text-gray-400">This month</p>
        </div>

        <div className="card-elevated">
          <div className="flex items-center gap-2 mb-3">
            <Award className="text-primary-yellow" size={24} />
            <h3 className="font-semibold">Recent PRs</h3>
          </div>
          <p className="text-3xl font-bold mb-1">0</p>
          <p className="text-sm text-gray-400">Last 30 days</p>
        </div>
      </div>

      {/* Chart Placeholders */}
      <div className="card-elevated">
        <h2 className="text-xl font-semibold mb-4">Volume Over Time</h2>
        <div className="h-64 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500">
          Chart Placeholder - Coming in Phase 3
        </div>
      </div>

      <div className="card-elevated">
        <h2 className="text-xl font-semibold mb-4">Strength Progression</h2>
        <div className="h-64 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500">
          Chart Placeholder - Coming in Phase 3
        </div>
      </div>

      {/* Phase 3 Notice */}
      <div className="card bg-gray-800/50 border border-gray-700">
        <p className="text-sm text-gray-400">
          <span className="text-primary-blue font-medium">Coming in Phase 3:</span> Interactive
          charts, PR detection, volume analytics, and comprehensive progress tracking with Recharts
        </p>
      </div>
    </div>
  );
}
