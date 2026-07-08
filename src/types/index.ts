export type NavItem = {
    label: string;
    href: string;
};

export type NavbarProps = {
    items: NavItem[];
    title: string;
};

export type ProductItem = {
    id: number;
    image: string;
    category: string;
    name: string;
    rating: number;
    oldPrice: string;
    price: string;
    stock: string;
    badge: string;
    badgeClass: string;

};

export type ProductItemProps = {
    product: ProductItem;
};