import { Component, OnInit,Input } from '@angular/core';
import{UserservicesService} from'../userservices.service';
import{Router,ActivatedRoute,Params}from'@angular/router';
@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  
user:any={};
  constructor(private Userservice:UserservicesService) { }

  ngOnInit() {
  }
createUser()
{
  this.Userservice.createUser(this.user).subscribe(
    data =>{ console.log("created sucess");}
  )
}
}
