import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

   products = [
    {
      "id":1,
      "image":"assets/images/1.jpg",
      "title":"iphone 18",
      "price":"700 $",
      "description":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, quas!"
    },
    {
      "id":2,
      "image":"assets/images/1.jpg",
      "title":"iphone 18",
      "price":"700 $",
      "description":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, quas!"
    },
    {
      "id":3,
      "image":"assets/images/1.jpg",
      "title":"iphone 18",
      "price":"700 $",
      "description":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, quas!"
    },
    {
      "id":4,
      "image":"assets/images/1.jpg",
      "title":"iphone 18",
      "price":"700 $",
      "description":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, quas!"
    },
    {
      "id":5,
      "image":"assets/images/1.jpg",
      "title":"iphone 18",
      "price":"700 $",
      "description":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, quas!"
    },
    {
      "id":6,
      "image":"assets/images/1.jpg",
      "title":"iphone 18",
      "price":"700 $",
      "description":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, quas!"
    },
    {
      "id":7,
      "image":"assets/images/1.jpg",
      "title":"iphone 18",
      "price":"700 $",
      "description":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, quas!"
    },
    {
      "id":8,
      "image":"assets/images/1.jpg",
      "title":"iphone 18",
      "price":"700 $",
      "description":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, quas!"
    },
    {
      "id":9,
      "image":"assets/images/1.jpg",
      "title":"iphone 18",
      "price":"700 $",
      "description":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, quas!"
    },
    {
      "id":10,
      "image":"assets/images/1.jpg",
      "title":"iphone 18",
      "price":"700 $",
      "description":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, quas!"
    },
    {
      "id":11,
      "image":"assets/images/1.jpg",
      "title":"iphone 18",
      "price":"700 $",
      "description":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, quas!"
    },
  ];
  ngOnInit(): void {
  }


}
