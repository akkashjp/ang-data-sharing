import { Component, OnInit ,Input , Output , EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {
  
  childmessage : string ="hi hello";

//  @Input() 
//  test:string;
@Output() messageEvent = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }
  sendMessage(){
    this.messageEvent.emit(this.childmessage)
  }
}
