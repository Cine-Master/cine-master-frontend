import { Injectable } from '@angular/core';
import { DashboardItem } from './dashboard-item';
import {SimpleTextComponent} from '../Default/simple-text/simple-text.component';
import {SimpleListComponent} from '../Default/simple-list/simple-list.component';
import {ShowCreatorComponent} from '../Shows/show-creator/show-creator.component';
import {RoomCreatorComponent} from '../Rooms/room-creator/room-creator.component';
import {RoomsListComponent} from '../Rooms/rooms-list/rooms-list.component';
import {EventCreatorComponent} from '../event-creator/event-creator.component';
import {EventListComponent} from '../event-list/event-list.component';
import {ShowListComponent} from '../Shows/show-list/show-list.component';


@Injectable()
export class ItemService {

  getItem(id: string): DashboardItem {
    switch (id){
      case '1':
        return new DashboardItem(ShowListComponent, 'Spettacoli', {cazzo: 'cazzo'});
      case '2':
        return new DashboardItem(ShowCreatorComponent, 'Add', null);
      case '3':
        return new DashboardItem(EventListComponent, 'Eventi', null);
      case '4':
        return new DashboardItem(EventCreatorComponent, 'Eventi', null);
      case '5':
        return new DashboardItem(SimpleListComponent, 'Categorie', null);
      case '6':
        return new DashboardItem(SimpleTextComponent, 'Categorie', null);
      case '7':
        return new DashboardItem(SimpleListComponent, 'Registi', null);
      case '8':
        return new DashboardItem(SimpleTextComponent, 'Registi', null);
      case '9':
        return new DashboardItem(SimpleListComponent, 'Attori', null);
      case '10':
        return new DashboardItem(SimpleTextComponent, 'Attori', null);
      case '11':
        return new DashboardItem(RoomsListComponent, 'Sale', null);
      case '12':
        return new DashboardItem(RoomCreatorComponent, 'Sale', null);
      default:
        return null;
    }
  }

}
