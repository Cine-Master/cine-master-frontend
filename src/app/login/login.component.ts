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
  private responseCode: string;

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService, private router: Router) {

    this.responseCode = '';
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
      this.responseCode = response;
      if (this.responseCode === 'user_ok') {
        this.router.navigate(['user/dashboard', this.username]);
      }
      else if (this.responseCode === 'admin_ok') {
        this.router.navigate(['admin/dashboard', this.username]);
      }
      else {
        // TODO fai un messaggio di errore togo
        alert('Error');
      }
    });


  }

}
