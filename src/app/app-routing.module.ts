import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProduitsComponentComponent } from './list-produits-component/list-produits-component.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';
import {ShowuserComponent} from "./manageUser/showuser/showuser/showuser.component";
import {DeleteUserComponent} from "./manageUser/DeleteUser/delete-user/delete-user.component";
import {GetproductComponent} from "./main-product/getproduct/getproduct.component";
import {GetproductbyidComponent} from "./main-product/getproductbyid/getproductbyid.component";
import {DeleteproductComponent} from "./main-product/deleteproduct/deleteproduct.component";
import { AdduserComponent } from './manageUser/AddUser/adduser/adduser.component';
import { MainuserComponent } from './mainuser/mainuser.component';

const routes: Routes = [
  {
    path:'produit',component:ListProduitsComponentComponent
  },
  {path:'invoice',component:MainInvoiceComponent},
  //{path:'DetailInvoice/:id/:active',component:InvoiceComponent} Methode avec pathParam
  {path:'DetailInvoice',component:InvoiceComponent},
  {path:'showuser',component:ShowuserComponent},
    {path:'showuser/:id',component:ShowuserComponent},
  {path:'remove/:id',component:DeleteUserComponent},
  {path:'getproduct',component:GetproductComponent},
  {path:'getproductbyid/:id',component:GetproductbyidComponent},
  {path:'deleteproduct/:id',component:DeleteproductComponent},
  {path:'adduser',component:AdduserComponent},
  {path:'mainuser',component:MainuserComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
