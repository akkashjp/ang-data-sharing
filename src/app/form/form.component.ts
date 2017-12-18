import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
user:FormGroup;
  constructor() { }

  ngOnInit() {
    this.user=new FormGroup({
      name:new FormControl('',[Validators.required,Validators.minLength(10)]),
      acount : new FormGroup({
        email:new FormControl('',Validators.required),
        confirm: new FormControl('',Validators.required)
      })
        });
}
}
export interface user{
  name:string;  
  account:{
    email:string;
    confirm:string;
  }
}