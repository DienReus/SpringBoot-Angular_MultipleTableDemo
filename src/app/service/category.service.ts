import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl= "http://localhost:8080/category";
  constructor(private http : HttpClient) { }

  getListCategory(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.baseUrl}`);
  }

  getCategory(id): Observable<Category>{
    return this.http.get<Category>(`${this.baseUrl}/${id}`);
  }

  addCategory(category: Category){
    console.log(category);
    return this.http.post(`${this.baseUrl}`,category);
  }

  updateCategory(category: Category): Observable<Category>{
    return this.http.put<Category>(`${this.baseUrl}/${category.category_id}`,category);
  }
  removeCategory(id): Observable<Category>{
    return this.http.delete<Category>(`${this.baseUrl}/${id}`)
  }
}
