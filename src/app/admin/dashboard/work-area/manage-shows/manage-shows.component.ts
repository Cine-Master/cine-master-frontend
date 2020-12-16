import {Component, Input, OnInit} from '@angular/core';
import { EditService, PageService, CommandColumnService, CommandModel } from '@syncfusion/ej2-angular-grids';
import {DashboardItem} from '../item/dashboard-item';
import {ItemComponent} from '../item/item.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ej-grid-manageshowscomponent',
  templateUrl: './manage-shows.component.html',
  styleUrls: ['./manage-shows.component.css']
})
export class ManageShowsComponent implements OnInit, ItemComponent {
  @Input() data: object[];
  public editSettings: object;
  public orderidrules: object;
  public customeridrules: object;
  public freightrules: object;
  public editparams: object;
  public pageSettings: object;
  public commands: CommandModel[];

  public ngOnInit(): void {
    console.log(this.data);
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal', allowEditOnDblClick: false };
    this.orderidrules = { required: true };
    this.customeridrules = { required: true };
    this.freightrules =  { required: true };
    this.editparams = { params: { popupHeight: '300px' }};
    this.pageSettings = {pageCount: 5};
    this.commands = [{ type: 'Edit', buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' } },
      { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' } },
      { type: 'Save', buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' } },
      { type: 'Cancel', buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' } }];
  }
}
