"use client";

import { useEffect, useMemo, useState } from "react";

const formatPrice = (price) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

export default function Section1() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("Unable to load listings");
        }

        const data = await response.json();

        if (isMounted) {
          setProducts(data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  const featuredProducts = useMemo(() => products.slice(0, 4), [products]);
  const categories = useMemo(
    () => [...new Set(products.map((product) => product.category))].slice(0, 5),
    [products]
  );

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <section className="mx-auto max-w-7xl px-4 py-6">
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

          <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-600">
            <a href="/" className="rounded-full border-2 border-black px-3 py-2">Home</a>
            <a href="/deals" className="rounded-full border-2 border-black px-3 py-2 transition duration-200 hover:-translate-y-2 hover:scale-110">Deals</a>
            <a href="/new-in" className="rounded-full border-2 border-black px-3 py-2 transition duration-200 hover:-translate-y-2 hover:scale-110">New In</a>
            <a href="#" className="rounded-full border-2 border-black px-3 py-2 transition duration-200 hover:-translate-y-2 hover:scale-110">Collections</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
              Search
            </button>
            <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-200 transition hover:bg-slate-800">
              Cart (0)
            </button>
          </div>
        </header>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="overflow-hidden rounded-4xl bg-linear-to-br from-yellow-400 via-yellow-400 to-gray-400 p-7 text-white shadow-[0_20px_60px_rgba(15,23,42,0.25)] md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black">Fresh picks</p>
            <h2 className="mt-4 max-w-lg text-4xl font-black tracking-tight md:text-5xl text-black">
              Upgrade your everyday essentials.
            </h2>
            <p className="mt-4 max-w-md text-base font-bold text-black md:text-lg">
              Discover premium products at irresistible prices for work, home & style.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200">
                Shop now
              </button>
              <button className="rounded-full border border-white/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Explore offers
              </button>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <p className="text-3xl font-black">20K+</p>
                <p className="mt-1 text-sm text-slate-300">happy shoppers</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <p className="text-3xl font-black">4.8/5</p>
                <p className="mt-1 text-sm text-slate-300">customer rating</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <p className="text-3xl font-black">48h</p>
                <p className="mt-1 text-sm text-slate-300">fast delivery</p>
              </div>
            </div>
          </div>

          <aside className="rounded-4xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">Trending</p>
                <h3 className="mt-2 text-2xl font-bold text-slate-900">Top categories</h3>
              </div>
              <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">Live</span>
            </div>

            <div className="mt-6 space-y-3">
              {categories.length > 0 ? (
                categories.map((category, index) => (
                  <div
                    key={category}
                    className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    <span className="capitalize">{category}</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-bold text-slate-600">
                      {index + 1}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-500">{loading ? "Categories loading..." : "No categories available"}</p>
              )}
            </div>
          </aside>
        </section>

        <section className="mt-12">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold pt-14 uppercase tracking-[0.2em] text-indigo-600">Featured</p>
              <h3 className="mt-2 text-3xl font-black text-slate-900">Best sellers</h3>
            </div>
            <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
              All products
            </button>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {featuredProducts.length > 0 ? (
              featuredProducts.map((product) => (
                <article
                  key={product.id}
                  className="group overflow-hidden rounded-[28px] bg-white shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-64 bg-slate-50 p-6">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-700">
                      {product.category}
                    </span>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between text-xs font-medium text-slate-500">
                      <span className="inline-flex items-center gap-1">
                        <span className="text-amber-400">★</span>
                        {product.rating?.rate ?? 0}
                      </span>
                      <span>{product.rating?.count ?? 0} reviews</span>
                    </div>

                    <h4 className="mt-3 line-clamp-2 min-h-13 text-base font-semibold leading-6 text-slate-800">
                      {product.title}
                    </h4>

                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-black text-slate-900">{formatPrice(product.price)}</p>
                        <p className="text-xs text-slate-400 line-through">{formatPrice(product.price * 1.25)}</p>
                      </div>
                      <button className="rounded-full bg-slate-900 px-3 py-2 text-xs font-semibold text-white transition hover:bg-slate-800">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-full rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
                {loading ? "Loading products..." : "No products available right now. Please try again later."}
              </div>
            )}
          </div>
        </section>
      </section>
    </main>
  );
}