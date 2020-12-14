import { Component, ViewChild, OnInit } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { MenuItemModel } from '@syncfusion/ej2-navigations';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  constructor() {}

  @ViewChild('sidebarMenuInstance')
  public sidebarMenuInstance: SidebarComponent;
  public width = '220px';
  public mediaQuery: string = ('(min-width: 600px)');
  public target = '.main-content';
  public dockSize = '50px';
  public enableDock = true;

  public menuItems: MenuItemModel[] = [
    {
      text: 'Overview',
      iconCss: 'icon-globe icon',
      items: [
        { text: 'All Data' },
        { text: 'Category2' },
        { text: 'Category3' }
      ]
    },
    {
      text: 'Notification',
      iconCss: 'icon-bell-alt icon',
      items: [
        { text: 'Message' },
        { text: 'Facebook' },
        { text: 'Twitter' }
      ]
    },
    {
      text: 'Comments',
      iconCss: 'icon-comment-inv-alt2 icon',
      items: [
        { text: 'Category1' },
        { text: 'Category2' },
        { text: 'Category3' }
      ]
    },
    {
      text: 'Bookmarks',
      iconCss: 'icon-bookmark icon',
      items: [
        { text: 'All Comments' },
        { text: 'Add Comments' },
        { text: 'Delete Comments' }
      ]
    },
    {
      text: 'Images',
      iconCss: 'icon-picture icon',
      items: [
        { text: 'Add Name' },
        { text: 'Add Mobile Number' },
        { text: 'Add Imaage' },
      ]
    },
    {
      text: 'Users ',
      iconCss: 'icon-user icon',
      items: [
        { text: 'Mobile1' },
        { text: 'Mobile2' },
        { text: 'Telephone' }
      ]
    },
    {
      text: 'Settings',
      iconCss: 'icon-eye icon',
      items: [
        { text: 'Change Profile' },
        { text: 'Add Name' },
        { text: 'Add Details' }
      ]
    },
    {
      text: 'Info',
      iconCss: 'icon-tag icon',
      items: [
        { text: 'Facebook' },
        { text: 'Mobile' },
      ]
    }
  ];

  public AccountMenuItem: MenuItemModel[] = [
    {
      text: 'Account',
      items: [
        { text: 'Profile' },
        { text: 'Sign out' },
      ]
    }
  ];

  ngOnInit(): void {
  }
  // open new tab
  newTabClick(): void {
    const URL = location.href.replace(location.search,'');
    document.getElementById('newTab').setAttribute('href', URL.split('#')[0] + 'sidebar/sidebar-menu');
  }

  openClick(): void {
    this.sidebarMenuInstance.toggle();
  }

}
