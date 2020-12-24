import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CommandModel, GridComponent} from '@syncfusion/ej2-angular-grids';
import {ItemComponent} from '../item/item.component';
import { ListService } from '../services/list.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ej-grid-manageshowscomponent',
  templateUrl: './manage-shows.component.html',
  styleUrls: ['./manage-shows.component.css']
})
export class ManageShowsComponent implements OnInit, ItemComponent {
  @Input() type: string;
  public data: object[];
  public editSettings: object;
  public titlerules: object;
  public descriptionrules: object;
  public coverrules: object;
  public editparams: object;
  public pageSettings: object;
  public commands: CommandModel[];
  public loaded = false;
  it: any;

  @ViewChild('grid')
  public grid: GridComponent;

  constructor(private service: ListService) {
  }

  public ngOnInit(): void {
    this.service.getShows().subscribe(response => {
      this.data = response;
      this.loaded = true;
    }, error => {
      alert('Qualcosa è andato storto!');
    });

    this.editSettings = { allowEditing: true, allowDeleting: true, mode: 'Dialog', allowEditOnDblClick: false,
      showDeleteConfirmDialog: true };
    this.titlerules = { required: true };
    this.descriptionrules = { required: true };
    this.editparams = {  params: { popupHeight: '300px' }};
    this.coverrules = { params: {template: '<a href="../../../../../assets/logos/movie.png"> <img class="tempimg" src="../../../../../assets/logos/movie.png" >'}};
    this.pageSettings = {pageCount: 5};
    this.commands = [{ type: 'Edit', buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' } },
      { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' }  },
      { type: 'Save', buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' } },
      { type: 'Cancel', buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' } }];
  }

  public actionBegin(args: any): void {
    if (args.requestType === 'save'){
      this.service.updateShow(args.data).subscribe(response => {}, error => {
        alert('Ops.. Qualcosa è andato storto! \n Può essere che l\'elemento esiste già nel database! \n Riprova per favore...');
      });
    }
    else if (args.requestType === 'delete') {
      this.service.deleteShow(args.data[0].id).subscribe(response => {}, error => {
        alert('Ops.. Qualcosa è andato storto! \n Riprova per favore...');
      });
    }
  }

}
