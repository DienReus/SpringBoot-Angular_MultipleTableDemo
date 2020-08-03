import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';
import { Category } from '../Category';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  categorys: Category[];
  product: Product = new Product();
  constructor(private productService: ProductService, private router: Router, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getListCategory().subscribe(data=>{
      this.categorys= data;
    })
  }
  onSubmit(){
    this.productService.addProduct(this.product).subscribe(data=> {
      this.router.navigateByUrl("/product")
    })
  }
}
