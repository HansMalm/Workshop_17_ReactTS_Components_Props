import ProductCard from "./ProductCard";


const ProductGrid = () => {
    return (

        <section className="lg:col-span-9">
            <div
                className="border border-slate-200 rounded-[1.25rem] bg-slate-50/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-400 p-5">
                {/*Title + Sort*/}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h1 className="text-xl font-bold tracking-tight text-slate-900">Recommended for you</h1>

                    <label className="inline-flex items-center gap-2 text-sm text-slate-600">
                        <span className="hidden sm:inline">Sort by:</span>
                        <div className="relative">
                            <select
                                className="appearance-none border border-slate-200 bg-white rounded-[0.75rem] py-2 pl-3 pr-9 text-sm text-slate-950 transition-all duration-200 outline-none cursor-pointer focus:border-blue-400 focus:ring-4 focus:ring-blue-600/10">
                                <option selected>Newest</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Best Selling</option>
                            </select>
                            <span
                                className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path
                        d="m6 9 6 6 6-6"/></svg>
                  </span>
                        </div>
                    </label>
                </div>

                <div className="mt-5 h-px bg-slate-100"></div>

                {/*Product Grid*/}
                <div id="product-grid" className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/*Product Card 1*/}
                    <ProductCard />

                    {/*Product Card 2*/}
                    <article
                        className="border border-slate-200 rounded-[1.25rem] bg-white p-3 transition-all duration-400 hover:border-blue-400 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 group">
                        <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                            <img
                                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800"
                                alt="Speedster Running Shoes"
                                className="aspect-[4/5] w-full object-cover group-hover:scale-110 transition-transform duration-700"/>

                            {/*Product Overlay Actions*/}
                            <div
                                className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                <button type="button"
                                        className="h-12 w-12 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500 hover:bg-blue-600 hover:text-white"
                                        aria-label="Quick View">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                         viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2"
                                         stroke-linecap="round"
                                         stroke-linejoin="round">
                                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                                        <circle cx="12" cy="12" r="3"/>
                                    </svg>
                                </button>
                                <button type="button"
                                        className="h-12 w-12 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 hover:bg-blue-600 hover:text-white"
                                        aria-label="Add to cart">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                         viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2.5"
                                         stroke-linecap="round"
                                         stroke-linejoin="round">
                                        <path d="M5 12h14"/>
                                        <path d="M12 5v14"/>
                                    </svg>
                                </button>
                            </div>

                            <span
                                className="absolute left-3 top-3 px-3 py-1 text-[11px] font-bold rounded-full border border-amber-100/50 bg-amber-500/10 text-amber-600 backdrop-blur-md">Limited</span>

                            {/*Favorite*/}
                            <button type="button"
                                    className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/50 bg-white/70 text-slate-600 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-rose-500 hover:shadow-lg group/heart"
                                    aria-label="Add to favorites" title="Favorite">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                     viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="transition-colors group-hover/heart:fill-rose-500 group-hover/heart:stroke-rose-500">
                                    <path
                                        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                                </svg>
                            </button>
                        </div>

                        <div className="mt-4 px-1 pb-2 space-y-1">
                            <div className="flex items-center justify-between">
                                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-blue-600/70">
                                    Footwear</p>
                                <div className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"
                                         viewBox="0 0 24 24"
                                         fill="currentColor" className="text-amber-400">
                                        <path
                                            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                    </svg>
                                    <span className="text-[10px] font-bold text-slate-400">4.8</span>
                                </div>
                            </div>
                            <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                Speedster Running Shoes</h3>
                            <p className="text-[11px] font-medium text-amber-600">Only 4 items left</p>

                            <div className="flex items-center justify-between gap-3 pt-3">
                                <div className="flex flex-col">
                                            <span
                                                className="text-lg font-black text-slate-900 tracking-tight">1,200 kr</span>
                                </div>

                                <button type="button"
                                        className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 text-xs font-bold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 active:scale-95 group/btn"
                                        aria-label="Add to cart">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </article>

                    {/*Product Card 3*/}
                    <article
                        className="border border-slate-200 rounded-[1.25rem] bg-white p-3 transition-all duration-400 hover:border-blue-400 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 group">
                        <div
                            className="relative overflow-hidden rounded-2xl bg-slate-100 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800"
                                alt="Minimalist Quartz Watch"
                                className="aspect-[4/5] w-full object-cover group-hover:scale-110 transition-transform duration-700"/>

                            {/*Product Overlay Actions*/}
                            <div
                                className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                <button type="button"
                                        className="h-12 w-12 rounded-full bg-white/80 text-slate-400 shadow-xl flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500 cursor-not-allowed"
                                        aria-label="Quick View" disabled>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                         viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2"
                                         stroke-linecap="round"
                                         stroke-linejoin="round">
                                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                                        <circle cx="12" cy="12" r="3"/>
                                    </svg>
                                </button>
                                <button type="button"
                                        className="h-12 w-12 rounded-full bg-white/80 text-slate-400 shadow-xl flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 cursor-not-allowed"
                                        aria-label="Add to cart" disabled>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                         viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2.5"
                                         stroke-linecap="round"
                                         stroke-linejoin="round">
                                        <path d="M5 12h14"/>
                                        <path d="M12 5v14"/>
                                    </svg>
                                </button>
                            </div>

                            <span
                                className="absolute left-3 top-3 px-3 py-1 text-[11px] font-bold rounded-full border border-slate-200/50 bg-slate-900/60 text-white backdrop-blur-md">Sold Out</span>

                            {/*Favorite*/}
                            <button type="button"
                                    className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/50 bg-white/70 text-slate-600 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-rose-500 hover:shadow-lg group/heart"
                                    aria-label="Add to favorites" title="Favorite">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                     viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="transition-colors group-hover/heart:fill-rose-500 group-hover/heart:stroke-rose-500">
                                    <path
                                        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                                </svg>
                            </button>
                        </div>

                        <div className="mt-4 px-1 pb-2 space-y-1">
                            <div className="flex items-center justify-between">
                                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-blue-600/70">
                                    Accessories</p>
                                <div className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"
                                         viewBox="0 0 24 24"
                                         fill="currentColor" className="text-amber-400">
                                        <path
                                            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                    </svg>
                                    <span className="text-[10px] font-bold text-slate-400">4.7</span>
                                </div>
                            </div>
                            <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                Minimalist Quartz Watch</h3>
                            <p className="text-[11px] font-medium text-slate-400 italic">Back in stock next
                                week</p>

                            <div className="flex items-center justify-between gap-3 pt-3">
                                <div className="flex flex-col">
                                            <span
                                                className="text-lg font-black text-slate-400 tracking-tight">1,850 kr</span>
                                </div>

                                <button type="button"
                                        className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-slate-100 px-5 text-xs font-bold text-slate-400 transition-all duration-300 cursor-not-allowed"
                                        aria-label="Add to cart" disabled>
                                    Notify Me
                                </button>
                            </div>
                        </div>
                    </article>

                    {/*Product Card 4*/}
                    <article
                        className="border border-slate-200 rounded-[1.25rem] bg-white p-3 transition-all duration-400 hover:border-blue-400 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 group">
                        <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                            <img
                                src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800"
                                alt="classNameic Canvas Sneakers"
                                className="aspect-[4/5] w-full object-cover group-hover:scale-110 transition-transform duration-700"/>

                            {/*Product Overlay Actions*/}
                            <div
                                className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                <button type="button"
                                        className="h-12 w-12 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500 hover:bg-blue-600 hover:text-white"
                                        aria-label="Quick View">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                         viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2"
                                         stroke-linecap="round"
                                         stroke-linejoin="round">
                                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                                        <circle cx="12" cy="12" r="3"/>
                                    </svg>
                                </button>
                                <button type="button"
                                        className="h-12 w-12 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 hover:bg-blue-600 hover:text-white"
                                        aria-label="Add to cart">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                         viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2.5"
                                         stroke-linecap="round"
                                         stroke-linejoin="round">
                                        <path d="M5 12h14"/>
                                        <path d="M12 5v14"/>
                                    </svg>
                                </button>
                            </div>

                            <span
                                className="absolute left-3 top-3 px-3 py-1 text-[11px] font-bold rounded-full border border-blue-100/50 bg-blue-500/10 text-blue-600 backdrop-blur-md">Popular</span>

                            {/*Favorite*/}
                            <button type="button"
                                    className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/50 bg-white/70 text-slate-600 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-rose-500 hover:shadow-lg group/heart"
                                    aria-label="Add to favorites" title="Favorite">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                     viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="transition-colors group-hover/heart:fill-rose-500 group-hover/heart:stroke-rose-500">
                                    <path
                                        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                                </svg>
                            </button>
                        </div>

                        <div className="mt-4 px-1 pb-2 space-y-1">
                            <div className="flex items-center justify-between">
                                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-blue-600/70">
                                    Footwear</p>
                                <div className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"
                                         viewBox="0 0 24 24"
                                         fill="currentColor" className="text-amber-400">
                                        <path
                                            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                    </svg>
                                    <span className="text-[10px] font-bold text-slate-400">4.5</span>
                                </div>
                            </div>
                            <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                classNameic Canvas Sneakers</h3>
                            <p className="text-[11px] font-medium text-slate-500">In Stock • ships in 1 day</p>

                            <div className="flex items-center justify-between gap-3 pt-3">
                                <div className="flex flex-col">
                                            <span
                                                className="text-lg font-black text-slate-900 tracking-tight">550 kr</span>
                                </div>

                                <button type="button"
                                        className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 text-xs font-bold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 active:scale-95 group/btn"
                                        aria-label="Add to cart">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </article>

                    {/*Product Card 5*/}
                    <article
                        className="border border-slate-200 rounded-[1.25rem] bg-white p-3 transition-all duration-400 hover:border-blue-400 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 group">
                        <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                            <img
                                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800"
                                alt="Premium Wireless Headphones"
                                className="aspect-[4/5] w-full object-cover group-hover:scale-110 transition-transform duration-700"/>

                            {/*Product Overlay Actions*/}
                            <div
                                className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                <button type="button"
                                        className="h-12 w-12 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500 hover:bg-blue-600 hover:text-white"
                                        aria-label="Quick View">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                         viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2"
                                         stroke-linecap="round"
                                         stroke-linejoin="round">
                                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                                        <circle cx="12" cy="12" r="3"/>
                                    </svg>
                                </button>
                                <button type="button"
                                        className="h-12 w-12 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 hover:bg-blue-600 hover:text-white"
                                        aria-label="Add to cart">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                         viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2.5"
                                         stroke-linecap="round"
                                         stroke-linejoin="round">
                                        <path d="M5 12h14"/>
                                        <path d="M12 5v14"/>
                                    </svg>
                                </button>
                            </div>

                            <span
                                className="absolute left-3 top-3 px-3 py-1 text-[11px] font-bold rounded-full border border-rose-100/50 bg-rose-500/10 text-rose-600 backdrop-blur-md">Hot Deal</span>

                            {/*Favorite*/}
                            <button type="button"
                                    className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/50 bg-white/70 text-slate-600 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-rose-500 hover:shadow-lg group/heart"
                                    aria-label="Add to favorites" title="Favorite">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                     viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="transition-colors group-hover/heart:fill-rose-500 group-hover/heart:stroke-rose-500">
                                    <path
                                        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                                </svg>
                            </button>
                        </div>

                        <div className="mt-4 px-1 pb-2 space-y-1">
                            <div className="flex items-center justify-between">
                                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-blue-600/70">
                                    Accessories</p>
                                <div className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"
                                         viewBox="0 0 24 24"
                                         fill="currentColor" className="text-amber-400">
                                        <path
                                            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                    </svg>
                                    <span className="text-[10px] font-bold text-slate-400">4.9</span>
                                </div>
                            </div>
                            <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                Premium Wireless Headphones</h3>
                            <p className="text-[11px] font-medium text-slate-500">In Stock • Ships in 2 days</p>

                            <div className="flex items-center justify-between gap-3 pt-3">
                                <div className="flex flex-col">
                                            <span
                                                className="text-[10px] text-slate-400 line-through font-medium leading-none">2,200 kr</span>
                                    <span
                                        className="text-lg font-black text-slate-900 tracking-tight">1,690 kr</span>
                                </div>

                                <button type="button"
                                        className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 text-xs font-bold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 active:scale-95 group/btn"
                                        aria-label="Add to cart">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </article>

                    {/*Product Card 6*/}
                    <article
                        className="border border-slate-200 rounded-[1.25rem] bg-white p-3 transition-all duration-400 hover:border-blue-400 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 group">
                        <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                            <img
                                src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800"
                                alt="Tech Daypack"
                                className="aspect-[4/5] w-full object-cover group-hover:scale-110 transition-transform duration-700"/>

                            {/*Product Overlay Actions*/}
                            <div
                                className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                <button type="button"
                                        className="h-12 w-12 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500 hover:bg-blue-600 hover:text-white"
                                        aria-label="Quick View">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                         viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2"
                                         stroke-linecap="round"
                                         stroke-linejoin="round">
                                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                                        <circle cx="12" cy="12" r="3"/>
                                    </svg>
                                </button>
                                <button type="button"
                                        className="h-12 w-12 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 hover:bg-blue-600 hover:text-white"
                                        aria-label="Add to cart">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                         viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2.5"
                                         stroke-linecap="round"
                                         stroke-linejoin="round">
                                        <path d="M5 12h14"/>
                                        <path d="M12 5v14"/>
                                    </svg>
                                </button>
                            </div>

                            <span
                                className="absolute left-3 top-3 px-3 py-1 text-[11px] font-bold rounded-full border border-amber-100/50 bg-amber-500/10 text-amber-600 backdrop-blur-md">New Arrival</span>

                            {/*Favorite*/}
                            <button type="button"
                                    className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/50 bg-white/70 text-slate-600 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-rose-500 hover:shadow-lg group/heart"
                                    aria-label="Add to favorites" title="Favorite">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                     viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="transition-colors group-hover/heart:fill-rose-500 group-hover/heart:stroke-rose-500">
                                    <path
                                        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                                </svg>
                            </button>
                        </div>

                        <div className="mt-4 px-1 pb-2 space-y-1">
                            <div className="flex items-center justify-between">
                                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-blue-600/70">
                                    Accessories</p>
                                <div className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"
                                         viewBox="0 0 24 24"
                                         fill="currentColor" className="text-amber-400">
                                        <path
                                            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                    </svg>
                                    <span className="text-[10px] font-bold text-slate-400">4.6</span>
                                </div>
                            </div>
                            <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                Tech Daypack</h3>
                            <p className="text-[11px] font-medium text-slate-500">In Stock • Ships in 1 day</p>

                            <div className="flex items-center justify-between gap-3 pt-3">
                                <div className="flex flex-col">
                                            <span
                                                className="text-lg font-black text-slate-900 tracking-tight">1,100 kr</span>
                                </div>

                                <button type="button"
                                        className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 text-xs font-bold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 active:scale-95 group/btn"
                                        aria-label="Add to cart">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </article>
                </div>

                {/*Pagination*/}
                <nav className="mt-8 flex items-center justify-center gap-2" aria-label="Pagination">
                    <button type="button"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 font-medium transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50"
                            aria-label="Previous page" title="Previous">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round"
                             stroke-linejoin="round">
                            <path d="m15 18-6-6 6-6"/>
                        </svg>
                    </button>

                    <button type="button"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-blue-600 bg-blue-600 text-white font-medium transition-all duration-200"
                            aria-current="page">1
                    </button>
                    <button type="button"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 font-medium transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50">
                        2
                    </button>
                    <button type="button"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 font-medium transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50">
                        3
                    </button>
                    <span className="px-2 text-sm text-slate-400">…</span>
                    <button type="button"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 font-medium transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50">
                        12
                    </button>

                    <button type="button"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 font-medium transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50"
                            aria-label="Next page" title="Next">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round"
                             stroke-linejoin="round">
                            <path d="m9 18 6-6-6-6"/>
                        </svg>
                    </button>
                </nav>
            </div>
        </section>
    );
};

export default ProductGrid;