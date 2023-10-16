import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProduitsComponentComponent } from './list-produits-component/list-produits-component.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';

const routes: Routes = [
  {
    path:'produit',component:ListProduitsComponentComponent
  },
  {path:'invoice',component:MainInvoiceComponent},
  //{path:'DetailInvoice/:id/:active',component:InvoiceComponent} Methode avec pathParam
  {path:'DetailInvoice',component:InvoiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
