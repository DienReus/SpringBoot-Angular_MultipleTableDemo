import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';


const routes: Routes = [
  { path: 'category' , component: CategoryListComponent},
  { path: 'add-category', component:CategoryAddComponent},
  { path: 'edit/:id', component: CategoryEditComponent},
  { path: 'product', component: ProductListComponent},
  { path: 'add-product', component: ProductAddComponent},
  { path: 'updateProduct/:id', component: ProductEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
