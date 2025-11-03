import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section className="relative h-[380px] w-full overflow-hidden rounded-2xl bg-neutral-900">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay so text stays readable without blocking scene interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/40" />

      <div className="relative z-10 flex h-full items-center px-6 md:px-10">
        <div className="max-w-3xl text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-wider backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Live • Minimal POS
          </span>
          <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Streamlined restaurant POS for modern teams
          </h1>
          <p className="mt-3 max-w-xl text-sm text-white/80 md:text-base">
            Manage tables, track orders, and take payments with a clean, distraction-free
            dashboard. Designed for speed during service.
          </p>
        </div>
      </div>
    </section>
  );
}
