import { Component, OnInit } from '@angular/core';
import { Category } from '../Category';
import { CategoryService } from '../service/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {
  category: Category = new Category();
  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.categoryService.addCategory(this.category).subscribe(data=> {
      this.router.navigateByUrl("/category")
    })
  }
}
