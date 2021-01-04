import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {Toast} from '@syncfusion/ej2-notifications';


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
    // this.authenticationService.authenticateUserBis(this.user, this.pass).subscribe(response => {
    this.authenticationService.authenticateUser(this.loginForm.value).subscribe(response => {
    console.log(response);
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
        const t = new Toast({
          title: 'Errore login',
          content: 'Username o password sbagliate'
        }); t.appendTo('#toastDiv'); t.show();
      }
      if (error.status == 404 || error.status==500) {
        alert('Attenzione, servizio momentaneamente non disponibile.');
      }
    });
    this.loginForm.reset();
  }

}
