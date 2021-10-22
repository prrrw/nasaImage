import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ApodRequestModule } from '../apod-request/apod-request.module';
import {  HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    ApodRequestModule 
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],

})
export class LayoutModule { }
