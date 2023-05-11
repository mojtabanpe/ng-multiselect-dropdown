import { NgModule } from '@angular/core';
import { NgMultiselectDropdown3Component } from './ng-multiselect-dropdown3.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListFilterPipe } from './list-filter.pipe';
import { ClickOutsideDirective } from './click-outside.directive';



@NgModule({
  declarations: [
    NgMultiselectDropdown3Component, ClickOutsideDirective, ListFilterPipe
  ],
  imports: [CommonModule, FormsModule],
  providers: [ListFilterPipe],
  exports: [
    NgMultiselectDropdown3Component
  ]
})
export class NgMultiselectDropdown3Module { }
