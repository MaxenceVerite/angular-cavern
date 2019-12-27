import { Component, OnInit, Input } from '@angular/core';
import { AnnonceService } from 'src/service/annonce.service';
import { Annonce } from 'src/model/annonce';

@Component({
  selector: 'annonce-details',
  templateUrl: './annonce-details.component.html',
  styleUrls: ['./annonce-details.component.scss']
})
export class AnnonceDetailsComponent implements OnInit {

  constructor(service: AnnonceService) {


  }


  @Input()
  annonce: Annonce;

  ngOnInit() {
  }

}
