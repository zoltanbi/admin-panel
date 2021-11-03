export interface TableCustomer {
    username: string;
    order: string;
    price: string;
}

export interface TopCustomers {
    head: string[];
    body: TableCustomer[];
}

export interface OrderStatus {
    shipping: string;
    pending: string;
    paid: string;
    refund: string;
}

export interface OrderUser {
    id: string;
    user: string;
    date: string;
    price: string;
    status: string;
}

export interface LatestOrder {
    header: string[];
    body: OrderUser[];
}