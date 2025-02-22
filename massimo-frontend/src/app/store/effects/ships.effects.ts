import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
    LoadShipsPageAction,
    LoadShipsPageSuccessAction,
    LoadShipsPageFailureAction,
    ShipsActionTypes
} from '../actions/ships.actions';
import { ShipsService } from 'src/app/services/ships.service';
import { ShipResponse } from 'src/app/models/ships/shipResponse.interface';


@Injectable()
export class ShipsEffects {

    loadShips$ = createEffect(() => this.actions$
        .pipe(
            ofType<LoadShipsPageAction>(ShipsActionTypes.LOAD_SHIPS_PAGE),
            mergeMap(
                (data) => this.shipsService.getShips(data.payload.page)
                    .pipe(
                        map((response: ShipResponse) => {
                            return new LoadShipsPageSuccessAction(response);
                        }),
                        catchError(error => of(new LoadShipsPageFailureAction(error)))
                    )
            )
        ));


    constructor(
        private actions$: Actions,
        private shipsService: ShipsService
    ) { }
}
