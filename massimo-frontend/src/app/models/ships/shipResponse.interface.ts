import { Ship } from "./ship.interface";

export interface ShipResponse {
  count: number;
  next: string;
  previous: string;
  results: Array<Ship>;
}
