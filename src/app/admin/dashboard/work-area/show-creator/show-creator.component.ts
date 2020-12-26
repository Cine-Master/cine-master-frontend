import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {UploaderComponent, FileInfo} from '@syncfusion/ej2-angular-inputs';
import {ListService} from '../services/list.service';
import {ShowCreationService} from './services/show-creation.service';
import {Show} from '../../../model/Show';
import {ShowActor} from '../../../model/ShowActor';
import {ShowDirector} from '../../../model/ShowDirector';
import {ShowRoom} from '../../../model/ShowRoom';
import {ShowCategory} from '../../../model/ShowCategory';
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

  requestResponseShow: Show;
  showActorsObjects: ShowActor[];
  showDirectorsObjects: ShowDirector[];
  showRoomsObjects: ShowRoom[];
  showCategoriesObjects: ShowCategory[];

  showRoomsList: number[] = [];
  showDirectorsList: string[] = [];
  showCategoriesList: string[] = [];
  showActorsList: string[] = [];

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
  showRoomSelected: string;
  showComingSoon: boolean;
  showPhotoUrl: string;


  @ViewChild('coverUploader')
  public uploadObj: UploaderComponent;

  @ViewChild('invalidFieldsToastAlert') invalidFieldsAlert;
  @ViewChild('invalidResponseToastAlert') invalidResponseAlert;
  @ViewChild('correctResponseToastAlert') correctResponseAlert;
  public position = { X: 'Left'};


  public constructor(private showCreationService: ShowCreationService, private listService: ListService) {
  }

  ngOnInit(): void {
    this.listService.getCategories().subscribe( (responseData) => this.assignCategories(responseData));
    this.listService.getActors().subscribe( (responseData) => this.assignActors(responseData));
    this.listService.getRooms().subscribe( (responseData) => this.assignRooms(responseData));
    this.listService.getDirectors().subscribe( (responseData) => this.assignDirectors(responseData));
  }

  createNewShow(): void {

    // TODO: To be used in the next Sprint
    // this.showCoverImageFileInfo = this.uploadObj.getFilesData()[0];

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

      // TODO: To be used in the next Sprint

      /*this.showCoverImageRawData = this.showCoverImageFileInfo.rawFile;
      this.showCoverImageExtension = this.showCoverImageFileInfo.name.split('.')[1];*/

      let month: string;
      let day: string;
      let startTimeMinutes: string;
      let startTimeHours: string;
      let endTimeMinutes: string;
      let endTimeHours: string;

      if(this.showDate.getMonth() + 1 < 10)
        month = '0' + (this.showDate.getMonth() + 1).toString();
      else
        month = (this.showDate.getMonth() + 1).toString();

      if(this.showDate.getDate() < 10)
        day = '0' + this.showDate.getDate().toString();
      else
        day = this.showDate.getDate().toString();

      const formattedShowDate = this.showDate.getFullYear().toString() + '-' +
        month + '-' + day;

      if(this.showStartTime.getHours() < 10)
        startTimeHours = '0' + this.showStartTime.getHours().toString();
      else
        startTimeHours = this.showStartTime.getHours().toString();

      if(this.showStartTime.getMinutes() < 10)
        startTimeMinutes = '0' + this.showStartTime.getMinutes().toString();
      else
        startTimeMinutes = this.showStartTime.getMinutes().toString();

      const formattedStartTime = startTimeHours + ':' + startTimeMinutes;

      if(this.showEndTime.getHours() < 10)
        endTimeHours = '0' + this.showEndTime.getHours().toString();
      else
        endTimeHours = this.showEndTime.getHours().toString();

      if(this.showEndTime.getMinutes() < 10)
        endTimeMinutes = '0' + this.showEndTime.getMinutes().toString();
      else
        endTimeMinutes = this.showEndTime.getMinutes().toString();

      const formattedEndTime = endTimeHours + ':' + endTimeMinutes;

      let room;
      let actors = [];
      let directors = [];
      let categories = [];

      for (let i = 0; i < this.showRoomsObjects.length; i++){
        if(this.showRoomsObjects[i].name === this.showRoomSelected){
          room = {
            id: this.showRoomsObjects[i].id,
            name: this.showRoomsObjects[i].name
          };
          break;
        }
      }

      for (let i = 0; i < this.showCategoriesSelected.length; i++){
        for (let j = 0; j < this.showCategoriesObjects.length; j++){
          if(this.showCategoriesObjects[j].name === this.showCategoriesSelected[i]){
            categories.push({
              id: this.showCategoriesObjects[j].id,
              name: this.showCategoriesObjects[j].name
            });
            break;
          }
        }
      }

      for (let i = 0; i < this.showDirectorsSelected.length; i++){
        for (let j = 0; j < this.showDirectorsObjects.length; j++){
          if(this.showDirectorsObjects[j].name === this.showDirectorsSelected[i]){
            directors.push({
              id: this.showDirectorsObjects[j].id,
              name: this.showDirectorsObjects[j].name
            });
            break;
          }
        }
      }

      for (let i = 0; i < this.showActorsSelected.length; i++){
        for (let j = 0; j < this.showActorsObjects.length; j++){
          if(this.showActorsObjects[j].name === this.showActorsSelected[i]){
            actors.push({
              id: this.showActorsObjects[j].id,
              name: this.showActorsObjects[j].name
            });
            break;
          }
        }
      }

      const showToAdd: Show = {id: null, name: this.showTitle, description: this.showDescription,
        photoUrl: this.showPhotoUrl, date: formattedShowDate, startTime: formattedStartTime,
        endTime: formattedEndTime,
        productionLocation: this.showProductionLocation, language: this.showLanguage, actors: actors,
        directors: directors, categories: categories, room: room,
        comingSoon: this.showComingSoon};

      this.showCreationService.createNewShow(showToAdd).subscribe(
        data => {
          this.requestResponseShow = data;
        },
        error => {
            this.invalidResponseAlert.show();
          },
        () => {
          if(this.requestResponseShow.id !== -1)
            this.correctResponseAlert.show();
          else
            this.invalidResponseAlert.show();
        });
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

    // TODO: To implement in the next Sprint
    /*
    if(this.showCoverImageFileInfo === undefined || this.showCoverImageFileInfo.status !== 'Ready to upload'){
      this.invalidFields = true;
      return false;
    }
   */

    if(this.showPhotoUrl === ''){
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
    if(this.showComingSoon === undefined || this.showComingSoon === null)
      this.showComingSoon = false;

    console.log(this.showComingSoon);
    return true;
  }

  singleFileForcing(): void{
    this.uploadObj.clearAll();
  }

  assignActors(actors): void {
    this.showActorsObjects = actors;
    for (let i = 0; i < actors.length; i++)
      this.showActorsList.push(actors[i].name);
  }

  assignDirectors(directors): void {
    this.showDirectorsObjects = directors;
    for (let i = 0; i < directors.length; i++)
      this.showDirectorsList.push(directors[i].name);
  }

  assignRooms(rooms): void {
    this.showRoomsObjects = rooms;
    for (let i = 0; i < rooms.length; i++)
      this.showRoomsList.push(rooms[i].name);
  }

  assignCategories(categories): void {
    this.showCategoriesObjects = categories;
    for (let i = 0; i < categories.length; i++)
      this.showCategoriesList.push(categories[i].name);
  }

}
