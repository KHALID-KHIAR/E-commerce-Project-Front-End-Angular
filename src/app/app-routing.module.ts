import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginLayoutComponent } from './Pages/login-layout/login-layout.component';

const routes: Routes = [
    {path:"login",component:LoginLayoutComponent},
    {path:"signup",component:LoginLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
