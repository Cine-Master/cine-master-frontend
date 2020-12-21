import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  username: FormControl;
  password: FormControl;

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService, private router: Router) {

    this.username = new FormControl('', [Validators.required]);
    this.loginForm = formBuilder.group({
      username: this.username,
      password: this.password
    });

  }


  ngOnInit(): void {
  }


  onSubmit(): void {
    this.authenticationService.authenticateUser(this.loginForm.value).subscribe(response => {
      if (response.type === 'ADMIN') {
        this.router.navigate(['admin/dashboard', this.username]);
      }
      if (response.type === 'USER') {
        this.router.navigate(['user/dashboard', this.username]);
      }
    }, error => {alert(error); });
  }

}
