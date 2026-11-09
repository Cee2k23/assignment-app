export default function NewInPage() {
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
            <button className="rounded-full border-2 border-black px-3 py-2">New In</button>
            <a href="/collections" className="rounded-full border-2 border-black px-3 py-2 transition duration-200 hover:-translate-y-1 hover:scale-105">Collections</a>
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
              <div className="flex min-h-[260px] items-center justify-center bg-linear-to-br from-yellow-400 via-yellow-300 to-slate-200 p-8 md:min-h-105">
                <div className="text-center">
                  <p className="text-xs font-bold mb-7 uppercase tracking-[0.3em] text-slate-700">Fresh arrivals</p>
                  <h1 className="font-black pb-15 text-4xl tracking-tight text-slate-900 sm:text-5xl">New In</h1>
                  <p className="mb-74 text-lg font-semibold text-slate-700">The latest picks for your everyday style</p>
                </div>
              </div>

              <div className="flex flex-col justify-center p-8 md:p-10">
                <span className="w-fit rounded-full bg-violet-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-violet-700">
                  Just dropped
                </span>

                <h2 className="mt-5 text-2xl font-black text-slate-900 sm:text-3xl">A fresh collection made for modern living.</h2>

                <div className="mt-6 space-y-4 text-sm text-slate-600 sm:text-base">
                  <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                    <strong className="block text-slate-900">Trending now</strong>
                    Fashion-forward essentials and everyday upgrades.
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                    <strong className="block text-slate-900">Limited stock</strong>
                    New pieces are arriving fast — shop while they last.
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                    <strong className="block text-slate-900">Stay ahead</strong>
                    Discover must-have products before the crowd does.
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
              <h3 className="text-xl font-black text-slate-900">Fresh arrivals</h3>
              <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">12 items</span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["Minimal Leather Tote", "$89"],
                ["Glow Day Backpack", "$64"],
                ["Smart Desk Lamp", "$49"],
              ].map(([name, price]) => (
                <div key={name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-3 h-28 rounded-xl bg-gradient-to-br from-violet-100 to-slate-200" />
                  <p className="text-sm font-semibold text-slate-700">{name}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-lg font-black text-slate-900">{price}</span>
                    <button className="rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white">
                      Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
