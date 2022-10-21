import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

let components =[
  HeaderComponent,
  FooterComponent,
  SidebarComponent
]
@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  exports:[
    ...components
  ]
})
export class LayoutModule { }
