import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) { }   
  
  indicatorInitialValue:any 
  
  ngOnInit(): void {
    this.indicatorInitialValue =  document.querySelector<HTMLElement>(".indicator")?.getBoundingClientRect().left ;
    this.indicatorInitialValue = Math.floor(this.indicatorInitialValue);
    document.querySelector<HTMLElement>(".indicator")!.style.width = document.getElementById("home")?.getBoundingClientRect().width + "px";

    window.addEventListener("resize",()=>{
      this.indicatorInitialValue =  document.getElementById("home")?.getBoundingClientRect().left ;
      this.indicatorInitialValue = Math.floor(this.indicatorInitialValue);
    })
  }
  initialiseIndicator_Route(){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let firstChild = this.route.root.firstChild;
        if (firstChild !== null) {
          let currentRoute = firstChild.snapshot.routeConfig?.path;
          console.log('Current Route:', firstChild.snapshot.routeConfig?.path);
        }
      }
    });
  }


  translateIndic(Element:HTMLAnchorElement){
    this.initialiseIndicator_Route()

    let indicator = document.querySelector<HTMLElement>(".indicator");
    let root = document.querySelector<HTMLElement>(":root");
    let minus = Math.floor(Element.getBoundingClientRect().left - this.indicatorInitialValue ) ;

    root!.style.setProperty("--translate-indictor-value",minus+"px");
       indicator!.style.width = Element.getBoundingClientRect().width+"px"; 

    
  }
  





  showMenu() {
    let menu = document.querySelector(".menu-section")
    let container = document.querySelector<HTMLElement>(".container");
    menu!.classList.toggle("menu-section-active");
    container!.classList.toggle("toggle-display-menu");  
  }
}
