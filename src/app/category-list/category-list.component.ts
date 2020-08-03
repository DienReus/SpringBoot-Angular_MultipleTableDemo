import { Component, OnInit } from '@angular/core';
import { Category } from '../Category';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categorys: Category[];
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.categoryService.getListCategory().subscribe( data=> {
      this.categorys = data;
    })
  }
  delete(id: number) {
    this.categoryService.removeCategory(id)
      .subscribe(
        data => {
          console.log(data);
          this.getAll();
        },
        error => console.log(error));
  }
}
