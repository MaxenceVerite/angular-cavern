import { Component, OnInit, Input } from '@angular/core';
import { AnnonceService } from 'src/service/annonce.service';
import { Annonce } from 'src/model/annonce';

@Component({
  selector: 'annonce-item',
  templateUrl: './annonce-item.component.html',
  styleUrls: ['./annonce-item.component.scss']
})
export class AnnonceItemComponent implements OnInit {

  constructor(service: AnnonceService) { 
    
  }


  @Input()
  annonce : Annonce;

  @Input()
  selectedAnnonce :  Annonce;

  ngOnInit() {

  }

}
