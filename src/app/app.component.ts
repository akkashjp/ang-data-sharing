import { Component , Input , ViewChild , AfterViewInit} from '@angular/core';
import { ChildComponent} from './child/child.component';
// import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
// import { ViewChild } from '@angular/core/src/metadata/di';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent implements AfterViewInit {
//   message:string;
// @ViewChild(ChildComponent) child;
// constructor(){

// }


// ngAfterViewInit(){
//   this.message=this.child.childmessage;
//  console.log(this.message);
//   }

  
// }
export class AppComponent {
  constructor(){

  }
  message:string;
  receiveMessage($event){
    this.message = $event;
    console.log("???",this.message);
  }
}