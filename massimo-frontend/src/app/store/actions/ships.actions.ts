import { Action } from '@ngrx/store';

export enum ShoppingActionTypes {
    LOAD_SHIPS_PAGE = '[SHIPS PAGE] Load Ships',
    LOAD_SHIPS_PAGE_SUCCESS = '[SHIPS PAGE] Load Ships Success',
    LOAD_SHIPS_PAGE_FAILURE = '[SHIPS PAGE] Load Ships Failure',
}

export class LoadShipsPageAction implements Action {
    readonly type = ShoppingActionTypes.LOAD_SHIPS_PAGE;
    constructor(public payload: any) { }
}

export class LoadShipsPageSuccessAction implements Action {
    readonly type = ShoppingActionTypes.LOAD_SHIPS_PAGE_SUCCESS;
    constructor(public payload: any) { }
}

export class LoadShipsPageFailureAction implements Action {
    readonly type = ShoppingActionTypes.LOAD_SHIPS_PAGE_FAILURE;
    constructor(public payload: Error) { }
}


export type ShipsAction = LoadShipsPageAction |
    LoadShipsPageSuccessAction |
    LoadShipsPageFailureAction;