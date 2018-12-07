import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

import { Author } from "../models/author";
import { AuthorService } from "../../services/author.service";

@Component({
  selector: 'app-authors-insert',
  templateUrl: './authors-insert.component.html',
  styleUrls: ['./authors-insert.component.css']
})
export class AuthorsInsertComponent implements OnInit {

  public author: Author;
  public insertAuthorForm: FormGroup;

  constructor(
    private authorService: AuthorService,
    private formBuilder: FormBuilder,
    private router: Router) {

      this.author = new Author();
  }

  ngOnInit() {
    this.insertAuthorForm = this.formBuilder.group({
      name: ['']
    });
  }

  insert() {
    if (this.insertAuthorForm.dirty && this.insertAuthorForm.valid) {
      let author = Object.assign({}, this.author, this.insertAuthorForm.value);

      this.authorService.insert(author)
        .subscribe(
          result => { this.onSaveComplete(result) }
        );
    }
  }

  onSaveComplete(result: any) {
    this.insertAuthorForm.reset();

    this.router.navigate(['/authors-list']);
  }


}
