import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {UploaderComponent, FileInfo} from '@syncfusion/ej2-angular-inputs';
import {ListService} from '../services/list.service';
import {ShowCreationService} from './services/show-creation.service';
import {Show} from '../../../../model/Show';
import {ShowActor} from '../../../../model/ShowActor';
import {ShowDirector} from '../../../../model/ShowDirector';
import {ShowCategory} from '../../../../model/ShowCategory';
import {ItemComponent} from '../item/item.component';

@Component({
  selector: 'app-show-creator',
  templateUrl: './show-creator.component.html',
  styleUrls: ['./show-creator.component.css']
})
export class ShowCreatorComponent implements OnInit, ItemComponent {

  @Input() type: string;
  invalidFields: boolean = false;
  nations: string[] = ['Italia', 'Stati Uniti', 'Spagna', 'Francia', 'Regno Unito', 'Portogallo'];
  languages: string[] = ['Italiano', 'Inglese', 'Spagnolo', 'Francese', 'Portoghese'];

  requestResponseShow: Show;
  showActorsObjects: ShowActor[];
  showDirectorsObjects: ShowDirector[];
  showCategoriesObjects: ShowCategory[];

  showDirectorsList: string[] = [];
  showCategoriesList: string[] = [];
  showActorsList: string[] = [];

  // TODO: To be used in the next Sprints
  /*
  showCoverImageFileInfo: FileInfo;
  showCoverImageRawData: string | Blob;
  showCoverImageExtension: string;
  */

  showName: string;
  showDescription: string;
  showReleaseDate: Date;
  showProductionLocation: string;
  showLanguage: string;
  showActorsSelected: any;
  showDirectorsSelected: any;
  showCategoriesSelected: any;
  showComingSoon: boolean;
  showPhotoUrl: string;
  showIsHighlighted: boolean;
  showLenght: number;


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
    this.listService.getDirectors().subscribe( (responseData) => this.assignDirectors(responseData));
  }

  createNewShow(): void {

    // TODO: To be used in the next Sprint
    // this.showCoverImageFileInfo = this.uploadObj.getFilesData()[0];

    this.evaluateShowName();
    this.evaluateShowDescription();
    this.evaluateShowCoverImage();
    this.evaluateShowReleaseDate();
    this.evaluateShowLanguage();
    this.evaluateShowProductionLocation();
    this.evaluateShowActorsSelected();
    this.evaluateShowCategoriesSelected();
    this.evaluateShowDirectorsSelected();
    this.evaluateShowIsHighlighted();
    this.evaluateShowLenght();
    this.showComingSoon = true;


    if(this.invalidFields) {
      this.invalidFieldsAlert.show();
      this.invalidFields = false;
    } else {

      // TODO: To be used in the next Sprint

      /*this.showCoverImageRawData = this.showCoverImageFileInfo.rawFile;
      this.showCoverImageExtension = this.showCoverImageFileInfo.name.split('.')[1];*/

      let month: string;
      let day: string;

      if(this.showReleaseDate.getMonth() + 1 < 10)
        month = '0' + (this.showReleaseDate.getMonth() + 1).toString();
      else
        month = (this.showReleaseDate.getMonth() + 1).toString();

      if(this.showReleaseDate.getDate() < 10)
        day = '0' + this.showReleaseDate.getDate().toString();
      else
        day = this.showReleaseDate.getDate().toString();

      const formattedShowReleaseDate = this.showReleaseDate.getFullYear().toString() + '-' +
        month + '-' + day;

      const actors = [];
      const directors = [];
      const categories = [];

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

      const showToAdd: Show = {id: null, name: this.showName, description: this.showDescription,
        photoUrl: this.showPhotoUrl, releaseDate: formattedShowReleaseDate,
        productionLocation: this.showProductionLocation, language: this.showLanguage, actors: actors,
        directors: directors, categories: categories, comingSoon: this.showComingSoon,
        highlighted: this.showIsHighlighted, lenght: this.showLenght};

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

  evaluateShowName(): boolean {
    if(this.showName === '') {
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

  evaluateShowLenght(): boolean {
    if(this.showLenght === undefined || this.showLenght === null){
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

  evaluateShowReleaseDate(): boolean {
    if(this.showReleaseDate === undefined || this.showReleaseDate === null){
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
    if (this.showCategoriesSelected === undefined || this.showCategoriesSelected.length === 0) {
      this.invalidFields = true;
      return false;
    }

    return true;
  }

  evaluateShowIsHighlighted(): boolean {
    if(this.showIsHighlighted === undefined || this.showIsHighlighted === null)
      this.showIsHighlighted = false;

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

  assignCategories(categories): void {
    this.showCategoriesObjects = categories;
    for (let i = 0; i < categories.length; i++)
      this.showCategoriesList.push(categories[i].name);
  }

}
