import { Routes } from "@angular/router";

// home
import { HomeComponent } from './home/home.component';

// categories
import { CategoriesComponent } from "./categories/categories-list/categories.component";
import { CategoriesInsertComponent } from "./categories/categories-insert/categories-insert.component";
import { CategoriesUpdateComponent } from "./categories/categories-update/categories-update.component";

// authors
import { AuthorsListComponent } from "./authors/authors-list/authors-list.component";
import { AuthorsInsertComponent } from "./authors/authors-insert/authors-insert.component";
import { AuthorsUpdateComponent } from "./authors/authors-update/authors-update.component";

// books
import { BooksListComponent } from "./books/books-list/books-list.component";
import { BooksInsertComponent } from "./books/books-insert/books-insert.component";
import { BooksUpdateComponent } from "./books/books-update/books-update.component";

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories-insert', component: CategoriesInsertComponent },
  { path: 'categories-update/:id', component: CategoriesUpdateComponent },
  { path: 'authors-list', component: AuthorsListComponent },
  { path: 'authors-insert', component: AuthorsInsertComponent },
  { path: 'authors-update/:id', component: AuthorsUpdateComponent },
  { path: 'books-list', component: BooksListComponent },
  { path: 'books-insert', component: BooksInsertComponent },
  { path: 'books-update/:id', component: BooksUpdateComponent }
]