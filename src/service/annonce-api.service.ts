import { Injectable } from '@angular/core';
import { AnnonceService } from './annonce.service';
import { Annonce } from 'src/model/annonce';
import { HttpClient } from '@angular/common/http';
import { RecursiveTemplateAstVisitor } from '@angular/compiler';
import { Categorie } from 'src/model/enum/categorie.enum';

@Injectable({
  providedIn: 'root'
})

export class AnnonceAPIService extends AnnonceService {

  getAnnonces(): Promise<Annonce[]> {


    return (this.httpClient.get("http://localhost:54906/odata/Annonce_DAO").toPromise()
      .then(getResult => {
        const annonces = getResult["value"].map(dto => {

          let categorie: Categorie;

          switch (dto.Categorie) {
            case "Immobilier": categorie = Categorie.Immobilier; break;
            case "Animaux": categorie = Categorie.Animaux; break;
            case "HT": categorie = Categorie.Hightech; break;
            case "Meubles": categorie = Categorie.Meubles; break;
            case "Vehicules": categorie = Categorie.Vehicules; break;
            default: categorie = Categorie.Meubles; // categorie par defaut 
          }

          const annonce = new Annonce(dto.Id, categorie, dto.Intitule); // Annonce(string id, Categorie categorie, string intitulé)
          annonce.auteur = dto.Auteur;
          annonce.date = new Date(dto.Date);
          annonce.prix = dto.Prix;
          annonce.description = dto.Description;

          return annonce;
        })

        return annonces;
      }


      )



    )
  }

  constructor(private httpClient: HttpClient) {
    super();


  }
}
