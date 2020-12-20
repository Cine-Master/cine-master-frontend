import { Injectable } from '@angular/core';
import { DashboardItem } from './dashboard-item';
import { ManageShowsComponent } from '../manage-shows/manage-shows.component';
import {data} from '../manage-shows/datasource';
import {SimpleTextComponent} from '../simple-text/simple-text.component';
import {SimpleListComponent} from '../simple-list/simple-list.component';
import {ShowCreatorComponent} from '../show-creator/show-creator.component';


@Injectable()
export class ItemService {

  getItem(id: string): DashboardItem {
    switch (id){
      case '1':
        return new DashboardItem(ManageShowsComponent, 'Spettacoli');
      case '2':
        return new DashboardItem(ShowCreatorComponent, 'Spettacoli');
      case '3':
        return new DashboardItem(SimpleListComponent, 'Categorie');
      case '4':
        return new DashboardItem(SimpleTextComponent, 'Categorie');
      case '5':
        return new DashboardItem(SimpleListComponent, 'Registi');
      case '6':
        return new DashboardItem(SimpleTextComponent, 'Registi');
      case '7':
        return new DashboardItem(SimpleListComponent, 'Attori');
      case '8':
        return new DashboardItem(SimpleTextComponent, 'Attori');
      case '9':
        return new DashboardItem(SimpleListComponent, 'Sale');
      case '10':
        return new DashboardItem(SimpleTextComponent, 'Sale');
      default:
        return null;
    }
  }

}
