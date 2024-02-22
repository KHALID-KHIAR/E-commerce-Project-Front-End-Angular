import { NgModule } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel'; 
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzLayoutModule } from 'ng-zorro-antd/layout';


const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

const NgZorroModues = [ 
  NzCarouselModule,
  NzMessageModule,
  NzRadioModule,
  NzRateModule,
  NzMenuModule,
  NzIconModule,
  NzButtonModule,
  NzToolTipModule,
  NzLayoutModule
];

@NgModule({
  imports: NgZorroModues,
  exports: NgZorroModues,
  providers: [{provide: NZ_ICONS,useValue: icons}]
})

    export class AntDesignModuleModule { }