import { Injectable } from '@angular/core';
import { Annonce } from 'src/model/annonce';

@Injectable({
  providedIn: 'root'
})
export abstract class AnnonceService {

  constructor() { }

  abstract getAnnonces() : Promise<Annonce[]>;
}
