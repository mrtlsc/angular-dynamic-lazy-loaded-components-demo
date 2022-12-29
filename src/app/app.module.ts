import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PortalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
