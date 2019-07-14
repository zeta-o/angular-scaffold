import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { CleanLayoutComponent } from './clean-layout/clean-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './header/header.component';


import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    LayoutRoutingModule,
  ],
  declarations: [
    MainLayoutComponent,
    CleanLayoutComponent,
    HeaderComponent,
  ]
})
export class LayoutModule { }
