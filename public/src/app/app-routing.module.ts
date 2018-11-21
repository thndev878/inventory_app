import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DetailsProductsComponent } from './details-products/details-products.component';

console.log('* ** *** in app-routing');

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', pathMatch:"full",  redirectTo:"/products" },
  // { path: '**', pathMatch: "full", redirectTo: "/products"},
  { path: 'products', component: ViewProductComponent },
  { path: 'products/new', component: CreateProductComponent },
  { path: 'products/edit/:product_id', component: EditProductComponent},
  { path: 'products/:product_id', component: DetailsProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
