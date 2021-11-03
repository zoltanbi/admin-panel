export interface Notification {
    icon: string;
    content: string;
}

export interface SidebarRoutes {
    display_name: string;
    route: string;
    icon: string;
}

export interface UserMenu {
    icon: string;
    content: string;
}

export interface StatusCard {
    icon: string;
    count: string;
    title: string;
}
export interface CustomerData {
    id: number;
    name: string;
    email: string;
    location: string;
    phone: string;
    total_spend: string;
    total_orders: number;
}
