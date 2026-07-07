import Sidebar from "./Sidebar";
import ProductGrid from "./ProductGrid";

const MainContent = () => {
    return (
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                {/*Sidebar Filters*/}
                <Sidebar />

                {/*Main Content*/}
                <ProductGrid />
            </div>
        </main>

    );
};

export default MainContent;