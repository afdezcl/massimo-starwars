import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShipResponse } from 'src/app/models/ships/shipResponse.interface';
import { LoadShipsPageAction } from 'src/app/store/actions/ships.actions';
import { AppState } from 'src/app/store/models/app-state.model';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  public dataList: ShipResponse;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select(store => store.ships.list).subscribe(res => {
      this.dataList = res;
    });
    this.getShips();
  }

  getShips(page?: number): void {
    this.store.dispatch(new LoadShipsPageAction({page}));
  }
}
