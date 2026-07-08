import ProductCard from "./ProductCard";
import type {ProductItem} from "../types";


const ProductGrid = () => {

    const products: ProductItem[] = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=800",
            category: "Outerwear",
            name: "Technical Shell Jacket",
            rating: 4.9,
            oldPrice: "1,450 kr",
            price: "890 kr",
            stock: "In Stock • Ships in 2 days",
            badge: "Discount",
            badgeClass: "border border-rose-100/50 bg-rose-500/10 text-rose-600"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
            category: "Footwear",
            name: "Speedster Running Shoes",
            rating: 4.8,
            oldPrice: "",
            price: "1,200 kr",
            stock: "Only 4 items left",
            badge: "Limited",
            badgeClass: "border border-amber-100/50 bg-amber-100/50 bg-amber-500/10 text-amber-600"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
            category: "Accessories",
            name: "Minimalist Quartz Watch",
            rating: 4.7,
            oldPrice: "",
            price: "1,850 kr",
            stock: "Back in stock next week",
            badge: "Sold Out",
            badgeClass: "border border-slate-200/50 bg-slate-900/60 text-white"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800",
            category: "Footwear",
            name: "Classic Canvas Sneakers",
            rating: 4.5,
            oldPrice: "",
            price: "550 kr",
            stock: "In Stock • ships in 1 day",
            badge: "Popular",
            badgeClass: "border border-blue-100/50 bg-blue-500/10 text-blue-600"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
            category: "Accessories",
            name: "Premium Wireless Headphones",
            rating: 4.9,
            oldPrice: "2,200 kr",
            price: "1,690 kr",
            stock: "In Stock • Ships in 2 days",
            badge: "Hot Deal",
            badgeClass: "border border-rose-100/50 bg-rose-500/10 text-rose-600"
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800",
            category: "Bags",
            name: "Tech Daypack",
            rating: 4.6,
            oldPrice: "",
            price: "990 kr",
            stock: "In Stock • Ships in 1 day",
            badge: "New Arrival",
            badgeClass: "border border-amber-100/50 bg-amber-500/10 text-amber-600"
        }
    ];

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
                    {/*Product Cards*/}
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
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