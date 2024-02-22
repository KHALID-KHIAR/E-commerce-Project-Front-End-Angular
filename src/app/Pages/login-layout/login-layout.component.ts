import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss']
})
export class LoginLayoutComponent implements OnInit {
  
  
  constructor(private route:Router){}
  ngOnInit(): void {
    let currentRoute:string="";
    currentRoute = this.route.url ;    
    let overlayLayout= document.querySelector<HTMLElement>(".hide-layout-container");
    let loginOverlay= document.querySelector<HTMLElement>(".login-overlay");
    let signupOverlay= document.querySelector<HTMLElement>(".signup-overlay");
    if(currentRoute==="/login"){
      overlayLayout!.style.translate= "52%" ;
      loginOverlay!.style.opacity= "0" ;
    }
    else if(currentRoute==="/signup"){
      overlayLayout!.style.translate= "-52%" ;
      signupOverlay!.style.opacity="0";
    }
  }


  login_Animation_toRight(){
    let hideLayout =  document.querySelector<HTMLElement>(".hide-layout-container");
    let loginForm =  document.querySelector<HTMLElement>(".app-login") ;
    let signupForm =  document.querySelector<HTMLElement>(".app-signup");
    hideLayout!.classList.add("overlay-move-to-right");
    hideLayout!.classList.remove("overlay-move-to-left")

    loginForm?.classList.add("form-animation-show-login");
    signupForm?.classList.remove("form-animation-show-signup");
  }
  signup_Animation_toLeft(){
    let hideLayout =  document.querySelector<HTMLElement>(".hide-layout-container");
    let signupForm =  document.querySelector<HTMLElement>(".app-signup");
    let loginForm =  document.querySelector<HTMLElement>(".app-login") ;
    hideLayout?.classList.remove("overlay-move-to-right")
    hideLayout!.classList.add("overlay-move-to-left");

    signupForm?.classList.add("form-animation-show-signup");
    loginForm?.classList.remove("form-animation-show-login");
  }
}
