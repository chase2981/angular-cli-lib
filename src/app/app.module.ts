import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectModule } from './lib/select';
import { BootstrapSelectModule } from './lib/bootstrap-select';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // SelectModule,
    BootstrapSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
