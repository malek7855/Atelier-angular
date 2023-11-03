import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Users } from 'src/app/models/user';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  user =new Users();
showuser(f:any){
  console.log(f);
}
}
