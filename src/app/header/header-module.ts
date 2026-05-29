import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing-module';
import { Header } from './component/header';

@NgModule({
  declarations: [Header],
  imports: [CommonModule, HeaderRoutingModule],
  exports:[
    Header
  ]
})
export class HeaderModule {}
