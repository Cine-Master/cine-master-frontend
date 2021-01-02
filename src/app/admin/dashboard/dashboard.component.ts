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
      text: '‏‏‎ ‎ ‏‏‎ ‎Copertine',
      iconCss: 'e-icons e-film',
      items: [
        { id: '1', text: 'Visualizza Spettacoli' },
        { id: '2', text: 'Inserisci Spettacoli' },
      ]
    },
    {
      text: '‏‏‎ ‎ ‏‏‎ ‎Eventi',
      iconCss: 'e-icons e-month',
      items: [
        { id: '3', text: 'Visualizza Eventi' },
        { id: '4', text: 'Inserisci Eventi' },
      ]
    },
    {
      text: ' ‏‏‎ ‎‏‏‎ ‎Categorie',
      iconCss: 'e-icons e-category',
      items: [
        { id: '5', text: 'Visualizza Categoria' },
        { id: '6', text: 'Inserisci Categorie' },
      ]
    },
    {
      text: ' ‏‏‎ ‎‏‏‎ ‎Registi',
      iconCss: 'e-icons e-producer',
      items: [
        { id: '7', text: 'Visualizza Registi' },
        { id: '8', text: 'Inserisci Registi' },
      ]
    },
    {
      text: ' ‏‏‎ ‎‏‏‎ ‎Attori',
      iconCss: 'e-icons e-actors',
      items: [
        { id: '9', text: 'Visualizza Attori' },
        { id: '10', text: 'Inserisci Attori' },
      ]
    },
    {
      text: ' ‏‏‎ ‎‏‏‎ ‎Sale',
      iconCss: 'e-icons e-room',
      items: [
        { id: '11', text: 'Visualizza Sale' },
        { id: '12', text: 'Inserisci Sale' },
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
    this.item = this.itemService.getItem('1');
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
    if (args.item.id === 'logout'){
      this.doLogout();
    }
    else {
      this.item = this.itemService.getItem(args.item.id);
      this.workArea.loadComponent(this.item);
    }
  }

  doLogout(): void {
    console.log('logout');
  }


}
