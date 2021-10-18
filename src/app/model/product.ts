export class Product {
    title: string;
    description: string;
    photo: string;
    price: number;
    stock: number;

    constructor(title: string, description: string, photo: string, price: number, stock: number) {
        this.title=title;
        this.description=description;
        this.photo=photo;
        this.price=price;
        this.stock=stock;
    }
}
