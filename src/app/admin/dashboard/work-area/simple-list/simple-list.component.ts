import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { CommandModel, GridComponent} from '@syncfusion/ej2-angular-grids';
import { L10n, setCulture } from '@syncfusion/ej2-base';
import { ListService } from './services/list.service';
import {ItemComponent} from '../item/item.component';

setCulture('en-US');
L10n.load({
  'en-US': {
    grid: {
      ConfirmDelete : 'Sicuro di voler rimuovere lo spettacolo?'
    }
  }
});

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ej-grid-simple-list',
  templateUrl: './simple-list.component.html',
  styleUrls: ['./simple-list.component.css']
})
export class SimpleListComponent implements OnInit, ItemComponent {

  @Input() type: string;
  public data: any;
  public editSettings: object;
  public nameRules: object;
  public idRules: object;
  public editParams: object;
  public pageSettings: object;
  public commands: CommandModel[];
  private loaded = false;

  @ViewChild('grid')
  public grid: GridComponent;

  constructor(private service: ListService) {
  }

  public ngOnInit(): void {

    // tslint:disable:new-parens
    switch (this.type){
      case 'Sale':
        this.service.getRooms().subscribe(response => {
          this.data = response;
          this.loaded = true;
        });
        break;
      case 'Attori':
        this.service.getActors().subscribe(response => {
          this.data = response;
          this.loaded = true;
        });
        break;
      case 'Registi':
        this.service.getProducers().subscribe(response => {
          this.data = response;
          this.loaded = true;
        });
        break;
      case 'Categorie':
        this.service.getCategories().subscribe(response => {
          this.data = response;
          this.loaded = true;
        });
        break;
      default:
        this.data = null;
    }

    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal', allowEditOnDblClick: false,
      showDeleteConfirmDialog: true };
    this.nameRules = { required: true };
    this.idRules = { required: true };
    this.editParams = {  params: { popupHeight: '300px' }};
    this.pageSettings = {pageCount: 8};
    this.commands = [{ type: 'Edit', buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' } },
      { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' }  },
      { type: 'Save', buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' } },
      { type: 'Cancel', buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' } }];
  }

}
