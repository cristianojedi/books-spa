import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

// shared
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuSuperiorComponent } from './shared/menu-superior/menu-superior.component';
import { MenuPrincipalComponent } from './shared/menu-principal/menu-principal.component';

// components
import { HomeComponent } from './home/home.component';
import { rootRouterConfig } from './app.routes';
import { CategoriesComponent } from './categories/categories-list/categories.component';
import { CategoriesInsertComponent } from './categories/categories-insert/categories-insert.component';
import { CategoriesUpdateComponent } from './categories/categories-update/categories-update.component';
import { AuthorsListComponent } from './authors/authors-list/authors-list.component';
import { AuthorsInsertComponent } from './authors/authors-insert/authors-insert.component';
import { AuthorsUpdateComponent } from './authors/authors-update/authors-update.component';
import { BooksListComponent } from './books/books-list/books-list.component';

// services
import { CategoryService } from "./services/category.service";
import { AuthorService } from "./services/author.service";
import { BookService } from "./services/book.service";
import { BooksInsertComponent } from './books/books-insert/books-insert.component';
import { BooksUpdateComponent } from './books/books-update/books-update.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuSuperiorComponent,
    MenuPrincipalComponent,
    HomeComponent,
    CategoriesComponent,
    CategoriesInsertComponent,
    CategoriesUpdateComponent,
    AuthorsListComponent,
    AuthorsInsertComponent,
    AuthorsUpdateComponent,
    BooksListComponent,
    BooksInsertComponent,
    BooksUpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false })
  ],
  providers: [
    CategoryService,
    AuthorService,
    BookService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
