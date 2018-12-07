import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { Subscription } from "rxjs/Subscription";

import { Author } from "../models/author";
import { AuthorService } from "../../services/author.service";

@Component({
  selector: 'app-authors-update',
  templateUrl: './authors-update.component.html',
  styleUrls: ['./authors-update.component.css']
})
export class AuthorsUpdateComponent implements OnInit {

  public author: Author;
  public authorId: number;
  public updateAuthorForm: FormGroup;
  public subscription: Subscription;

  constructor(
    private authorService: AuthorService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.author = new Author();
  }

  ngOnInit() {
    this.updateAuthorForm = this.formBuilder.group({
      name: ['']
    });

    this.subscription = this.route.params.subscribe(
      params => {
        this.authorId = params['id'];
        this.getAuthor(this.authorId);
      }
    )
  }

  getAuthor(id: number) {
    this.authorService.get(id)
      .subscribe(
        author => this.fillAuthor(author)
      );
  }

  fillAuthor(author: Author) {
    this.author = author;

    this.updateAuthorForm.patchValue({
      name: this.author.name
    });
  }

  update() {
    if (this.updateAuthorForm.dirty && this.updateAuthorForm.valid) {
      let author = Object.assign({}, this.author, this.updateAuthorForm.value);
      author.id = this.authorId;

      this.authorService.update(author)
        .subscribe(
          response => { this.onSaveComplete(response) }
        );
    }
  }

  onSaveComplete(response: any) {
    this.updateAuthorForm.reset();

    this.router.navigate(['/authors-list']);
  }
}
