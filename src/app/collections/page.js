export default function CollectionsPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-slate-100 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <header className="flex flex-col gap-4 rounded-[28px] bg-white px-5 py-4 shadow-sm ring-4 ring-slate-200 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-yellow-400 to-gray-400 text-lg font-bold text-white shadow-lg shadow-indigo-200">
              C
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Mallfront</p>
              <h1 className="text-xl font-bold text-slate-900">CityMall™</h1>
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-slate-600 sm:gap-3">
            <a href="/" className="rounded-full border-2 border-black px-3 py-2 transition duration-200 hover:-translate-y-1 hover:scale-105">Home</a>
            <a href="/deals" className="rounded-full border-2 border-black px-3 py-2 transition duration-200 hover:-translate-y-1 hover:scale-105">Deals</a>
            <a href="/new-in" className="rounded-full border-2 border-black px-3 py-2 transition duration-200 hover:-translate-y-1 hover:scale-105">New In</a>
            <button className="rounded-full border-2 border-black px-3 py-2">Collections</button>
          </nav>

          <div className="flex items-center justify-center gap-3">
            <button className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
              Search
            </button>
          </div>
        </header>

        <div className="mt-8 space-y-8 pb-8">
          <section className="overflow-hidden rounded-4xl bg-white shadow-[0_20px_60px_rgba(15,23,42,0.12)] ring-1 ring-slate-200">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="flex min-h-[260px] items-center justify-center bg-gradient-to-br from-yellow-400 via-yellow-300 to-slate-200 p-8 md:min-h-[420px]">
                <div className="text-center">
                  <p className="text-xs font-bold mb-4 uppercase tracking-[0.3em] text-slate-700">Curated picks</p>
                  <h1 className="font-black pb-17 text-4xl tracking-tight text-slate-900 sm:text-5xl">Collections</h1>
                  <p className="font-semibold mb-72 text-lg text-slate-700">Shop by mood, style, and everyday comfort</p>
                </div>
              </div>

              <div className="flex flex-col justify-center p-8 md:p-10">
                <span className="w-fit rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
                  Editor’s picks
                </span>

                <h2 className="mt-5 text-2xl font-black text-slate-900 sm:text-3xl">Build a home and wardrobe that feels effortlessly yours.</h2>

                <div className="mt-6 space-y-4 text-sm text-slate-600 sm:text-base">
                  <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                    <strong className="block text-slate-900">Workday ready</strong>
                    Clean essentials for productivity and comfort.
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                    <strong className="block text-slate-900">Weekend vibe</strong>
                    Easy pieces made for movement and style.
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                    <strong className="block text-slate-900">Home refresh</strong>
                    Thoughtful upgrades that brighten your space.
                  </div>
                </div>

                <a
                  href="/"
                  className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:scale-105"
                >
                  Back to Home
                </a>
              </div>
            </div>
          </section>

          <section className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-black text-slate-900">Featured collections</h3>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">4 styles</span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["City Essentials", "Work + daily flow"],
                ["Weekend Edit", "Casual comfort"],
                ["Home Glow", "Warm interiors"],
                ["Travel Kit", "Better essentials"],
              ].map(([name, desc]) => (
                <div key={name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-3 h-28 rounded-xl bg-gradient-to-br from-amber-100 via-orange-100 to-slate-200" />
                  <p className="text-sm font-semibold text-slate-700">{name}</p>
                  <p className="mt-2 text-xs text-slate-500">{desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
