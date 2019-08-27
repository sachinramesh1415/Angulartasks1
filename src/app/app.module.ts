import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Scenario1Component } from './scenario1/scenario1.component';
import { Scenario2Component } from './scenario2/scenario2.component';
import { from } from 'rxjs';
import { Scenario3Component } from './scenario3/scenario3.component';
import { Component1Component } from './scenario3/component1/component1.component';
import { Scenario4Component } from './scenario4/scenario4.component';
import { Component2Component } from './scenario4/component2/component2.component';
import { Scenario5Component } from './scenario5/scenario5.component';
import { Component3Component } from './scenario5/component3/component3.component';
import { Component4Component } from './scenario5/component3/component4/component4.component';
import { Scenario6Component } from './scenario6/scenario6.component';
import { Component6Component } from './scenario6/component6/component6.component';
import { Component7Component } from './scenario6/component7/component7.component';

@NgModule({
  declarations: [
    AppComponent,
    Scenario1Component,
    Scenario2Component,
    Scenario3Component,
    Component1Component,
    Scenario4Component,
    Component2Component,
    Scenario5Component,
    Component3Component,
    Component4Component,
    Scenario6Component,
    Component6Component,
    Component7Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
