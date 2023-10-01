import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUserComponentComponent } from './list-user-component/list-user-component.component';
import { ListProduitsComponentComponent } from './list-produits-component/list-produits-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ListUserComponentComponent,
    ListProduitsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
