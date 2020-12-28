import {Component, Inject, Injector, OnInit, ViewContainerRef} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HomeComponent} from '../home.component';
import {SearchService} from '../../services/search.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name: any;
  myForm: any;
  private parent: HomeComponent;
  constructor(private searchService: SearchService, private router: Router, private injector: Injector) {
    this.parent = this.injector.get<HomeComponent>(HomeComponent);

    this.myForm = new FormGroup({
      name: new FormControl()
    });
  }



  ngOnInit(): void {}

  // tslint:disable-next-line:typedef

  // tslint:disable-next-line:typedef
  searchFilm() {
    this.searchService.searchShowByName(this.myForm.value.name).subscribe(response => {
    this.parent.userIsSearching = true;
    this.parent.fillSearchResultsComponent(response);
    }, error => {console.log(error); });
  }

  // tslint:disable-next-line:typedef
  resetView() {
    this.parent.userIsSearching = false;
  }
}
