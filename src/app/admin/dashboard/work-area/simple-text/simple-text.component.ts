import {Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {InPlaceEditorComponent, MultiSelectService, RteService} from '@syncfusion/ej2-angular-inplace-editor';
import {TextBoxModel} from '@syncfusion/ej2-inputs';
import {ItemComponent} from '../item/item.component';

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


  ngOnInit(): void {
  }

  storeElement(event): void {

  }

}
