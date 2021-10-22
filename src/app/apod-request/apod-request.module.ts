import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApodRequestGetComponent } from './apod-request-get/apod-request-get.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    ApodRequestGetComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatAutocompleteModule
  ],
  exports: [
    ApodRequestGetComponent
  ]
})
export class ApodRequestModule { }
