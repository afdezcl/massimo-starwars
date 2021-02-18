import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/ui-controls/guards/auth.guard';
import { ShipsComponent } from './ships.component';

const routes: Routes = [
  { path: '', component: ShipsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipsRoutingModule { }
