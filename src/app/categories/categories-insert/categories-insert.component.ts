import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

import { CategoryService } from "../../services/category.service";

import { Category } from "../models/category";

@Component({
  selector: 'app-categories-insert',
  templateUrl: './categories-insert.component.html',
  styleUrls: ['./categories-insert.component.css']
})
export class CategoriesInsertComponent implements OnInit {

  public insertCategoryForm: FormGroup;
  public category: Category;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private formBuilder: FormBuilder) {

    this.category = new Category();
  }

  ngOnInit() {
    this.insertCategoryForm = this.formBuilder.group({
      name: ['']
    })
  }

  insert() {
    if (this.insertCategoryForm.dirty && this.insertCategoryForm.valid) {
      let category = Object.assign({}, this.category, this.insertCategoryForm.value);

      this.categoryService.insert(category)
        .subscribe(
          response => { this.onSaveComplete(response) }
        );
    }
  }

  onSaveComplete(response: any) {
    this.insertCategoryForm.reset();

    this.router.navigate(['/categories']);
  }
}
