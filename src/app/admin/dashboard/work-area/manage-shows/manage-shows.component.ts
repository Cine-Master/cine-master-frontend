import {Component, Input, OnInit} from '@angular/core';
import { EditService, PageService, CommandColumnService, CommandModel } from '@syncfusion/ej2-angular-grids';
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

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ej-grid-manageshowscomponent',
  templateUrl: './manage-shows.component.html',
  styleUrls: ['./manage-shows.component.css']
})
export class ManageShowsComponent implements OnInit, ItemComponent {
  @Input() data: object[];
  public editSettings: object;
  public titlerules: object;
  public descriptionrules: object;
  public coverrules: object;
  public editparams: object;
  public pageSettings: object;
  public commands: CommandModel[];
  it: any;
  IT: any;

  public ngOnInit(): void {
    // tslint:disable-next-line:max-line-length
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal', allowEditOnDblClick: false, showDeleteConfirmDialog: true };
    this.titlerules = { required: true };
    this.descriptionrules = { required: true };
    this.coverrules =  { required: true };
    this.editparams = {  params: { popupHeight: '300px' }};
    this.pageSettings = {pageCount: 5};
    this.commands = [{ type: 'Edit', buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' } },
      { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' }  },
      { type: 'Save', buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' } },
      { type: 'Cancel', buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' } }];
  }
}
