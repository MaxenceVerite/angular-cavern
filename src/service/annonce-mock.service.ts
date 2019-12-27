import { Injectable } from '@angular/core';
import { AnnonceService } from './annonce.service';
import { Annonce } from 'src/model/annonce';
import { Categorie } from 'src/model/enum/categorie.enum';

@Injectable({
  providedIn: 'root'
})
export class AnnonceMockService extends AnnonceService {

  constructor() {
    super();

    let i = 0;

    var an1 = new Annonce(i.toString(), Categorie.Hightech, "Ordinateur neuf 11 pouces 58 giga");
    an1.auteur = "Mouhloud Dupont";
    an1.date = new Date(3600 * 1000 * i);
    an1.description = "Une belle bête pour le gamingue"
    an1.prix = 500;

    this.mockAnnonce.push(an1);

    i++;

    var an2 = new Annonce(i.toString(), Categorie.Immobilier, "T6 à negocier sans plus attendre");
    an2.auteur = "Isabelle Nanti";
    an2.date = new Date(3600 * 1000 * i);
    an2.description = "Beau t6 vue sur la mer à Lyon. Propre, meublé et bien aménager, idéal pour couple de polonais"
    an2.prix = 506000;

    this.mockAnnonce.push(an2);

    i++;

    var an3 = new Annonce(i.toString(), Categorie.Immobilier, "Chambre étudiante 4m2. Offre en or à saisir");
    an3.auteur = "Jean Paul Drihard";
    an3.date = new Date(3600 * 1000 * i);
    an3.description = "Espace à vivre charmant sur Paris. Facile à meubler il conviendra à un étudiant seul ou en coloc."
    an3.prix = 400000;

    this.mockAnnonce.push(an3);

    i++;

    var an4 = new Annonce(i.toString(), Categorie.Animaux, "Crocodile Albinos");
    an4.auteur = "Jean Paul Drihard";
    an4.date = new Date(3600 * 1000 * i);
    an4.description = "Chat à donner. Nous ne le supportons plus. "
    an4.prix = 0;

    this.mockAnnonce.push(an4);

    i++;

    var an5 = new Annonce(i.toString(), Categorie.Hightech, "Souris ordinateur fonctionnelle");
    an5.auteur = "Martin";
    an5.date = new Date(3600 * 1000 * i);
    an5.description = "Une souris d'ordinateurs. Je fais une longue description pour tester la taille des cartes et mettre en évidence les bugs graphiques de mon site."
    an5.prix = 13;

    this.mockAnnonce.push(an5);

    i++;

    var an6 = new Annonce(i.toString(), Categorie.Meubles, "Canapé d'angle pas cher");
    an6.auteur = "Martin";
    an6.date = new Date(3600 * 1000 * i);
    an6.description = "Je me débarasse de mon canapé d'angle car ma nouvelle maison n'a pas d'angles. Je ne peux donc plus le mettre dans un coin et ça me dérange."
    an6.prix = 5;

    this.mockAnnonce.push(an6);

  }


  mockAnnonce: Annonce[] = [];

  getAnnonces(): Promise<Annonce[]> {

    return Promise.resolve(this.mockAnnonce);

  }


}
