import { SharedModules } from './shared-modules/shared-modules.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
