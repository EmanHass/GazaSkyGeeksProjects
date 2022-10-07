import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { SharedModules } from 'src/app/shared-modules/shared-modules.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    SharedModules
  ]
})
export class CompaniesModule { }
