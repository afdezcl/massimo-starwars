import { ShipResponse } from 'src/app/models/ships/shipResponse.interface';
import { ShipsAction, ShipsActionTypes } from '../actions/ships.actions';

export interface ShipsState {
    list: ShipResponse[];
    loading: boolean;
    error: Error;
}

const initialState: ShipsState = {
    list: [],
    loading: false,
    error: undefined
};

export function ShoppingReducer(state: ShipsState = initialState, action: ShipsAction): ShipsState {
    switch (action.type) {
        case ShipsActionTypes.LOAD_SHIPS_PAGE:
            return {
                ...state,
                loading: true
            };
        case ShipsActionTypes.LOAD_SHIPS_PAGE_SUCCESS:
            return {
                ...state,
                list: [...state.list, action.payload],
                loading: false
            };
        case ShipsActionTypes.LOAD_SHIPS_PAGE_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        default:
            return state;
    }
}
