import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-modules-routing.module';
import { AddressComponent } from './components/address/address.component';
import { ContactComponent } from './components/contact/contact.component';
import { DropdownSingleComponent } from './components/dropdown-single/dropdown-single.component';
import { DropdownMultiComponent } from './components/dropdown-multi/dropdown-multi.component';

let components =[
  AddressComponent,
  ContactComponent,
  DropdownSingleComponent,
  DropdownMultiComponent
]
@NgModule({
  declarations: [
    ...components,    
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  exports:[
    ...components
  ]
})
export class SharedModules { }
