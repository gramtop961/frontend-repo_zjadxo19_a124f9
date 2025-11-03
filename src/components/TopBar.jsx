import { Search, Bell, User } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="flex items-center justify-between gap-4">
      <div className="flex min-w-0 items-center gap-3">
        <div className="hidden rounded-lg bg-black text-white px-2 py-1 text-xs font-medium sm:inline-flex">POS</div>
        <h2 className="truncate text-lg font-semibold md:text-xl">Dashboard</h2>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative hidden w-64 items-center sm:flex">
          <Search className="pointer-events-none absolute left-3 h-4 w-4 text-neutral-400" />
          <input
            type="text"
            placeholder="Search menu or orders..."
            className="w-full rounded-lg border border-neutral-200 bg-white py-2 pl-9 pr-3 text-sm outline-none focus:border-neutral-400 focus:ring-0"
          />
        </div>
        <button className="grid h-10 w-10 place-items-center rounded-lg border border-neutral-200 bg-white hover:bg-neutral-50">
          <Bell className="h-5 w-5" />
        </button>
        <button className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 hover:bg-neutral-50">
          <div className="grid h-6 w-6 place-items-center rounded-full bg-neutral-900 text-white">
            <User className="h-4 w-4" />
          </div>
          <span className="hidden text-sm font-medium sm:inline">Alex</span>
        </button>
      </div>
    </header>
  );
}
