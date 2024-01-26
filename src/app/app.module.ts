import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login-layout/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignupComponent } from './Pages/login-layout/signup/signup.component';
import { LoginLayoutComponent } from './Pages/login-layout/login-layout.component';
import { HeaderComponent } from './Pages/header/header.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './Pages/header/nav-bar/nav-bar.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { MainLayoutComponent } from './Pages/main-layout/main-layout.component';
import { HomeComponent } from './Pages/main-layout/home/home.component';
import { AntDesignModuleModule } from './ant-design-module/ant-design-module.module';
import { NzCarouselComponent, NzCarouselModule } from 'ng-zorro-antd/carousel';
import { ProductComponent } from './Components/product/product.component';
import { ProductsComponent } from './Pages/main-layout/products/products.component';
import { AboutComponent } from './Pages/main-layout/about/about.component';
import { ProductPageComponent } from './Pages/main-layout/products/product-page/product-page.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    LoginLayoutComponent,
    HeaderComponent,
    NavBarComponent,
    FooterComponent,
    MainLayoutComponent,
    HomeComponent,
    ProductComponent,
    ProductsComponent,
    AboutComponent,
    ProductPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AntDesignModuleModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
