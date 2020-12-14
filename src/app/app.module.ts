import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MenuModule, SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ManageShowsComponent } from './admin/dashboard/manage-shows/manage-shows.component';
import {CommandColumnService, EditService, GridModule, PageService} from '@syncfusion/ej2-angular-grids';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ManageShowsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'admin/dashboard', component: DashboardComponent},
      {path: 'login', component: LoginComponent},
      {path: 'admin/dashboard/manage_shows', component: ManageShowsComponent}
    ]),
    ReactiveFormsModule,
    HttpClientModule,
    MenuModule,
    SidebarModule,
    GridModule,
  ],
  providers: [CommandColumnService, EditService, PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
