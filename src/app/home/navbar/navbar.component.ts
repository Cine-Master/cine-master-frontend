import {Component, Inject, Injector, OnInit, ViewContainerRef} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HomeComponent} from '../home.component';
import {SearchService} from '../../services/search.service';
import {AuthenticationService} from '../../services/authentication.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name: any;
  myForm: any;
  private parent: HomeComponent;
  categoryList: any;
  private searchService: SearchService;
  public authentication: AuthenticationService;




  constructor(private s: SearchService, private router: Router, private injector: Injector, private authenticationService: AuthenticationService) {
    this.parent = this.injector.get<HomeComponent>(HomeComponent);
    this.searchService = s;
    this.authentication = authenticationService;

    this.myForm = new FormGroup({
      name: new FormControl()
    });
  }



  ngOnInit(): void {

    this.searchService.getAllCategories().subscribe(response => {this.categoryList = response; }, error => {console.log(error); });
  }

  // tslint:disable-next-line:typedef
  searchFilmByName() {
    this.searchService.searchShowByName(this.myForm.value.name).subscribe(response => {
    this.parent.userIsSearching = true;
    this.parent.fillSearchResultsComponent(response);
    }, error => {console.log(error); });
  }

  searchFilmByCategory(catName): void {
    this.searchService.searchShowByCategory(catName).subscribe(response => {
      this.parent.userIsSearching = true;
      this.parent.fillSearchResultsComponent(response);
    }, error => {console.log(error); });
  }


  resetView() {
    this.parent.userIsSearching = false;
    this.router.navigate(['home']);
  }

  login() {
    this.router.navigate(['login']);
  }

  logout() {
    this.authenticationService.logoutUser().subscribe(response => {console.log(response); localStorage.setItem('loggato', 'false'); });
  }

  getItem() {
    return localStorage.getItem('loggato');
  }

  personalArea() {
    this.router.navigate(['personalArea']);
  }
}
