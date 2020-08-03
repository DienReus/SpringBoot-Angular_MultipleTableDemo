import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../Category';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {
  category: Category;
  constructor(private categoryService: CategoryService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(param =>{
      this.categoryService.getCategory(param.id).subscribe(data=>{
        this.category = data;
      })
    })
  }
  onSubmit(){
    this.categoryService.updateCategory(this.category).subscribe(data=>{
      this.router.navigateByUrl("/category");
    })
  }

}
