import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SondageService {

  constructor(private http: HttpClient) { }

  addSondageDate(idResponsable, intitule, resume, dateListe) {
    return this.http.post('/rest/sondage/addSondageDate', {
      "idResponsable": idResponsable,
      "intitule": intitule,
      "resume": resume,
      "mesPropositions": dateListe
    });
  }

  addSondageLieu(idResponsable, intitule, resume, lieuListe) {
    return this.http.post('/rest/sondage/addSondageLieu', {
      "idResponsable": idResponsable,
      "intitule": intitule,
      "resume": resume,
      "mesPropositions": lieuListe
    });
  }

  listMesSondage(idresponsable) {
    return this.http.get('/rest/sondage/messondage/' + idresponsable);
  }

  sondageDetail(idSondage) {
    return this.http.get('/rest/sondage/' + idSondage);
  }
}
