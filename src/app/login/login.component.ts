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
      console.log(response.type);
      if (response.type === 'ADMIN') {
        localStorage.setItem("loggato", "true");
        this.router.navigate(['admin/dashboard', this.username]);
      }
      if (response.type === 'USER') {
        localStorage.setItem("loggato", "true");
        this.router.navigate(['home', this.username]);
      }
    }, error => {
      if (error.status == 400) {
        alert('Attenzione, questo utente non esiste.');
      }
      if (error.status == 404 || error.status==500) {
        alert('Attenzione, servizio momentaneamente non disponibile.');
      }
    });
  }

}
