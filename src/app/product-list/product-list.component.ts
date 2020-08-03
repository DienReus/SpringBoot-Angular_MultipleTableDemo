import { Component, OnInit } from '@angular/core';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Product } from '../Product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.productService.getListProduct().subscribe(data=>{
      this.products= data;
    })
  }
  delete(id: number) {
    this.productService.removeProduct(id)
      .subscribe(
        data => {
          console.log(data);
          this.getAll();
        },
        error => console.log(error));
  }
}
