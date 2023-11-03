import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUserComponentComponent } from './list-user-component/list-user-component.component';
import { ListProduitsComponentComponent } from './list-produits-component/list-produits-component.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { C1Component } from './c1/c1.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceComponent } from './invoice/invoice.component';
import {HttpClientModule} from "@angular/common/http";
import { ShowuserComponent } from './manageUser/showuser/showuser/showuser.component';
import { DeleteUserComponent } from './manageUser/DeleteUser/delete-user/delete-user.component';
import { GetproductComponent } from './main-product/getproduct/getproduct.component';
import { GetproductbyidComponent } from './main-product/getproductbyid/getproductbyid.component';
import { DeleteproductComponent } from './main-product/deleteproduct/deleteproduct.component';
import { AdduserComponent } from './manageUser/AddUser/adduser/adduser.component';
import { FormuserComponent } from './formuser/formuser.component';
import { MainuserComponent } from './mainuser/mainuser.component';


@NgModule({
  declarations: [
    AppComponent,
    ListUserComponentComponent,
    ListProduitsComponentComponent,
    NavComponent,
    FooterComponent,
    C1Component,
    MainInvoiceComponent,
    InvoiceListComponent,
    InvoiceComponent,
    ShowuserComponent,
    DeleteUserComponent,
    GetproductComponent,
    GetproductbyidComponent,
    DeleteproductComponent,
    AdduserComponent,
    FormuserComponent,
    MainuserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
