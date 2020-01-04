import { Categorie } from './enum/categorie.enum';

export class Annonce {

    constructor(guid: string, categorie: Categorie, intitule: string) {
        this.categorie = categorie;
        this.id = guid;
        this.intitule = intitule;
    }

    id: string;
    prix: number;
    date: Date;

    categorie: Categorie;
    auteur: string;
    intitule: string;
    description: string;


    get url() {
        return "/assets/img/annonces/" + this.id.substring(0, 3) + ".png"
    }








}
