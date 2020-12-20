import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {UploaderComponent, FileInfo} from '@syncfusion/ej2-angular-inputs';
import {loadCldr, L10n, setCulture} from '@syncfusion/ej2-base';
declare var require: any;
loadCldr(
  require('cldr-data/main/it/numbers.json'),
  require('cldr-data/main/it/ca-gregorian.json'),
  require('cldr-data/supplemental/numberingSystems.json'),
  require('cldr-data/main/it/timeZoneNames.json'),
  require('cldr-data/supplemental/weekdata.json')
);

import {ShowCreationService} from './services/show-creation.service';
import {Show} from '../../../model/Show';
import {ItemComponent} from '../item/item.component';

@Component({
  selector: 'app-show-creator',
  templateUrl: './show-creator.component.html',
  styleUrls: ['./show-creator.component.css']
})
export class ShowCreatorComponent implements OnInit, ItemComponent {

  @Input() type: string;
  timeFormat: string = 'HH:mm';
  timeInterval: number = 15;
  invalidFields: boolean = false;
  nations: string[] = ['Italia', 'Stati Uniti', 'Spagna', 'Francia', 'Regno Unito', 'Portogallo'];
  languages: string[] = ['Italiano', 'Inglese', 'Spagnolo', 'Francese', 'Portoghese'];
  buttons = { browse: "Scegli file", clear: "Clear All", upload: "Upload All" };
  showTitle: string;
  showDescription: string;
  showCoverImageFileInfo: FileInfo;
  showCoverImageRawData: string | Blob;
  showCoverImageExtension: string;
  showDate: Date;
  showStartTime: Date;
  showEndTime: Date;
  showProductionLocation: string;
  showLanguage: string;

  @ViewChild('coverUploader')
  public uploadObj: UploaderComponent;

  @ViewChild('invalidFieldsToastAlert') invalidFieldsAlert;
  @ViewChild('invalidResponseToastAlert') invalidResponseAlert;
  @ViewChild('correctResponseToastAlert') correctResponseAlert;
  public position = { X: 'Left'};


  public constructor(public showCreationService: ShowCreationService) {
  }

  ngOnInit(): void {
    setCulture('it');
    L10n.load({
      it: {
        datepicker: {
          placeholder: 'Seleziona la data',
          today: 'Oggi'
        }
      }
    });
  }

  createNewShow(): void {

    this.showCoverImageFileInfo = this.uploadObj.getFilesData()[0];

    this.evaluateShowDate();
    this.evaluateShowDescription();
    this.evaluateShowCoverImage();
    this.evaluateShowEndTime();
    this.evaluateShowLanguage();
    this.evaluateShowProductionLocation();
    this.evaluateShowStartTime();
    this.evaluateShowTitle();

    if(this.invalidFields) {
      this.invalidFieldsAlert.show();
      this.invalidFields = false;
    } else {

      this.showCoverImageRawData = this.showCoverImageFileInfo.rawFile;
      this.showCoverImageExtension = this.showCoverImageFileInfo.name.split('.')[1];

      const showToAdd: Show = {id: -1, title: this.showTitle, description: this.showDescription,
        coverImageRawData: this.showCoverImageRawData, coverImageExtension: this.showCoverImageExtension,
        date: this.showDate, startTime: this.showStartTime, endTime: this.showStartTime,
        productionLocation: this.showProductionLocation, language: this.showLanguage};

      if(!this.showCreationService.createNewShow(showToAdd))
        this.invalidResponseAlert.show();
      else
        this.correctResponseAlert.show();

    }

  }

  evaluateShowTitle(): boolean {
    if(this.showTitle === '') {
      this.invalidFields = true;
      return false;
    }

    return true;
  }

  evaluateShowDescription(): boolean {
    if(this.showDescription === ''){
      this.invalidFields = true;
      return false;
    }

    return true;
  }

  evaluateShowCoverImage(): boolean {
    if(this.showCoverImageFileInfo === undefined){
      this.invalidFields = true;
      return false;
    }

    return true;
  }

  evaluateShowDate(): boolean {
    if(this.showDate === undefined || this.showDate === null){
      this.invalidFields = true;
      return false;
    }

    return true;
  }

  evaluateShowStartTime(): boolean {
    if(this.showStartTime === undefined || this.showStartTime === null){
      this.invalidFields = true;
      return false;
    }

    return true;
  }

  evaluateShowEndTime(): boolean {
    if(this.showEndTime === undefined || this.showEndTime === null){
      this.invalidFields = true;
      return false;
    }

    return true;
  }

  evaluateShowProductionLocation(): boolean {
    if(this.showProductionLocation === undefined || this.showProductionLocation === null){
      this.invalidFields = true;
      return false;
    }

    return true;
  }

  evaluateShowLanguage(): boolean {
    if(this.showLanguage === undefined || this.showLanguage === null){
      this.invalidFields = true;
      return false;
    }

    return true;
  }

  singleFileForcing(): void{
    this.uploadObj.clearAll();
  }

}
