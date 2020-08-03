import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../Category';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  categorys = [];
  constructor(private productService: ProductService,  private route: ActivatedRoute, private router: Router, private categoryService: CategoryService) { }

  ngOnInit(): void {
   this.getCategorys();
  }

  getProducts(){
    this.route.params.subscribe(param =>{
      this.productService.getProduct(param.id).subscribe(data=>{
        this.product = data;
      })
    });
  }
  onSubmit(){
    this.productService.updateProduct(this.product).subscribe(data=>{
      this.router.navigateByUrl("/product");
    })
  } 
  getCategorys(){
    this.categoryService.getListCategory().subscribe(data=>{
      this.categorys = data;
      this.getProducts();
    })
  }
}
