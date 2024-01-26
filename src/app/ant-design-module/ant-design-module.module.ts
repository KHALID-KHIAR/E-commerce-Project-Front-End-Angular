import { NgModule } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel'; 


@NgModule({
  imports: [
    NzCarouselModule,
  ],
  exports:[
    NzCarouselModule
  ]
})
export class AntDesignModuleModule { }
