import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { MenuModule, SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { CommandColumnService, EditService, GridModule, PageService} from '@syncfusion/ej2-angular-grids';
import { ButtonModule, CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { TextBoxModule, NumericTextBoxModule, UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { InPlaceEditorModule } from '@syncfusion/ej2-angular-inplace-editor';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { DatePickerModule, TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ToastModule } from '@syncfusion/ej2-angular-notifications';

import { WorkAreaComponent } from './admin/dashboard/work-area/work-area.component';
import { ItemDirective } from './admin/dashboard/work-area/item/item.directive';
import { ItemService } from './admin/dashboard/work-area/item/item.service';
import { SimpleTextComponent } from './admin/dashboard/work-area/simple-text/simple-text.component';
import { SimpleListComponent } from './admin/dashboard/work-area/simple-list/simple-list.component';
import { ShowCreatorComponent } from './admin/dashboard/work-area/show-creator/show-creator.component';
import { ManageShowsComponent } from './admin/dashboard/work-area/manage-shows/manage-shows.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ManageShowsComponent,
    WorkAreaComponent,
    ItemDirective,
    SimpleTextComponent,
    SimpleListComponent,
    ShowCreatorComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'admin/dashboard', component: DashboardComponent},
      {path: 'login', component: LoginComponent},
      {path: 'admin/dashboard/manage_shows', component: ManageShowsComponent},
      {path: 'admin/dashboard/create_show', component: ShowCreatorComponent}
    ]),
    ReactiveFormsModule,
    HttpClientModule,
    MenuModule,
    CommonModule,
    SidebarModule,
    GridModule,
    InPlaceEditorModule,
    DropDownListModule,
    FormsModule,
    ButtonModule,
    NumericTextBoxModule,
    DialogModule,
    DatePickerModule,
    TimePickerModule,
    ToastModule,
    TextBoxModule,
    UploaderModule,
    CheckBoxModule
  ],
  entryComponents: [ ManageShowsComponent ],
  providers: [CommandColumnService, EditService, PageService, ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
