import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {UploaderComponent, FileInfo} from '@syncfusion/ej2-angular-inputs';
import {ListService} from '../services/list.service';
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
  showDirectorsList: string[] = ['Quentin Tarantino', 'Martin Scorsese', 'Christopher Nolan', 'David Lynch', 'Richard Kelly'];
  showCategoriesList: string[] = ['Thriller', 'Horror', 'Romantico', 'Azione'];
  showActorsList: string[] = ['Leonardo DiCaprio', 'Brad Pitt', 'Al Pacino', 'John Travolta', 'Jake Gyllenhaal'];
  showRoomsList: number[] = [1, 2, 3, 4, 5];

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
  showActorsSelected: any;
  showDirectorsSelected: any;
  showCategoriesSelected: any;
  showRoomSelected: number;
  showComingSoon: boolean;


  @ViewChild('coverUploader')
  public uploadObj: UploaderComponent;

  @ViewChild('invalidFieldsToastAlert') invalidFieldsAlert;
  @ViewChild('invalidResponseToastAlert') invalidResponseAlert;
  @ViewChild('correctResponseToastAlert') correctResponseAlert;
  public position = { X: 'Left'};


  public constructor(private showCreationService: ShowCreationService, private listService: ListService) {
  }

  ngOnInit(): void {

    // TODO: Implement Back-end response to use this Service

    /*
    this.listService.getCategories().subscribe( (responseData) => this.showCategoriesList = responseData);
    this.listService.getActors().subscribe( (responseData) => this.showActorsList = responseData);
    this.listService.getRooms().subscribe( (responseData) => this.showRoomsList = responseData);
    this.listService.getDirectors().subscribe( (responseData) => this.showDirectorsList = responseData);
    */

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
    this.evaluateShowActorsSelected();
    this.evaluateShowCategoriesSelected();
    this.evaluateShowDirectorsSelected();
    this.evaluateShowComingSoon();
    this.evaluateShowRoomSelected();

    if(this.invalidFields) {
      this.invalidFieldsAlert.show();
      this.invalidFields = false;
    } else {

      this.showCoverImageRawData = this.showCoverImageFileInfo.rawFile;
      this.showCoverImageExtension = this.showCoverImageFileInfo.name.split('.')[1];

      const showToAdd: Show = {id: -1, title: this.showTitle, description: this.showDescription,
        coverImageRawData: this.showCoverImageRawData, coverImageExtension: this.showCoverImageExtension,
        date: this.showDate, startTime: this.showStartTime, endTime: this.showStartTime,
        productionLocation: this.showProductionLocation, language: this.showLanguage, actors: this.showActorsSelected,
      directors: this.showDirectorsSelected, categories: this.showCategoriesSelected, room: this.showRoomSelected,
      comingSoon: this.showComingSoon};

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
    if(this.showCoverImageFileInfo === undefined || this.showCoverImageFileInfo.status !== 'Ready to upload'){
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

  evaluateShowActorsSelected(): boolean {
    if(this.showActorsSelected === undefined || this.showActorsSelected.length === 0){
      this.invalidFields = true;
      return false;
    }

    return true;
  }

  evaluateShowDirectorsSelected(): boolean {
    if(this.showDirectorsSelected === undefined || this.showDirectorsSelected.length === 0){
      this.invalidFields = true;
      return false;
    }

    return true;
  }

  evaluateShowCategoriesSelected(): boolean {
    if(this.showCategoriesSelected === undefined || this.showCategoriesSelected.length === 0){
      this.invalidFields = true;
      return false;
    }

    return true;
  }

  evaluateShowRoomSelected(): boolean {
    if(this.showRoomSelected === undefined || this.showRoomSelected === null){
      this.invalidFields = true;
      return false;
    }

    return true;
  }

  evaluateShowComingSoon(): boolean {
    if(this.showComingSoon === undefined || this.showComingSoon === null){
      this.invalidFields = true;
      return false;
    }

    return true;
  }

  singleFileForcing(): void{
    this.uploadObj.clearAll();
  }

}
