import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AnnonceItemComponent } from './subcomponent/annonces/annonce-item/annonce-item.component';
import { AnnonceService } from 'src/service/annonce.service';
import { AnnonceMockService } from 'src/service/annonce-mock.service';
import { AnnonceListeComponent } from './subcomponent/annonces/annonce-liste/annonce-liste.component';
import { AnnonceDetailsComponent } from './subcomponent/annonces/annonce-details/annonce-details.component';
import { AnnonceAPIService } from 'src/service/annonce-api.service';

@NgModule({
  declarations: [
    AppComponent,
    AnnonceItemComponent,
    AnnonceListeComponent,
    AnnonceDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{ provide: AnnonceService, useClass: AnnonceAPIService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
