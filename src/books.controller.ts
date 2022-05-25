import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Book } from './books.model';
import { BooksService } from "./books.service";

@Controller('books')
export class BooksController {
   
    constructor(private booksService: BooksService){

    }

    @Get()
    async getAll(): Promise<Book[]> {
        return this.booksService.getAll();
    }

    @Get(':id')
    async getOne(@Param() params): Promise<Book> {
        return this.booksService.getOne[0];
    }

    @Post()
    async create(@Body() book: Book) {
        book.id = 100;
        this.booksService.create(book);
    }

    @Put()
    async uptade(@Body() book: Book): Promise<[number, Book[]]> {
        return this.booksService.update(book);
    }

    @Delete(':id')
    async delete(@Param() params) {
        this.booksService.delete(params.id);
    }
}