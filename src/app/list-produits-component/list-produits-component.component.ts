import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/Produit';
import {ProduitServiceService} from '../service/service produit/produit-service.service';

@Component({
  selector: 'app-list-produits-component',
  templateUrl: './list-produits-component.component.html',
  styleUrls: ['./list-produits-component.component.css']
})
export class ListProduitsComponentComponent implements OnInit {
  constructor(private produitService:ProduitServiceService ){}
  ListProduit2!:Produit[];
  ngOnInit(): void {
      this.ListProduit2=this.produitService.getAllProducts();
  }
  show=false;
  search='';
  id=0;
  code='';
  libelle='';
  prixUnitaire=0.0;
  tauxTVA=0.0;
  j=-1;
  listProduits:Produit[]=[
    {idProduit:1,code:"P147852P",libelle:"Produit1", prixUnitaire:12.5, tauxTVA:0.02},
    {idProduit:2,code:"P147552P",libelle:"Produit2", prixUnitaire:30, tauxTVA:0.1980},
    {idProduit:3,code:"D14785CC",libelle:"Produit3", prixUnitaire:20, tauxTVA:0.1980},
    {idProduit:4,code:"E147852P",libelle:"Produit4", prixUnitaire:50, tauxTVA:0.1980},
    {idProduit:5,code:"F147852P",libelle:"Produit5", prixUnitaire:70, tauxTVA:0.02},
    ]
    modifiertva(id:any){
      let index=this.listProduits.findIndex((item)=>item.idProduit===id);
      this.listProduits[index].tauxTVA=0.02;
      this.show=true;
      this.j=id;
    }
    submitForm(){
      let item={
        idProduit:this.id,
        code:this.code,
        libelle:this.libelle,
        prixUnitaire:this.prixUnitaire,
        tauxTVA:this.tauxTVA
      }
      this.listProduits.push(item);
      this.id=0;
      this.code='';
      this.libelle='';
      this.prixUnitaire=0.0;
      this.tauxTVA=0.0;
    }

}
