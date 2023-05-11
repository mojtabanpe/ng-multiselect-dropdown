import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NgMultiselectDropdown3Module } from '../app/ng-multiselect-dropdown3/src/public-api';
// import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    NgMultiselectDropdown3Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
