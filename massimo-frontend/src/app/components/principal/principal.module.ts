import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PrincipalComponentsRoutingModule } from './principal-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrincipalComponentsRoutingModule,
    HttpClientModule
  ]
})
export class PrincipalModule { }
