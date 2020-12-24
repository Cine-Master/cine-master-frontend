import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { CommandModel, GridComponent} from '@syncfusion/ej2-angular-grids';
import { ListService } from '../services/list.service';
import {ItemComponent} from '../item/item.component';
import { map, tap} from 'rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ej-grid-simple-list',
  templateUrl: './simple-list.component.html',
  styleUrls: ['./simple-list.component.css'],
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
  public loaded = false;

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
        }, error => {
          alert('Qualcosa è andato storto!');
        });
        break;
      case 'Attori':
        this.service.getActors().subscribe(response => {
          this.data = response;
          this.loaded = true;
        }, error => {
        alert('Qualcosa è andato storto!');
      });
        break;
      case 'Registi':
        this.service.getDirectors().subscribe(response => {
          this.data = response;
          this.loaded = true;
        }, error => {
        alert('Qualcosa è andato storto!');
        });
        break;
      case 'Categorie':
        this.service.getCategories().subscribe(response => {
          this.data = response;
          this.loaded = true;
        }, error => {
          alert('Qualcosa è andato storto!');
        });
        break;
      default:
        this.data = null;
    }

    this.editSettings = { allowEditing: true, allowDeleting: true, mode: 'Dialog', allowEditOnDblClick: false,
      showDeleteConfirmDialog: true};
    this.nameRules = { required: true };
    this.idRules = { required: true };
    this.editParams = {  params: { popupHeight: '300px' }};
    this.pageSettings = {pageCount: 8};
    this.commands = [{ type: 'Edit', buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' } },
      { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' }  },
      { type: 'Save', buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' } },
      { type: 'Cancel', buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' } }];
  }

  public actionBegin(args: any): void {
    if (args.requestType === 'save'){
      switch (this.type){
        case 'Sale':
          this.service.updateRoom(args.data).subscribe(response => { alert('Oggetto salvato!'); }, error => {
            alert('Ops.. Qualcosa è andato storto! \n Può essere che l\'elemento esiste già nel database! \n Riprova per favore...');
          });
          break;
        case 'Attori':
          this.service.updateActor(args.data).subscribe(response => { alert('Oggetto salvato!'); }, error => {
            alert('Ops.. Qualcosa è andato storto! \n Può essere che l\'elemento esiste già nel database! \n Riprova per favore...');
          });
          break;
        case 'Registi':
          this.service.updateDirector(args.data).subscribe(response => { alert('Oggetto salvato!'); }, error => {
            alert('Ops.. Qualcosa è andato storto! \n Può essere che l\'elemento esiste già nel database! \n Riprova per favore...');
          });
          break;
        case 'Categorie':
          this.service.updateCategorie(args.data).subscribe(response => { alert('Oggetto salvato!'); }, error => {
            alert('Ops.. Qualcosa è andato storto! \n Può essere che l\'elemento esiste già nel database! \n Riprova per favore...');
          });
          break;
      }
    }
    else if (args.requestType === 'delete'){
      switch (this.type){
        case 'Sale':
          this.service.deleteRoom(args.data[0].id).pipe(
            map((result: any) => result as string),
            tap((result: string) => {
                console.log('response from server:', result);
              })
          );
          break;
        case 'Attori':
          this.service.deleteActor(args.data[0].id).subscribe(response => { alert('Oggetto eliminato correttamente!'); }, error => {
            alert('Ops.. Qualcosa è andato storto! \n Riprova per favore...');
          });
          break;
        case 'Registi':
          this.service.deleteDirector(args.data[0].id).subscribe(response => { alert('Oggetto eliminato correttamente!'); }, error => {
            alert('Ops.. Qualcosa è andato storto! \n Riprova per favore...');
          });
          break;
        case 'Categorie':
          this.service.deleteCategorie(args.data[0].id).subscribe(response => { alert('Oggetto eliminato correttamente!'); }, error => {
            alert('Ops.. Qualcosa è andato storto! \n Riprova per favore...');
          });
          break;
      }
    }
  }

}
