import {Component, OnInit} from '@angular/core';
import {UserService} from "../../user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit{
  constructor(private service:UserService,private activatedRoute:ActivatedRoute,private router: Router) {
  }
  ngOnInit() {
    this.service.removeUser(this.activatedRoute.snapshot.params['id']).subscribe(
      ()=>{
        this.router.navigate(['showuser'])
      },
      (err)=>{
        console.log(err.status);
        let status=err.status;
        switch (status){
          case 0 :alert('server');break;
          case 1 : alert('unauthoriz');break;
        }
      }
    )
  }

}
