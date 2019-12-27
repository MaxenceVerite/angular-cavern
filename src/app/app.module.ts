import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AnnonceItemComponent } from './subcomponent/annonces/annonce-item/annonce-item.component';
import { AnnonceService } from 'src/service/annonce.service';
import { AnnonceMockService } from 'src/service/annonce-mock.service';
import { AnnonceListeComponent } from './subcomponent/annonces/annonce-liste/annonce-liste.component';
import { AnnonceDetailsComponent } from './subcomponent/annonces/annonce-details/annonce-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnonceItemComponent,
    AnnonceListeComponent,
    AnnonceDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [{ provide: AnnonceService, useClass: AnnonceMockService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
