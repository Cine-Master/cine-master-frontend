import {Component, Input, OnInit} from '@angular/core';
import { EditService, PageService, CommandColumnService, CommandModel } from '@syncfusion/ej2-angular-grids';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import {ItemComponent} from '../item/item.component';
import { L10n, setCulture } from '@syncfusion/ej2-base';

setCulture('en-US');
L10n.load({
  'en-US': {
    grid: {
      ConfirmDelete : 'Sicuro di voler rimuovere lo spettacolo?'
    },
    pager: {
      currentPageInfo: '{0} Di {1} Pagine',
      totalItemsInfo: '({0} Oggetti)',
    }
  }
});

const SERVICE_URI = 'https://localhot:8080/';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ej-grid-simple-list',
  templateUrl: './simple-list.component.html',
  styleUrls: ['./simple-list.component.css']
})
export class SimpleListComponent implements OnInit, ItemComponent {

  @Input() type: string;
  public data: DataManager;
  public editSettings: object;
  public nameRules: object;
  public idRules: object;
  public editParams: object;
  public pageSettings: object;
  public commands: CommandModel[];

  public ngOnInit(): void {
    // tslint:disable-next-line:new-parens
    this.data = new DataManager({ url: SERVICE_URI + 'api/Orders', adaptor: new WebApiAdaptor });
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal', allowEditOnDblClick: false,
      showDeleteConfirmDialog: true };
    this.nameRules = { required: true };
    this.idRules = { required: true };
    this.editParams = {  params: { popupHeight: '300px' }};
    this.pageSettings = {pageCount: 10};
    this.commands = [{ type: 'Edit', buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' } },
      { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' }  },
      { type: 'Save', buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' } },
      { type: 'Cancel', buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' } }];
  }

}
