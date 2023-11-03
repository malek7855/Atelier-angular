import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-getproductbyid',
  templateUrl: './getproductbyid.component.html',
  styleUrls: ['./getproductbyid.component.css']
})
export class GetproductbyidComponent implements OnInit{
  id:any;
  product:any;
  constructor(private service:ProductService,private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id=params['id'];
    })
    this.service.getproductByid(this.id).subscribe(
      (d)=>{
        this.product=d;
        console.log(d);
      }
    )
  }


}
