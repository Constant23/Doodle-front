import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-doodle',
  templateUrl: './add-doodle.component.html',
  styleUrls: ['./add-doodle.component.css']
})
export class AddDoodleComponent implements OnInit {

  typeSondage: string = 'typeSondage1';
  selectedValues: string[] = [];
  value: Date;

  showLieu: boolean = true;
  showDate: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  changeValue(Lieu: boolean, Date: boolean) {
    this.showLieu = Lieu;
    this.showDate = Date;
  }

}
