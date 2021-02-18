import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShipResponse } from '../models/ships/shipResponse.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  private starShipsCached = new Map<string, ShipResponse>();

  constructor(private http: HttpClient) { }

  getShips(page = 1): Observable<ShipResponse> {
    const requestURL = `${environment.starShipsAPI}?page=${page}`;
    const responseCached: ShipResponse = this.starShipsCached.get(requestURL);

    if (responseCached) {
      return of(responseCached);
    } else {
      return this.http.get<ShipResponse>(requestURL).pipe(
        map((response: ShipResponse) => {
          this.starShipsCached.set(requestURL, response);
          return response;
        })
      );
    }
  }
}
