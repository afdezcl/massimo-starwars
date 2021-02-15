import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipsComponent } from './ships.component';
import { ShipsDetailsComponent } from './ships-details/ships-details.component';
import { ShipsRoutingModule } from './ships-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  imports: [
    CommonModule,
    ShipsRoutingModule,
    NgxPaginationModule
  ],
  declarations: [
    ShipsComponent,
    ShipsDetailsComponent
  ]
})
export class ShipsModule { }
