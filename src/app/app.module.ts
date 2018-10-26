import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatGridListModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { CustomGridComponent } from './components/custom-grid/custom-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomGridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
