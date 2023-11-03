import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getproduct(){
    return this.http.get("http://localhost:3000/product");
  }
  getproductByid(id:any){
    return this.http.get("http://localhost:3000/product/"+id);
  }
  deleteproduct(id:any){
    return this.http.delete("http://localhost:3000/product/"+id);
  }

}
