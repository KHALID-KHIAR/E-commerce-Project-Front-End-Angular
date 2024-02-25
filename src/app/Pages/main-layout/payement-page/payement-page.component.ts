import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-payement-page',
  templateUrl: './payement-page.component.html',
  styleUrls: ['./payement-page.component.scss']
})
export class PayementPageComponent implements OnInit{

  product_details:any = {} ;
  constructor(){}
  activeRoute = inject(ActivatedRoute);
  message = inject(NzMessageService)
  last_price!:number ;
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe( (params:ParamMap)=>{
      this.product_details = {
        "id":params.get("id"),
        "title":params.get("title"),
        "price":params.get("price"),
        "image":params.get("image"),
        "quantity":params.get("quantity"),
        "color":params.get("color"),
        "size":params.get("size"),
        "price_totale":params.get("price_totale")
      }
    } ) ;
    this.last_price = parseFloat(this.product_details.price_totale)+ 5.00 ;
  }

  hadleBuyProduct(){
    this.message.success("Thank You for Shopping from our store ");
    setTimeout(()=>{
      window.location.href="https://kh-khalid.site/#/home"
    },2000)
  }

}

