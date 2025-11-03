import TopBar from './components/TopBar';
import HeroCover from './components/HeroCover';
import SummaryCards from './components/SummaryCards';
import OrdersPanel from './components/OrdersPanel';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-8">
        <TopBar />
        <div className="mt-6">
          <HeroCover />
        </div>
        <div className="mt-6">
          <SummaryCards />
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <OrdersPanel />
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-5">
            <h3 className="text-base font-semibold">Quick Notes</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Keep service tips or specials here. This panel is a simple placeholder to round out the layout.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-700">
              <li>Soup of the day: Tomato Basil</li>
              <li>Out of stock: Truffle Fries</li>
              <li>Staff meeting at 4:30 PM</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
