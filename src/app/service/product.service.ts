import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl ="http://localhost:8080/product"
  constructor(private http: HttpClient) { }

  getListProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}`);
  }

  getProduct(id): Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  addProduct(product: Product){
    console.log(product);
    return this.http.post(`${this.baseUrl}`,product);
  }

  updateProduct(product: Product): Observable<Product>{
    return this.http.put<Product>(`${this.baseUrl}/${product.product_id}`,product);
  }
  removeProduct(id): Observable<Product>{
    return this.http.delete<Product>(`${this.baseUrl}/${id}`)
  }
}
