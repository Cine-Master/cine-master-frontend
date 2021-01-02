import {Component, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {ItemComponent} from '../item/item.component';
import {CommandModel, GridComponent} from '@syncfusion/ej2-angular-grids';
import {Event} from '../../../../model/Event';
import {WorkAreaComponent} from '../work-area.component';
import {Router} from '@angular/router';
import {EventListService} from './services/event-list.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit, ItemComponent {
  @Input() type: string;
  public data: Event[];
  public editSettings: object;
  public showRules: object;
  public roomRules: object;
  public pricesRules: object;
  public startDateRules: object;
  public endDateRules: object;
  public editparams: object;
  public pageSettings: object;
  public commands: CommandModel[];
  public loaded = false;
  it: any;

  @ViewChild('grid')
  public grid: GridComponent;

  constructor(@Inject(WorkAreaComponent) private parent: WorkAreaComponent, private service: EventListService, private router: Router) {}

  ngOnInit(): void {
    this.service.getEvents().subscribe(response => {
      this.data = response;
      this.loaded = true;
    }, error => {
      alert('Ops.. Qualcosa è andato storto! \n Riprova per favore...');
      this.router.navigate(['login']);
    });


    // this.editSettings = { allowEditing: true, allowDeleting: true, mode: 'Dialog', allowEditOnDblClick: false,
    //  showDeleteConfirmDialog: true };
    this.showRules = { required: true };
    this.roomRules = { required: true };
    this.pricesRules = { required: true };
    this.startDateRules = { required: true, format: 'YYYY-MM-DD'};
    this.endDateRules = { required: true, format: 'YYYY-MM-DD'};
    this.editparams = {  params: { popupHeight: '300px' }};
    this.pageSettings = { pageSize: 50 };

    // this.commands = [{ type: 'Edit', buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' } },
    //   { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' }  },
    //   { type: 'Save', buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' } },
    //   { type: 'Cancel', buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' } }];
  }

}
