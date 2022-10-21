import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-modules-routing.module';
import { AddressComponent } from './components/address/address.component';
import { ContactComponent } from './components/contact/contact.component';

let components =[
  AddressComponent,
  ContactComponent
]
@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    ...components
  ]
})
export class SharedModules { }
