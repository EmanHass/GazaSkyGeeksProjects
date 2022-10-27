import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-modules-routing.module';
import { AddressComponent } from './components/address/address.component';
import { ContactComponent } from './components/contact/contact.component';
import { DropdownSingleComponent } from './components/dropdown-single/dropdown-single.component';

let components =[
  AddressComponent,
  ContactComponent,
  DropdownSingleComponent
]
@NgModule({
  declarations: [
    ...components,
    DropdownSingleComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    ...components
  ]
})
export class SharedModules { }
