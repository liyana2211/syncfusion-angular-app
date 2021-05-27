import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
//import { ButtonModule, RadioButtonModule } from "@syncfusion/ej2-angular-buttons";
// Imported syncfusion sidebar module from navigations package
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SidebarModule,
    BrowserModule,
    //RadioButtonModule,
    //ButtonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule { }
