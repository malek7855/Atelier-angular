import { Component, Inject } from '@angular/core';
import { Users } from '../models/user';
import { UserService } from '../manageUser/user.service';


@Component({
  selector: 'app-formuser',
  templateUrl: './formuser.component.html',
  styleUrls: ['./formuser.component.css']
})
export class FormuserComponent {
  constructor(private service:UserService){}
  user =new Users();
  deafult="custome";
  showuser(f:any){
console.log(f);
  }
  saveUser(u:Users){
    this.service.adduser(u).subscribe(
      ()=>{
        alert('added');
      }
    );
  }

}
