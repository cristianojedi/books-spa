import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

// models
import { Book } from "../models/book";
import { Category } from "../../categories/models/category";
import { Author } from "../../authors/models/author";

// services
import { BookService } from "../../services/book.service";
import { CategoryService } from "../../services/category.service";
import { AuthorService } from "../../services/author.service";

@Component({
  selector: 'app-books-insert',
  templateUrl: './books-insert.component.html',
  styleUrls: ['./books-insert.component.css']
})
export class BooksInsertComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private bookService: BookService,
    private categoryService: CategoryService,
    private authorService: AuthorService) {

    this.book = new Book();
  }

  public book: Book;
  public insertBookForm: FormGroup;
  public categories: Category[];
  public authors: Author[];

  ngOnInit() {
    this.insertBookForm = this.formBuilder.group({
      name: [''],
      isbn: [''],
      category_id: [''],
      author_id: ['']
    })

    this.categoryService.list()
      .subscribe(
        categories => this.categories = categories
      );

    this.authorService.list()
      .subscribe(
        authors => this.authors = authors
      );
  }

  insert() {
    if (this.insertBookForm.dirty && this.insertBookForm.valid) {
      let book = Object.assign({}, this.book, this.insertBookForm.value);

      this.bookService.insert(book)
        .subscribe(
          response => { this.onSaveComplete(response) }
        );
    }
  }

  onSaveComplete(response: any) {
    this.insertBookForm.reset();

    this.router.navigate(['/books-list']);
  }

}
