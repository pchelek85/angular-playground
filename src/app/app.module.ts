import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridGeneratorComponent } from './grid-generator/grid-generator.component';
import { GridSingleComponent } from './grid-single/grid-single.component';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    GridGeneratorComponent,
    GridSingleComponent,
    DataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
