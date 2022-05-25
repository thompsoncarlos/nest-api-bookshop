import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Book } from './books.model';
import { BooksService } from "./books.service";

@Controller('books')
export class BooksController {
   
    constructor(private booksService: BooksService){

    }

    @Get()
    getAll(): Book[] {
        return this.booksService.getAll();
    }

    @Get(':id')
    getOne(@Param() params): Book {
        return this.booksService.getOne[0];
    }

    @Post()
    create(@Body() book: Book) {
        book.id = 100;
        this.booksService.create(book);
    }

    @Put()
    uptade(@Body() book: Book): Book {
        return this.booksService.update(book);
    }

    @Delete(':id')
    delete(@Param() params) {
        this.booksService.delete(params.id);
    }
}