import {RoomSeat} from './RoomSeat';

export interface ShowRoom {
  id: number;
  name: string;
  nRows: number;
  nColumns: number;
  seats: RoomSeat[];
}
