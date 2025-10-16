import { Play, Plus } from 'lucide-react';

export function WorkoutLogger() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Start Workout</h1>
        <p className="text-gray-400">Choose a template or start a blank workout</p>
      </div>

      {/* Quick Start */}
      <button className="w-full card-elevated hover:border-primary-blue transition-colors flex items-center justify-center gap-3 py-6">
        <Play className="text-primary-blue" size={24} />
        <span className="text-lg font-semibold">Start Empty Workout</span>
      </button>

      {/* Templates Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Workout Templates</h2>
          <button className="text-primary-blue text-sm flex items-center gap-1">
            <Plus size={16} />
            New Template
          </button>
        </div>

        <div className="card text-center py-12 text-gray-400">
          <p>No templates yet</p>
          <p className="text-sm mt-2">Create your first workout template to get started faster</p>
        </div>
      </div>

      {/* Phase 2 Notice */}
      <div className="card bg-gray-800/50 border border-gray-700">
        <p className="text-sm text-gray-400">
          <span className="text-primary-blue font-medium">Coming in Phase 2:</span> Full workout
          logging interface with exercise selection, set tracking, and real-time volume calculations
        </p>
      </div>
    </div>
  );
}
