import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{UserservicesService} from'./userservices.service'
import{ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserformComponent } from './userform/userform.component';
import{routing}from'./app.routing'
import{FormsModule}from'@angular/forms';
import { ChildComponent } from './child/child.component';
@NgModule({
  declarations: [
    AppComponent,

    HttpclientComponent,

    UserlistComponent,

    UserformComponent,

    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
routing,
  ],
  providers: [UserservicesService],
  bootstrap: [AppComponent]

})
export class AppModule { }
