import {Component, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {InPlaceEditorComponent, MultiSelectService, RteService} from '@syncfusion/ej2-angular-inplace-editor';
import {TextBoxModel} from '@syncfusion/ej2-inputs';
import {ItemComponent} from '../item/item.component';
import {SimpleTextService} from './services/simple-text.service';

@Component({
  selector: 'app-simple-text',
  templateUrl: './simple-text.component.html',
  styleUrls: ['./simple-text.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [RteService, MultiSelectService]
})
export class SimpleTextComponent implements OnInit, ItemComponent {

  @Input() type: string;

  @ViewChild('inplaceTitleEditor')
  public titleEditorObj: InPlaceEditorComponent;

  public titleEditorValue = 'Inserisci il nome';
  public scrollParent: HTMLElement;
  public titleEditorModel: TextBoxModel = {
    placeholder: 'Inserisci il nome'
  };

  public titleRule: { [name: string]: { [rule: string]: object } } = {
    Title: { required: [true, 'Inserisci un nome valido'] }
  };

  constructor(private service: SimpleTextService) {
  }

  ngOnInit(): void {
  }

  storeElement(): void {
    if (this.titleEditorObj.value !== null){
      switch (this.type){
        case 'Attori':
          this.service.addActor({name: this.titleEditorObj.value}).subscribe(response => {
            alert('Oggetto salvato!');
          }, error => { alert('Ops.. Qualcosa è andato storto! \n Può essere che l\'elemento esiste già nel database! \n Riprova per favore...'); });
          break;
        case 'Registi':
          this.service.addDirector({name: this.titleEditorObj.value}).subscribe(response => {
            alert('Oggetto salvato!');
          }, error => { alert('Ops.. Qualcosa è andato storto! \n Può essere che l\'elemento esiste già nel database! \n Riprova per favore...'); });
          break;
        case 'Generi':
          this.service.addActor({name: this.titleEditorObj.value}).subscribe(response => {
            alert('Oggetto salvato!');
          }, error => { alert('Ops.. Qualcosa è andato storto! \n Può essere che l\'elemento esiste già nel database! \n Riprova per favore...'); });
          break;
        case 'Sale':
          this.service.addRoom({name: this.titleEditorObj.value}).subscribe(response => {
            alert('Oggetto salvato!');
          }, error => { alert('Ops.. Qualcosa è andato storto! \n Può essere che l\'elemento esiste già nel database! \n Riprova per favore...'); });
          break;
      }
    } else {
      alert('Inserisci un nome valido e riprova per favore...');
    }
  }

}
