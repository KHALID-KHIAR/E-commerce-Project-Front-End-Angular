import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  items =["1.jpg","2.png","3.jpg","4.jpg","5.png","6.jpg"];

  products = [
    {
      "id":1,
      "image":"assets/images/1.jpg" ,
      "title":"iphone 18",
      "price":"700 $",
      "description":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, quas!"
    },
    {
      "id":2,
      "image":"assets/images/1.jpg" ,
      "title":"iphone 18",
      "price":"700 $",
      "description":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, quas!"
    },
    {
      "id":3,
      "image":"assets/images/1.jpg" ,
      "title":"iphone 18",
      "price":"700 $",
      "description":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, quas!"
    },
    {
      "id":4,
      "image":"assets/images/1.jpg" ,
      "title":"iphone 18",
      "price":"700 $",
      "description":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, quas!"
    },
    {
      "id":5,
      "image":"assets/images/1.jpg" ,
      "title":"iphone 18",
      "price":"700 $",
      "description":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, quas!"
    },
    {
      "id":6,
      "image":"assets/images/1.jpg" ,
      "title":"iphone 18",
      "price":"700 $",
      "description":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, quas!"
    },
  ];
}
