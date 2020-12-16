import {Component, ViewChild, OnInit} from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { MenuItemModel } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
import { ItemService } from './work-area/item/item.service';
import { DashboardItem } from './work-area/item/dashboard-item';
import {WorkAreaComponent} from './work-area/work-area.component';

enableRipple(true);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{

  @ViewChild('sidebarMenuInstance')
  public sidebarMenuInstance: SidebarComponent;
  @ViewChild('workAreaComponent')
  public workArea: WorkAreaComponent;
  public width = '220px';
  public mediaQuery: string = ('(min-width: 600px)');
  public target = '.main-content';
  public dockSize = '60px';
  public enableDock = true;
  item: DashboardItem;
  private loaded = false;

  constructor(private itemService: ItemService) {}

  public menuItems: MenuItemModel[] = [
    {
      text: ' Spettacoli',
      iconCss: 'e-icons e-month',
      items: [
        { id: '1', text: 'Visualizza Spettacoli' },
        { id: '2', text: 'Inserisci Spettacoli' },
      ]
    },
    {
      text: ' Copertine',
      iconCss: 'e-icons e-film',
      items: [
        { id: '3', text: 'Visualizza Copertine' },
        { id: '4', text: 'Inserisci Copertine' },
      ]
    },
    {
      text: ' Sale',
      iconCss: 'e-icons e-room',
      items: [
        { id: '5', text: 'Visualizza Sale' },
        { id: '6', text: 'Inserisci Sale' },
      ]
    }];

  public AccountMenuItem: MenuItemModel[] = [
    {
      text: 'Account',
      items: [
        { id: 'logout', text: 'Sign out' },
      ]
    }
  ];

  ngOnInit(): void {
    this.item = this.itemService.getItem('0');
  }

  // open new tab
  newTabClick(): void {
    const URL = location.href.replace(location.search, '');
    document.getElementById('newTab').setAttribute('href', URL.split('#')[0] + 'sidebar/sidebar-menu');
  }

  openClick(): void {
    this.sidebarMenuInstance.toggle();
  }

  onItemSelect(args): void {
    switch (args.item.id) {
      case '1':
        this.renderShowsList();
        break;
      case '2':
        this.renderAddShow();
        break;
      case '3':
        this.renderFilmsList();
        break;
      case '4':
        this.renderAddFilm();
        break;
      case '5':
        this.renderRoomsList();
        break;
      case '6':
        this.renderAddRoom();
        break;
      case 'logout':
        this.doLogout();
        break;
    }
  }

  renderShowsList(): void {
    this.item = this.itemService.getItem('0');
    this.workArea.loadComponent(this.item);
  }

  renderFilmsList(): void {
    console.log('list film');
  }

  renderRoomsList(): void {
    console.log('list room');
  }

  renderAddShow(): void {
    console.log('add show');
  }

  renderAddFilm(): void {
    console.log('add film');
  }

  renderAddRoom(): void {
    console.log('add room');
  }

  doLogout(): void {
    console.log('logout');
  }


}
