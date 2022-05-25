export class Book {
    id: number;
    code: string;
    description: string;
    price: number;

    constructor(code: string, description: string, price: number) {
        this.code = code;
        this.description = description;
        this.price = price;
    }
}