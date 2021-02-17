import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadShipsPageAction } from 'src/app/store/actions/ships.actions';
import { AppState } from 'src/app/store/models/app-state.model';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {


  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.getShips();
  }

  getShips(page?: number): void {
    this.store.dispatch(new LoadShipsPageAction({page}));
  }
}
