import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShipResponse } from '../models/ships/shipResponse.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  headerDict = {
    Authorization: 'none',
    'Access-Control-Allow-Origin': '*'
  };
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  constructor(private http: HttpClient) { }

  getShips(page = 1): Observable<ShipResponse> {
    return this.http.get<ShipResponse>(`${environment.starShipsAPI}?page=${page}`).pipe(
      map(data => data)
    );
  }
}
