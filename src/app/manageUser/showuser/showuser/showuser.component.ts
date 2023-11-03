import {Component, OnInit} from '@angular/core';
import {UserService} from "../../user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css']
})
export class ShowuserComponent implements OnInit{
  users:any;
id:any;
  constructor(private service:UserService,private router: Router,private route: ActivatedRoute) {
  }
  ngOnInit() {
      this.route.params.subscribe(params => {
          this.id = params['id'];
      });
    this.service.getuserbyid(this.id).subscribe(
      (d)=>{
        this.users=d;
      }
    );

  }

}
