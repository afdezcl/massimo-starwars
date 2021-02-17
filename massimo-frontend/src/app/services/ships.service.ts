import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShipResponse } from '../models/ships/shipResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  url = 'https://swapi.dev/api/starships/';
  headerDict = {
    Authorization: 'none',
    'Access-Control-Allow-Origin': '*'
  };
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  constructor(private http: HttpClient) { }

  getShips(page = 1): Observable<ShipResponse> {
    return this.http.get<ShipResponse>(this.url).pipe(
      map(data => data)
    );
  }
}
