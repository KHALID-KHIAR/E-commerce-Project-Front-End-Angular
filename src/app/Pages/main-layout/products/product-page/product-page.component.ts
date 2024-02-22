import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit{

  id!:string ;  
  title:string="this is the title of the product";
  price:string="20";
  description:string="Here goes the description  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis suscipit facere commodi quasi.";
  image:string="assets/images/1.jpg";
  specification!:string[];
  priceTotal:number= parseInt(this.price) ;
  formGroup!:FormGroup;
  constructor(private route:Router,private message:NzMessageService,private fmb:FormBuilder,private activeRoute:ActivatedRoute){
    this.formGroup= fmb.group({
      "color":['',Validators.required],
      "size":['',Validators.required],
      "quantity":[1,Validators.required]
    })
  }
  ngOnInit(): void {
    this.id= this.route.url.split("/")[3]
  }
  getValue(formControl:string){
    return this.formGroup.get(formControl)?.value ;
  }
  dropQuantity(){
    if(this.getValue("quantity")>1){
      this.formGroup?.get("quantity")?.patchValue(parseInt( this.formGroup?.get("quantity")?.value) - 1 )
      this.priceTotal= ( parseInt(this.price) * parseInt(this.getValue("quantity")) );
    }
  }
  addQuantity(){
    this.formGroup?.get("quantity")?.patchValue(parseInt( this.formGroup?.get("quantity")?.value) + 1 )
    this.priceTotal= ( parseInt(this.price) * parseInt(this.getValue("quantity")) );
  }
  buyButton(){
    this.message.loading("Redircting to Payment Page ...");
    this.route.navigate(["products/product/"+this.id+"/payement-gateway",{"quantity":
    this.getValue("quantity"),"color":this.getValue("color"),"size":this.getValue("size"),"title":this.title
    ,"image":this.image,"price":this.price, "price_totale":this.priceTotal}])
    
  } 
}
