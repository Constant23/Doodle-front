import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }

  getLogin(username) {
    // post these details to API server return user info if correct
    return this.http.post('/rest/utilisateurs/login', {
      "email": username
    });
  }

  registerUser(nom, prenom, email) {
    // post these details to API server return user info if correct
    return this.http.post('/rest/utilisateurs/add', {
      "nom": nom,
      "prenom": prenom,
      "email": email
    });
  }

  /*getUtilisateur() {
    return this.http.get(this.urlUtilisateur);
  }*/
}
