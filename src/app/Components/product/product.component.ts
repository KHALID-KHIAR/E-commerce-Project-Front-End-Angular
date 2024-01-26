import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() id!:number;
  @Input() image!:string;
  @Input() title!:string;
  @Input() price!:string ;
  @Input() description!:string;
  
  constructor(){
    console.log();
  }
  
}
