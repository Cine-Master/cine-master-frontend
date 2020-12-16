import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MenuModule, SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ManageShowsComponent } from './admin/dashboard/work-area/manage-shows/manage-shows.component';
import {CommandColumnService, EditService, GridModule, PageService} from '@syncfusion/ej2-angular-grids';

import { WorkAreaComponent } from './admin/dashboard/work-area/work-area.component';
import { ItemDirective } from './admin/dashboard/work-area/item/item.directive';
import { ItemService } from './admin/dashboard/work-area/item/item.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ManageShowsComponent,
    WorkAreaComponent,
    ItemDirective,
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
  entryComponents: [ ManageShowsComponent ],
  providers: [CommandColumnService, EditService, PageService, ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
