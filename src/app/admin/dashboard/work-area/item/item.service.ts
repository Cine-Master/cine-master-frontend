import { Injectable } from '@angular/core';
import { DashboardItem } from './dashboard-item';
import { ManageShowsComponent } from '../manage-shows/manage-shows.component';
import {data} from '../manage-shows/datasource';


@Injectable()
export class ItemService {

  getItem(id: string): DashboardItem {
    switch (id){
      case '0':
        return new DashboardItem(ManageShowsComponent, data);
        break;
      default:
        return null;
    }
  }

}
