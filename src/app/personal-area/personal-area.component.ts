import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {WorkAreaComponent} from '../admin/dashboard/work-area/work-area.component';
import {CommandModel, GridComponent} from '@syncfusion/ej2-angular-grids';
import {PersonalAreaService} from '../services/personal-area.service';
import {Timestamp} from 'rxjs/internal-compatibility';
import {DashboardItem} from '../admin/dashboard/work-area/item/dashboard-item';

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
  public personalData: any;
  public modifica: boolean;
  public male: boolean;



  constructor(private service: PersonalAreaService) {

  }

  ngOnInit(): void {
    this.personalData={"firstName":"","username":"","lastName":"","email":"","birthdate":"","gender":"","hashedPassword":""};
    this.modifica=false;
    this.editSettings = { allowEditing: true, allowDeleting: true, mode: 'Dialog', allowEditOnDblClick: false,
      showDeleteConfirmDialog: true };
    this.editParams = {  params: { popupHeight: '300px' }};
    this.pageSettings = { pageSize: 50 };
    this.commands = [
      { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' }  },
      { type: 'Save', buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' } },
      { type: 'Cancel', buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' } }];
    this.loadBooking();
    this.loadPersonalData();

  }
  public actionBegin(args: any): void {
    if (args.requestType === 'delete') {
      this.service.deleteBooking(args.data[0].bookingId).subscribe(response => {
        this.loadBooking();
      },error => {
          console.log(error);
          alert('Ops.. Qualcosa è andato storto! \n Riprova per favore...');
          this.loadBooking();
        });
    }
  }
  public loadPersonalData(): void{
    this.service.getPersonalData().subscribe(response => {
      this.personalData=response;
      if(this.personalData.gender=="MALE")
        this.male=true;
      else
        this.male=false;
    });

  }


  modificaDati() {
    this.modifica=true;
  }

  salvaDati(name: string,surname: string, username: string, email: string, birthDate: string, gender: string,password: string) {
    var newData={id:"","firstName":"","username":"","lastName":"","email":"","birthdate":"","gender":"","hashedPassword":""};
    newData.id=this.personalData.id;
    newData.firstName = name;
    newData.lastName = surname;
    newData.username = username;
    newData.email = email;
    newData.birthdate = birthDate;
    newData.gender = gender;
    newData.hashedPassword = null;
    this.service.savePersonalData(newData).subscribe(response => {
      console.log(response);
    });
  }

  private loadBooking() {
    this.service.getBookings().subscribe(response => {
      this.data=response;
    });
  }
}
