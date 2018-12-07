import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Rx";

import { Category } from "../categories/models/category";

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }

  // URL books-api
  private url: string = "http://localhost:3000/api/v1/categories"

  private getHeadersJson() {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    return options;
  }

  list() {
    let response = this.http
      .get<Category[]>(this.url, this.getHeadersJson());

    return response;
  }

  insert(category: Category): Observable<Category> {
    let response = this.http
      .post<Category>(this.url, category, this.getHeadersJson());

    return response;
  }

  get(id: number): Observable<Category> {
    let response = this.http
      .get<Category>(this.url + '/' + id, this.getHeadersJson());

    return response;
  }

  update(category: Category): Observable<Category> {
    let response = this.http
      .put<Category>(this.url + '/' + category.id, category, this.getHeadersJson());

    return response;
  }

  delete(id: number) {
    return this.http.delete(this.url + '/' + id, this.getHeadersJson());
  }
}
