import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { AddBookComponent } from './add-book/add-book.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, AddBookComponent,ViewBookComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
