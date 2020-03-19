import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ListtodosComponent } from './_todo/listtodos/listtodos.component';
import { AddtodoComponent } from './_todo/addtodo/addtodo.component';

@NgModule({
  declarations: [
    AppComponent,
    ListtodosComponent,
    AddtodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
