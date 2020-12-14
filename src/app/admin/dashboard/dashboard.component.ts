import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { MenuItemModel } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {

  @ViewChild('sidebarMenuInstance')
  public sidebarMenuInstance: SidebarComponent;
  public width = '220px';
  public mediaQuery: string = ('(min-width: 600px)');
  public target = '.main-content';
  public dockSize = '60px';
  public enableDock = true;

  constructor() {}

  public menuItems: MenuItemModel[] = [
    {
      text: 'Spettacoli',
      iconCss: 'e-icons e-month',
      items: [
        { text: 'Visualizza Spettacoli' },
      ]
    },
    {
      text: 'Copertine',
      iconCss: 'e-icons e-film',
      items: [
        { text: 'Visualizza Copertine' },
      ]
    },
    {
      text: 'Sale',
      iconCss: 'e-icons e-room',
      items: [
        { text: 'Visualizza Sale' },
      ]
    }];

  public AccountMenuItem: MenuItemModel[] = [
    {
      text: 'Account',
      items: [
        { text: 'Sign out' },
      ]
    }
  ];

  // open new tab
  newTabClick(): void {
    const URL = location.href.replace(location.search, '');
    document.getElementById('newTab').setAttribute('href', URL.split('#')[0] + 'sidebar/sidebar-menu');
  }

  openClick(): void {
    this.sidebarMenuInstance.toggle();
  }

}
