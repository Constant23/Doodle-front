import { Component, OnInit } from '@angular/core';
import {UtilisateurService} from '../../services/utilisateur.service';

@Component({
  selector: 'app-mes-doodle',
  templateUrl: './mes-doodle.component.html',
  styleUrls: ['./mes-doodle.component.css']
})
export class MesDoodleComponent implements OnInit {

  constructor(private utilisateurService: UtilisateurService) { this.initUser(); }

  ngOnInit() {
  }

  initUser() {

    this.utilisateurService.getUtilisateur()
      .subscribe((data) => {
        /* tslint:disable:no-string-literal
        this.pokemonListes = data['results'];*/
        console.log(data);
      });
  }
}
