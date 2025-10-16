import { Dumbbell, TrendingUp, Calendar, Award } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Dumbbell className="text-primary-blue" size={32} />
        <div>
          <h1 className="text-3xl font-bold">GymTracker Pro</h1>
          <p className="text-gray-400">Welcome back!</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="card">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="text-primary-blue" size={20} />
            <span className="text-sm text-gray-400">This Week</span>
          </div>
          <p className="text-2xl font-bold">0</p>
          <p className="text-xs text-gray-500">Workouts</p>
        </div>

        <div className="card">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="text-primary-green" size={20} />
            <span className="text-sm text-gray-400">Volume</span>
          </div>
          <p className="text-2xl font-bold">0 kg</p>
          <p className="text-xs text-gray-500">Total lifted</p>
        </div>

        <div className="card">
          <div className="flex items-center gap-2 mb-2">
            <Award className="text-primary-yellow" size={20} />
            <span className="text-sm text-gray-400">Streak</span>
          </div>
          <p className="text-2xl font-bold">0</p>
          <p className="text-xs text-gray-500">Days</p>
        </div>

        <div className="card">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="text-primary-blue" size={20} />
            <span className="text-sm text-gray-400">PRs</span>
          </div>
          <p className="text-2xl font-bold">0</p>
          <p className="text-xs text-gray-500">Personal records</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card-elevated">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="text-center py-8 text-gray-400">
          <p>No workouts yet</p>
          <p className="text-sm mt-2">Tap "Workout" to start your first session</p>
        </div>
      </div>

      {/* Phase Status */}
      <div className="card bg-gray-800 border border-gray-700">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-primary-green rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-300">Development Status</span>
        </div>
        <p className="text-xs text-gray-400">
          Phase 1: Data Layer Complete ✅ | Phase 2: UI In Progress
        </p>
      </div>
    </div>
  );
}
