import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import type { NavItem } from "./types";

const App = () => {
    const items: NavItem[] = [
        { label: "New Arrival", href: "#" },
        { label: "Men", href: "#" },
        { label: "Women", href: "#" },
        { label: "Sale", href: "#" },

    ];

    return (
        <>
            <Navbar items={items} title="LITE.SHOP"/>
            <MainContent />
            <Newsletter />
            <Footer />
        </>
    );
};

export default App;