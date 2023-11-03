import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit{
  constructor(private http:HttpClient,private router:ActivatedRoute,private service:ProductService) {
  }
  id:any;
  ngOnInit() {
    this.router.params.subscribe(params=>
    {
      this.id=params['id'];
    })
    this.service.deleteproduct(this.id).subscribe();
  }

}
