import { ShipsState } from '../reducers/ships.reducer';

export interface AppState {
    readonly ships: ShipsState;
}
