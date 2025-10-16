import { Outlet } from 'react-router-dom';
import { BottomNav } from '../navigation/BottomNav';

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pb-16">
      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <Outlet />
      </main>

      {/* Bottom navigation */}
      <BottomNav />
    </div>
  );
}
