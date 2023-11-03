import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  geruserList(){
    return this.http.get("http://localhost:3000/users");
  }
  getuserbyid(id:any){
    return this.http.get("http://localhost:3000/users/"+id);
  }
  removeUser(id:any){
return this.http.delete("http://localhost:3000/users/"+id);
  }
  adduser(user:any){
    return this.http.post("http://localhost:3000/users/",user);
  }
}
