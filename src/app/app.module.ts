import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { WorksAreaComponent } from './admin/dashboard/works-area/works-area.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    WorksAreaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'admin/dashboard', component: DashboardComponent},
      {path: 'login', component: LoginComponent}
    ]),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
