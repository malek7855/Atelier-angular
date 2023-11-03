import { Injectable } from '@angular/core';
import { Produit } from 'src/app/models/Produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {
  Products:Produit[]=[
    { idProduit: 1, code: "127",libelle: "PC", prixUnitaire : 2000, tauxTVA :10},
{ idProduit: 2, code: "128",libelle: "TV", prixUnitaire : 1000, tauxTVA :20},
{ idProduit: 3, code: "128",libelle: "Table", prixUnitaire : 200, tauxTVA :30},
  ];

  constructor() { }
  getAllProducts():Produit[]{
return this.Products;
  }
}
