import { Component, OnInit } from '@angular/core';

import { Category } from "../models/category";
import { CategoryService } from "../../services/category.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  private categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.list();
  }

  delete(categories) {
    if (confirm("Você tem certeza que deseja deletar a categoria " + categories.name + "?")) {
      var index = this.categories.indexOf(categories);
      this.categories.splice(index, 1);

      this.categoryService.delete(categories.id).subscribe(null);
    }
  }

  list() {
    this.categoryService.list()
      .subscribe(data => this.categories = data);
  }
}
