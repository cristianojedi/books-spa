import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { Subscription } from "rxjs/Subscription";

// models
import { Book } from "../models/book";
import { Category } from "../../categories/models/category";
import { Author } from "../../authors/models/author";

// services
import { BookService } from "../../services/book.service";
import { CategoryService } from "../../services/category.service";
import { AuthorService } from "../../services/author.service";

@Component({
  selector: 'app-books-update',
  templateUrl: './books-update.component.html',
  styleUrls: ['./books-update.component.css']
})
export class BooksUpdateComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService,
    private categoryService: CategoryService,
    private authorService: AuthorService) {

    this.book = new Book();
  }

  public book: Book;
  public categories: Category[];
  public authors: Author[];
  public bookId: number;
  public category: Category;
  public subscription: Subscription;
  public updateBookForm: FormGroup;

  ngOnInit() {
    this.updateBookForm = this.formBuilder.group({
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

    this.subscription = this.route.params.subscribe(
      params => {
        this.bookId = params['id'];
        this.getBook(this.bookId);
      }
    )
  }

  getBook(id: number) {
    this.bookService.get(id)
      .subscribe(
        book => this.fillBook(book)
      );
  }

  fillBook(book: Book) {
    this.book = book;

    this.updateBookForm.patchValue({
      name: this.book.name,
      isbn: this.book.isbn,
      category_id: this.book.category_id,
      author_id: this.book.author_id
    });
  }

  update() {
    if (this.updateBookForm.dirty && this.updateBookForm.valid) {
      let book = Object.assign({}, this.category, this.updateBookForm.value);
      book.id = this.bookId;

      this.bookService.update(book)
        .subscribe(
          response => { this.onSaveComplete(response) }
        );
    }
  }

  onSaveComplete(response: any) {
    this.updateBookForm.reset();

    this.router.navigate(['/books-list']);
  }

}
