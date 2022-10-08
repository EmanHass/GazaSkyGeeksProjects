import { SharedModules } from './../../shared-modules/shared-modules.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModules
  ]
})
export class SettingsModule { }
