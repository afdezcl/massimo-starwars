import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
declare var $: any;


@Component({
  selector: 'app-ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss']
})
export class ShipsDetailsComponent implements OnInit {

  @Input() dataList: any;
  config: any;
  url = '';
  // Modal
  titleDetails = '';
  modelDetails = '';
  starshipClass = '';

  constructor(
  ) {
  }

  ngOnInit(): void {
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.dataList.length
    };
  }

  getStarshipId(url: string): string {
    const shipId = url.slice(0, -1).split('/').slice(-1).pop();
    return `${environment.imagesAPI}${shipId}.jpg`;
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  openDetails(details) {
    $('#exampleModal').modal('show');
    this.titleDetails = details.name;
    this.modelDetails = details.model;
    this.starshipClass = details.starship_class;
  }

}
