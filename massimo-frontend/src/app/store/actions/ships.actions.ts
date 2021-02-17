import { Action } from '@ngrx/store';
import { ShipResponse } from 'src/app/models/ships/shipResponse.interface';

export enum ShipsActionTypes {
    LOAD_SHIPS_PAGE = '[SHIPS PAGE] Load Ships',
    LOAD_SHIPS_PAGE_SUCCESS = '[SHIPS PAGE] Load Ships Success',
    LOAD_SHIPS_PAGE_FAILURE = '[SHIPS PAGE] Load Ships Failure',
}

export class LoadShipsPageAction implements Action {
    readonly type = ShipsActionTypes.LOAD_SHIPS_PAGE;
    constructor(public payload: ShipResponse) { }
}

export class LoadShipsPageSuccessAction implements Action {
    readonly type = ShipsActionTypes.LOAD_SHIPS_PAGE_SUCCESS;
    constructor(public payload: ShipResponse) { }
}

export class LoadShipsPageFailureAction implements Action {
    readonly type = ShipsActionTypes.LOAD_SHIPS_PAGE_FAILURE;
    constructor(public payload: Error) { }
}


export type ShipsAction = LoadShipsPageAction |
    LoadShipsPageSuccessAction |
    LoadShipsPageFailureAction;