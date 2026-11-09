export default function DealsPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-6 text-slate-900">
        <header className="mx-auto flex max-w-7xl flex-col gap-4 rounded-[28px] bg-white px-5 py-4 shadow-sm ring-4 ring-slate-200 md:flex-row md:items-center md:justify-between">
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
            <a href="/deals" className="rounded-full border-2 border-black px-3 py-2">Deals</a>
            <a href="/new-in" className="rounded-full border-2 border-black px-3 py-2 transition duration-200 hover:-translate-y-1 hover:scale-105">New In</a>
            <a href="/collections" className="rounded-full border-2 border-black px-3 py-2 transition duration-200 hover:-translate-y-1 hover:scale-105">Collections</a>
          </nav>

          <div className="flex items-center justify-center gap-3">
            <button className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
              Search
            </button>
          </div>
        </header>
      <div className="flex w-full items-center justify-center py-8">
        <section className="w-full max-w-5xl overflow-hidden rounded-[32px] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.12)] ring-1 ring-slate-200">
          <div className="grid gap-0 md:grid-cols-2">
            <div className="flex items-center justify-center bg-gradient-to-br from-yellow-400 via-yellow-300 to-slate-200 p-8 md:min-h-[420px]">
              <div className="text-center">
                <p className="text-xs font-bold mb-4 uppercase tracking-[0.3em] text-slate-700">This week</p>
                <h1 className="pb-16 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Mega Deals</h1>
                <p className="mb-81 text-lg font-semibold text-slate-700">Up to 60% off selected essentials</p>
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 md:p-10">
              <span className="w-fit rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                Limited time
              </span>

              <h2 className="mt-5 text-2xl font-black text-slate-900 sm:text-3xl">Everything in this store is built to save more.</h2>

              <div className="mt-6 space-y-4 text-sm text-slate-600 sm:text-base">
                <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                  <strong className="block text-slate-900">Smart Savings</strong>
                  Discounts on trending electronics, home needs, and daily essentials.
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                  <strong className="block text-slate-900">Fast Delivery</strong>
                  Enjoy quick shipping on your most-needed items.
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                  <strong className="block text-slate-900">Fresh Offers</strong>
                  New deals appear every week for loyal shoppers.
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
      </div>
    </main>
  );
}
