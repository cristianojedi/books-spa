import { Component, OnInit } from '@angular/core';

import { Book } from "../models/book";
import { BookService } from "../../services/book.service";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  constructor(private bookService: BookService) { }

  public books: Book[] = [];

  ngOnInit() {
    this.list();
  }

  list() {
    this.bookService.list()
      .subscribe(
        data => this.books = data
      )
  }

  delete(books) {
    if (confirm("Você tem certeza que deseja deletar o livro " + books.name + "?")) {
      var index = this.books.indexOf(books);
      this.books.splice(index, 1);

      this.bookService.delete(books.id).subscribe(null);
    }
  }

}
