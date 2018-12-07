import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Rx";

import { Author } from "../authors/models/author";

@Injectable()
export class AuthorService {

  constructor(private http: HttpClient) { }

  // URL books-api
  private url: string = "http://localhost:3000/api/v1/authors"

  private getHeadersJson() {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    return options;
  }

  list() {
    let response = this.http
      .get<Author[]>(this.url, this.getHeadersJson());

    return response;
  }

  insert(author: Author): Observable<Author> {
    let response = this.http
      .post<Author>(this.url, author, this.getHeadersJson());

    return response;
  }

  get(id: number): Observable<Author> {
    let response = this.http
      .get<Author>(this.url + '/' + id, this.getHeadersJson());

    return response;
  }

  update(author: Author): Observable<Author> {
    let response = this.http
      .put<Author>(this.url + '/' + author.id, author, this.getHeadersJson());

    return response;
  }

  delete(id: number) {
    return this.http.delete(this.url + '/' + id, this.getHeadersJson());
  }
}
