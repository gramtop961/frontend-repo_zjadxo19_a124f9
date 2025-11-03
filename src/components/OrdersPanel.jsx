import { Clock, CreditCard, Trash2 } from 'lucide-react';

const orders = [
  {
    id: 'A104',
    table: 'T7',
    items: [
      { name: 'Margherita Pizza', qty: 1 },
      { name: 'Sparkling Water', qty: 2 },
    ],
    total: 24.5,
    status: 'Preparing',
    eta: '6 min',
  },
  {
    id: 'A105',
    table: 'T2',
    items: [
      { name: 'Caesar Salad', qty: 2 },
      { name: 'Iced Tea', qty: 2 },
    ],
    total: 31.0,
    status: 'Queued',
    eta: '12 min',
  },
  {
    id: 'TK-212',
    table: 'Takeout',
    items: [
      { name: 'Burger', qty: 2 },
      { name: 'Fries', qty: 1 },
    ],
    total: 28.0,
    status: 'Ready',
    eta: 'Pickup',
  },
];

export default function OrdersPanel() {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold">Live Orders</h3>
          <p className="text-xs text-neutral-500">In progress • Updated just now</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-neutral-500">
          <Clock className="h-4 w-4" />
          <span>Auto-refresh</span>
        </div>
      </div>

      <ul className="divide-y divide-neutral-200">
        {orders.map((o) => (
          <li key={o.id} className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md bg-neutral-900 px-2 py-1 text-xs font-medium text-white">{o.id}</span>
                <span className="rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-700">{o.table}</span>
                <span className="text-xs text-neutral-500">{o.status}</span>
                <span className="ml-1 rounded-md bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">{o.eta}</span>
              </div>
              <p className="mt-2 truncate text-sm text-neutral-700">
                {o.items.map((it) => `${it.qty}× ${it.name}`).join(' · ')}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-lg bg-neutral-100 px-3 py-1 text-sm font-medium">${o.total.toFixed(2)}</span>
              <button className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm hover:bg-neutral-50">
                <CreditCard className="h-4 w-4" />
                Charge
              </button>
              <button className="grid h-10 w-10 place-items-center rounded-lg border border-neutral-200 bg-white text-neutral-500 hover:bg-red-50 hover:text-red-600">
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
