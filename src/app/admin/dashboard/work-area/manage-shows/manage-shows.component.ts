import {Component, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {CommandModel, GridComponent} from '@syncfusion/ej2-angular-grids';
import {ItemComponent} from '../item/item.component';
import { ListService } from '../services/list.service';
import {WorkAreaComponent} from '../work-area.component';
import {DashboardItem} from '../item/dashboard-item';
import {Show} from '../../../../model/Show';
import {Router} from '@angular/router';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ej-grid-manageshowscomponent',
  templateUrl: './manage-shows.component.html',
  styleUrls: ['./manage-shows.component.css']
})
export class ManageShowsComponent implements OnInit, ItemComponent {
  @Input() type: string;
  public data: Show[];
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

  constructor(@Inject(WorkAreaComponent) private parent: WorkAreaComponent, private service: ListService, private router: Router) {}

  public ngOnInit(): void {
    this.service.getShows().subscribe(response => {
      this.data = response;
      this.loaded = true;
    }, error => {
      alert('Devi effettuare l\'accesso come amministratore. Sarai reindirizzato alla pagina di login.');
      this.router.navigate(['login']);
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
      this.service.updateShow(args.data).subscribe(response => {
        alert('Oggetto salvato!');
        this.parent.loadComponent(new DashboardItem(ManageShowsComponent, 'Spettacoli'));
        }, error => {
        alert('Ops.. Qualcosa è andato storto! \n Può essere che l\'elemento esiste già nel database! \n Riprova per favore...');
        this.parent.loadComponent(new DashboardItem(ManageShowsComponent, 'Spettacoli'));
      });
    }
    else if (args.requestType === 'delete') {
      this.service.deleteShow(args.data[0].id).subscribe(response => {
        alert('Oggetto eliminato!');
        this.parent.loadComponent(new DashboardItem(ManageShowsComponent, 'Spettacoli'));
        }, error => {
        alert('Ops.. Qualcosa è andato storto! \n Riprova per favore...');
        this.parent.loadComponent(new DashboardItem(ManageShowsComponent, 'Spettacoli'));
      });
    }
  }

}
