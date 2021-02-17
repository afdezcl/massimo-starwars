import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Ship } from 'src/app/models/ships/ship.interface';
import { ShipResponse } from 'src/app/models/ships/shipResponse.interface';
import { AppState } from 'src/app/store/models/app-state.model';
import { environment } from 'src/environments/environment';
declare var $: any;


@Component({
  selector: 'app-ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss']
})
export class ShipsDetailsComponent implements OnInit {

  @Output() shipPageChanged: EventEmitter<number> = new EventEmitter<number>();
  public config: any;
  public currentPage = 1;
  public dataList: ShipResponse;

  // Modal
  titleDetails = '';
  modelDetails = '';
  starshipClass = '';
  imageModalURL = '';

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.store.select(store => store.ships.list).subscribe((response: ShipResponse) => {
      if (response) {
        this.dataList = response;
        this.initPaginationConfiguration();
      }
    });
  }

  initPaginationConfiguration(): void {
    if (this.dataList) {
      this.config = {
        itemsPerPage: 10,
        currentPage: this.currentPage,
        totalItems: this.dataList.count
      };
    }
  }

  getStarshipId(url: string): string {
    const shipId = url.slice(0, -1).split('/').slice(-1).pop();
    return `${environment.imagesAPI}${shipId}.jpg`;
  }

  pageChanged(page: number): void {
    this.currentPage = page;
    this.shipPageChanged.emit(page);
  }

  openDetails(ship: Ship): void {
    $('#exampleModal').modal('show');
    this.imageModalURL = this.getStarshipId(ship.url);
    this.titleDetails = ship.name;
    this.modelDetails = ship.model;
    this.starshipClass = ship.starship_class;
  }

}
