import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name: any;
  myForm: any;
  constructor() {
    this.myForm = new FormGroup({
      name: new FormControl()
    });
  }


  ngOnInit(): void {}

  // tslint:disable-next-line:typedef

  // tslint:disable-next-line:typedef
  searchFilm() {
    alert(this.myForm.value.name);
  }
}
