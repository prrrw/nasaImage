import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApodRequestGetComponent } from './apod-request-get/apod-request-get.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
@NgModule({
  declarations: [
    ApodRequestGetComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatIconModule,
    MatButtonModule,
    BrowserModule,
    FormsModule,
    MatExpansionModule
  ],
  exports: [
    ApodRequestGetComponent
  ]
})
export class ApodRequestModule { }
