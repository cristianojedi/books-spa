import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs/Rx";

import { Book } from "../books/models/book";

@Injectable()
export class BookService {

  constructor(private http: HttpClient) { }

  private url: string = "http://localhost:3000/api/v1/books";

  private getHeadersJson() {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    return options;
  }

  list() {
    return this.http.get<Book[]>(this.url, this.getHeadersJson());
  }

  insert(book: Book): Observable<Book> {
    let response = this.http
      .post<Book>(this.url, book, this.getHeadersJson());

    return response;
  }

  get(id: number): Observable<Book> {
    let response = this.http
      .get<Book>(this.url + '/' + id, this.getHeadersJson());

    return response;
  }

  update(book: Book): Observable<Book> {
    let response = this.http
      .put<Book>(this.url + '/' + book.id, book, this.getHeadersJson());

    return response;
  }

  delete(id: number) {
    return this.http.delete(this.url + '/' + id, this.getHeadersJson());
  }
}