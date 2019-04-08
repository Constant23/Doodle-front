import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';
import {GlobalService} from '../../services/global.service';
import {Router} from '@angular/router';
import {SondageService} from '../../services/sondage.service';
import {Message} from 'primeng/api';

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
  intitule: string = '';
  resume: string = '';

  msgs: Message[] = [];


  constructor(private globalservice: GlobalService, private router: Router, private sondageService: SondageService) { }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.globalservice.isUserLoggedIn.next(true);
      this.globalservice.username.next(JSON.parse(localStorage.getItem('currentUser'))['nom'] +
        ' ' + JSON.parse(localStorage.getItem('currentUser'))['prenom']);
    } else {
      this.router.navigate(['login']);
    }
  }

  sondageAdd(event) {
    event.preventDefault()
    const target = event.target
    const intitule = target.querySelector('#intitule').value;
    const resume = target.querySelector('#resume').value;
    const idResponsable = JSON.parse(localStorage.getItem('currentUser'))['id'];

    if (this.typeSondage === 'typeSondage2') {
      this.sondageService.addSondageDate(idResponsable, intitule, resume, this.dateListe).subscribe(data => {
        if (data != null) {
          this.router.navigate(['adddoodle']);
          this.lieuListe = [];
          this.dateListe = [];
          this.resume = '';
          this.intitule = '';
          this.show('success','Sondage enregisté avec succes');
        } else {
          this.router.navigate(['logout']);
        }
      });
    } else if (this.typeSondage === 'typeSondage1') {
      this.sondageService.addSondageLieu(idResponsable, intitule, resume, this.lieuListe).subscribe(data => {
        if (data != null) {
          this.router.navigate(['adddoodle']);
          this.lieuListe = [];
          this.dateListe = [];
          this.resume = '';
          this.intitule = '';
          this.show('success','Sondage enregisté avec succes');
        } else {
          this.router.navigate(['logout']);
        }
      });
    }
  }

  changeValue( Lieu: boolean, Date: boolean) {
    this.showLieu = Lieu;
    this.showDate = Date;
  }

  add_lieu() {
    this.lieuListe.push({
      lieu: this.txtlieu,
      aUnDejeuner: Boolean(this.aUnDejLieu.length),
      estValider: false
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
      date:  datePipe.transform(d, 'dd-MM-yyyy') + ' ' + datePipe.transform(this.Heurepropose, 'HH:mm:00') ,
      aUnDejeuner: Boolean(this.aUnDejDate.length),
      estValider: false

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

  show(type,message) {
    this.msgs.push({severity:type, summary:message, detail:'Doodle'});
  }

  hide() {
    this.msgs = [];
  }
}
