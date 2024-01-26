import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginLayoutComponent } from './Pages/login-layout/login-layout.component';
import { HomeComponent } from './Pages/main-layout/home/home.component';
import { ProductsComponent } from './Pages/main-layout/products/products.component';
import { AboutComponent } from './Pages/main-layout/about/about.component';
import { ProductPageComponent } from './Pages/main-layout/products/product-page/product-page.component';

const routes: Routes = [
    {path:"login",component:LoginLayoutComponent},
    {path:"signup",component:LoginLayoutComponent},
    
    {path:"home",component:HomeComponent},
    {path:"products",component:ProductsComponent},
    {path:"products/product/:id",component:ProductPageComponent},
    {path:"route3",component:LoginLayoutComponent},
    {path:"route4",component:LoginLayoutComponent},
    {path:"route5",component:LoginLayoutComponent},
    {path:"about",component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
