import { Component, OnInit } from '@angular/core';
import { AnnonceService } from 'src/service/annonce.service';
import { Annonce } from 'src/model/annonce';
import { async } from '@angular/core/testing';
import { Categorie } from 'src/model/enum/categorie.enum';

@Component({
  selector: 'annonce-liste',
  templateUrl: './annonce-liste.component.html',
  styleUrls: ['./annonce-liste.component.scss']
})
export class AnnonceListeComponent implements OnInit {

  constructor(private service: AnnonceService) {


    this.categories = Object.keys(Categorie).map(key => Categorie[key]).filter(value => typeof value === 'string') as string[];
    this.annoncesFiltrees = this.annonces;
  }

  annonces: Annonce[] = [];
  annoncesFiltrees: Annonce[];
  categories: string[] = [];


  private _selectedCategorie: Categorie;

  public get selectedCategorie(): Categorie {
    return this._selectedCategorie;
  }
  public set selectedCategorie(value: Categorie) {
    this._selectedCategorie = value;

    this.annoncesFiltrees = this.annonces.filter(
      (annonce) => { return annonce.categorie === this.selectedCategorie })


  }


  ngOnInit() {

    this.service.getAnnonces().then((dto) => {
      this.annonces = dto;
      this.annoncesFiltrees = dto;
    });



  }



  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }



}
