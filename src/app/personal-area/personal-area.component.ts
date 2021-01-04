import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {WorkAreaComponent} from '../admin/dashboard/work-area/work-area.component';
import {CommandModel, GridComponent} from '@syncfusion/ej2-angular-grids';
import {PersonalAreaService} from '../services/personal-area.service';

@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.css'],
})
export class PersonalAreaComponent implements OnInit {



  public commands: CommandModel[];
  public editSettings: object;
  public editParams: object;
  public pageSettings: object;
  public data: object;


  constructor(private service: PersonalAreaService) {
  }

  ngOnInit(): void {

    this.editSettings = { allowEditing: true, allowDeleting: true, mode: 'Dialog', allowEditOnDblClick: false,
      showDeleteConfirmDialog: true };
    this.editParams = {  params: { popupHeight: '300px' }};
    this.pageSettings = { pageSize: 50 };
    this.commands = [{ type: 'Edit', buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' } },
      { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' }  },
      { type: 'Save', buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' } },
      { type: 'Cancel', buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' } }];
    this.service.getBookings().subscribe(response => {
      this.data=response;
    });

  }
  public actionBegin(args: any): void {
    if (args.requestType === 'beginEdit'){

    }
    else if (args.requestType === 'delete') {
      //this.service.deleteBooking(args.data[0].bookingId);
    }
  }


}
