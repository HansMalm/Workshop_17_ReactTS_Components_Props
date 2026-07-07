import {Menu, Package, Search, ShoppingBag, User} from "lucide-react";


const Navbar = () => {
    return (
        <header className="sticky top-0 z-40 border-b border-blue-700/30 bg-blue-600 shadow-lg shadow-blue-900/10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/*Logo*/}
                    <a href="#" className="flex items-center gap-2 font-bold tracking-tight text-white">
            <span
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-blue-600 shadow-md">
              <Package size={20} strokeWidth={2.5} />
            </span>
                        <span className="text-xl tracking-tighter uppercase font-black">LITE.SHOP</span>
                    </a>

                    {/*Nav links*/}
                    <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-blue-100">
                        <a className="relative transition-colors duration-200 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:w-full after:h-[2px] after:scale-x-0 after:origin-center after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 after:rounded-full"
                           href="#">New Arrival</a>
                        <a className="relative transition-colors duration-200 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:w-full after:h-[2px] after:scale-x-0 after:origin-center after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 after:rounded-full"
                           href="#">Men</a>
                        <a className="relative transition-colors duration-200 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:w-full after:h-[2px] after:scale-x-0 after:origin-center after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 after:rounded-full"
                           href="#">Women</a>
                        <a className="relative transition-colors duration-200 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:w-full after:h-[2px] after:scale-x-0 after:origin-center after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 after:rounded-full"
                           href="#">Sale</a>
                    </nav>

                    {/*Right icons*/}
                    <div className="flex items-center gap-2">
                        {/*Status Indicator*/}
                        <div
                            className="mr-4 hidden items-center gap-2 rounded-full bg-blue-500/30 px-3 py-1 lg:flex border border-blue-400/20">
                    <span className="relative flex h-2 w-2">
                        <span
                            className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-200 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-100"></span>
                    </span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-blue-50">Live</span>
                        </div>

                        {/*Search*/}
                        <div className="relative hidden sm:block">
                            <input id="search-input" type="text" placeholder="Search products..."
                                   className="h-10 w-48 rounded-[0.75rem] bg-blue-500/30 pl-10 pr-4 text-xs font-medium text-blue-50 placeholder:text-blue-200/50 border border-blue-400/20 focus:bg-blue-500/50 focus:w-64 transition-all duration-300 outline-none"/>
                            <Search
                                size={16}
                                strokeWidth={2.5}
                                className="absolute left-3.5 top-3 text-blue-200"
                            />
                        </div>

                        {/*Cart*/}
                        <button type="button"
                                className="relative inline-flex h-10 w-10 items-center justify-center rounded-[0.75rem] bg-blue-500/30 text-blue-50 transition-all duration-200 hover:text-white hover:bg-blue-500/50 border border-blue-400/20"
                                aria-label="Cart" title="Cart">
                            <ShoppingBag size={20} strokeWidth={2} />
                            {/*Cart Count Badge*/}
                            <span id="cart-count"
                                  className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm hidden">0</span>
                        </button>

                        {/*User*/}
                        <button type="button"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-[0.75rem] bg-blue-500/30 text-blue-50 transition-all duration-200 hover:text-white hover:bg-blue-500/50 border border-blue-400/20"
                                aria-label="Account" title="Account">
                            <User size={20} strokeWidth={2} />
                        </button>

                        {/*Mobile Menu Button*/}
                        <button type="button"
                                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-[0.75rem] bg-blue-500/30 text-blue-50 transition-all duration-200 hover:text-white hover:bg-blue-500/50 border border-blue-400/20"
                                aria-label="Menu" title="Menu">
                            <Menu size={24} strokeWidth={2.5} />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;