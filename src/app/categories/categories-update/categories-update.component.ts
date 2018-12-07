import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";

import { Subscription } from "rxjs/Subscription";

import { Category } from "../models/category";
import { CategoryService } from "../../services/category.service";

@Component({
  selector: 'app-categories-update',
  templateUrl: './categories-update.component.html',
  styleUrls: ['./categories-update.component.css']
})
export class CategoriesUpdateComponent implements OnInit {

  public categoryId: number;
  public category: Category;
  public subscription: Subscription;
  public updateCategoryForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private formBuilder: FormBuilder) {

    this.category = new Category();
  }

  ngOnInit() {
    this.updateCategoryForm = this.formBuilder.group({
      name: ['']
    });

    this.subscription = this.route.params.subscribe(
      params => {
        this.categoryId = params['id'];
        this.getCategory(this.categoryId);
      }
    )
  }

  getCategory(id: number) {
    this.categoryService.get(id)
      .subscribe(
        category => this.fillCategory(category)
      );
  }

  fillCategory(category: Category) {
    this.category = category;

    this.updateCategoryForm.patchValue({
      name: this.category.name
    });
  }

  update() {
    if (this.updateCategoryForm.dirty && this.updateCategoryForm.valid) {
      let cat = Object.assign({}, this.category, this.updateCategoryForm.value);
      cat.id = this.categoryId;

      this.categoryService.update(cat)
        .subscribe(
          response => { this.onSaveComplete(response) }
        );
    }
  }

  onSaveComplete(response: any) {
    this.updateCategoryForm.reset();

    this.router.navigate(['/categories']);
  }

}
