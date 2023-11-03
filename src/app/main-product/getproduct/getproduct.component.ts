import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../product.service";
import {Produit} from "../../models/Produit";

@Component({
  selector: 'app-getproduct',
  templateUrl: './getproduct.component.html',
  styleUrls: ['./getproduct.component.css']
})
export class GetproductComponent implements OnInit{
  constructor(private activateRoute:ActivatedRoute,private service:ProductService) {
  }
products:any;
  ngOnInit() {

    this.service.getproduct().subscribe(
      (d)=>{
        this.products=d;
        console.log(d);
      }
    )
  }

}
