export type NavItem = {
    label: string;
    href: string;
};

export type NavbarProps = {
    items: NavItem[];
    title: string;
};