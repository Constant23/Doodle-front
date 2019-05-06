import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GlobalService} from '../../services/global.service';
import {SondageService} from '../../services/sondage.service';

@Component({
  selector: 'app-participer-detail',
  templateUrl: './participer-detail.component.html',
  styleUrls: ['./participer-detail.component.css']
})
export class ParticiperDetailComponent implements OnInit {

  idDoodle;
  constructor(private activatedroute: ActivatedRoute, private route: Router,
              private globalservice: GlobalService, private sondageService: SondageService) { }

  sondageDetail;

  ngOnInit() {
    this.idDoodle = this.activatedroute.snapshot.paramMap.get('id');
    if (localStorage.getItem('currentUser')) {
      this.globalservice.isUserLoggedIn.next(true);
      this.globalservice.username.next(JSON.parse(localStorage.getItem('currentUser'))['nom'] +
        ' ' + JSON.parse(localStorage.getItem('currentUser'))['prenom']);
    } else {
      this.route.navigate(['login']);
    }
    this.sondageService.sondageDetail(this.idDoodle).subscribe(data => {
      this.sondageDetail = data;
      console.log(this.sondageDetail);
    });
  }

}
