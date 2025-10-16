import { User, Settings, Download, LogOut } from 'lucide-react';

export function Profile() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Profile</h1>
        <p className="text-gray-400">Manage your account and preferences</p>
      </div>

      {/* User Info Card */}
      <div className="card-elevated">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
            <User size={32} className="text-gray-400" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Guest User</h2>
            <p className="text-sm text-gray-400">Local account</p>
          </div>
        </div>
        <button className="btn-secondary w-full">Edit Profile</button>
      </div>

      {/* Stats Summary */}
      <div className="card-elevated">
        <h3 className="font-semibold mb-3">Your Stats</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-2xl font-bold text-primary-blue">0</p>
            <p className="text-sm text-gray-400">Total Workouts</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-primary-green">0</p>
            <p className="text-sm text-gray-400">Personal Records</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-primary-yellow">0</p>
            <p className="text-sm text-gray-400">Day Streak</p>
          </div>
          <div>
            <p className="text-2xl font-bold">0 kg</p>
            <p className="text-sm text-gray-400">Total Volume</p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-3">
        <button className="w-full card hover:border-gray-600 transition-colors flex items-center gap-3 p-4">
          <Settings className="text-gray-400" size={20} />
          <span>Settings</span>
        </button>
        <button className="w-full card hover:border-gray-600 transition-colors flex items-center gap-3 p-4">
          <Download className="text-gray-400" size={20} />
          <span>Export Data</span>
        </button>
        <button className="w-full card hover:border-red-500 transition-colors flex items-center gap-3 p-4 text-red-400">
          <LogOut size={20} />
          <span>Sign Out</span>
        </button>
      </div>

      {/* Phase 5 Notice */}
      <div className="card bg-gray-800/50 border border-gray-700">
        <p className="text-sm text-gray-400">
          <span className="text-primary-blue font-medium">Coming in Phase 5:</span> User
          authentication, cloud sync, and multi-device support
        </p>
      </div>
    </div>
  );
}
