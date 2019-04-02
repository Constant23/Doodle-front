import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }

  urlUtilisateur = 'http://localhost:4200/rest/utilisateurs';
  urlUtilisateurByIdName = 'http://localhost:8181/rest/utilisateurs/';

  getUtilisateur() {
    return this.http.get(this.urlUtilisateur);
  }
}
