import { BarChart3, CreditCard, Clock, ChefHat } from 'lucide-react';

const cards = [
  {
    label: 'Total Sales',
    value: '$4,280',
    sub: '+12% vs yesterday',
    icon: BarChart3,
  },
  {
    label: 'Orders Today',
    value: '137',
    sub: 'Peak: 1:15 PM',
    icon: ChefHat,
  },
  {
    label: 'Avg. Ticket',
    value: '$31.22',
    sub: 'Dine-in • Takeout',
    icon: CreditCard,
  },
  {
    label: 'Table Turn',
    value: '42m',
    sub: 'Median service time',
    icon: Clock,
  },
];

export default function SummaryCards() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map(({ label, value, sub, icon: Icon }) => (
        <div
          key={label}
          className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_1px_0_0_rgba(0,0,0,0.04)]"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm text-neutral-500">{label}</p>
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-neutral-900 text-white">
              <Icon className="h-4 w-4" />
            </span>
          </div>
          <p className="mt-3 text-2xl font-semibold tracking-tight">{value}</p>
          <p className="mt-1 text-xs text-neutral-500">{sub}</p>
        </div>
      ))}
    </section>
  );
}
