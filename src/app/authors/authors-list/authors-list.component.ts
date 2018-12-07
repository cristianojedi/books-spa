import { Component, OnInit } from '@angular/core';

import { Author } from "../models/author";
import { AuthorService } from "../../services/author.service";

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})
export class AuthorsListComponent implements OnInit {

  public authors: Author[] = [];

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.list();
  }

  list() {
    this.authorService.list()
      .subscribe(
        result => this.authors = result
      );
  }

  delete(authors) {
    if (confirm("Você tem certeza que deseja deletar o author " + authors.name + "?")) {
      var index = this.authors.indexOf(authors);
      this.authors.splice(index, 1);

      this.authorService.delete(authors.id).subscribe(null);
    }
  }
}
