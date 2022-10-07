import { SharedModules } from './../../shared-modules/shared-modules.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModules
  ]
})
export class SearchModule { }
