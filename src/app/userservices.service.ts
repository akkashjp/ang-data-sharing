import { Injectable } from '@angular/core';
import{UserformComponent} from'./userform/userform.component';
import{HttpClient}from'@angular/common/http';
@Injectable()
export class UserservicesService {

  constructor(private http:HttpClient) { 
    
  }
createUser(userData){
  return this.http.post('http://localhost:3000/user',userData);
}
}
