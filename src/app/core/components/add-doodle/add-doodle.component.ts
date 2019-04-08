import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';
import {GlobalService} from '../../services/global.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-doodle',
  templateUrl: './add-doodle.component.html',
  styleUrls: ['./add-doodle.component.css']
})
export class AddDoodleComponent implements OnInit {

  typeSondage: string = 'typeSondage1';
  selectedValues: string[] = [];
  selectedValues2: string[] = [];
  date3: Date;
  date8: Date;

  showLieu: boolean = true;
  showDate: boolean = false;

  aUnDejLieu: string[] = [];
  txtlieu: string = '';

  aUnDejDate: string[] = [];
  Heurepropose: string = '';
  datepropose: string = '';

  lieuListe = []

  dateListe = []


  constructor(private globalservice: GlobalService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.globalservice.isUserLoggedIn.next(true);
      this.globalservice.username.next(JSON.parse(localStorage.getItem('currentUser'))['nom'] + ' ' + JSON.parse(localStorage.getItem('currentUser'))['prenom']);
    } else {
      this.router.navigate(['login']);
    }
  }

  changeValue( Lieu: boolean, Date: boolean) {
    this.showLieu = Lieu;
    this.showDate = Date;
  }

  add_lieu() {
    this.lieuListe.push({
      lieu: this.txtlieu,
      dejeuner: Boolean(this.aUnDejLieu.length)
    });
  }

  remove_lieu(txtlieu) {
    console.log(txtlieu);
    const index: number = this.lieuListe.indexOf(txtlieu);
    console.log(index);
    if (index === -1) {
      this.lieuListe.splice(index, 1);
    }
  }

  add_date() {
    var d = new Date(this.datepropose);
    var datePipe = new DatePipe('en-FR');
    this.dateListe.push({
      daterelle: this.datepropose,
      date:  datePipe.transform(d, 'dd/MM/yyyy') + ' : ' + datePipe.transform(this.Heurepropose, 'HH:mm') ,
      dejeuner: Boolean(this.aUnDejDate.length)
    });
  }

  remove_date(txt) {
    console.log(txt);
    const index: number = this.dateListe.indexOf(txt);
    console.log(index);
    if (index === -1) {
      this.dateListe.splice(index, 1);
    }
  }
}
