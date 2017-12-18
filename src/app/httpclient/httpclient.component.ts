import { Component, OnInit } from '@angular/core';
import{HttpClient}from'@angular/common/http';

@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css']
})
export class HttpclientComponent implements OnInit {
  

  constructor( private http:HttpClient) { 
   
  }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data=>
  {
    console.log(data);
  });
  }


}
