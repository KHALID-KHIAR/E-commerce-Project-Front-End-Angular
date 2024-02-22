import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginLayoutComponent } from './Pages/login-layout/login-layout.component';
import { HomeComponent } from './Pages/main-layout/home/home.component';
import { ProductsComponent } from './Pages/main-layout/products/products.component';
import { AboutComponent } from './Pages/main-layout/about/about.component';
import { ProductPageComponent } from './Pages/main-layout/products/product-page/product-page.component';
import { PayementPageComponent } from './Pages/main-layout/payement-page/payement-page.component';
import { AdminPageComponent } from './Pages/main-layout/admin-page/admin-page.component';

const routes: Routes = [
    {path:"login",component:LoginLayoutComponent},
    {path:"signup",component:LoginLayoutComponent},
    
    {path:"home",component:HomeComponent},
    {path:"products",component:ProductsComponent},
    {path:"products/product/:id",component:ProductPageComponent},
    {path:"products/product/:id/payement-gateway",component:PayementPageComponent},
    {path:"admin",component:AdminPageComponent},
    {path:"route5",component:LoginLayoutComponent},
    {path:"about",component:AboutComponent},
    {path:"**",redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
