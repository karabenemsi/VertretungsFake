import {Component, OnInit} from '@angular/core';
import {Substitute} from '../Models/Substitute';
import {SubstituteService} from '../Services/substitute/substitute.service';
import { RollTextService } from '../Services/roll-text/roll-text.service';
import { RollText } from '../Models/RollText';

@Component({
  selector: 'vf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  now = new Date()
  todayDate = new Date(this.now.getFullYear(), this.now.getMonth(), this.now.getDate());
  tomorrowDate = new Date(this.todayDate.getFullYear(), this.todayDate.getMonth(), this.todayDate.getDate() + 3);
  today: Substitute[];
  tomorrow: Substitute[];
  rollText: RollText[];

  constructor(private substituteService: SubstituteService,
              private rollTextService: RollTextService) {}

  ngOnInit(): void {
    console.log(this.todayDate);
    console.log(this.tomorrowDate);
    this.substituteService.getSubstitutesForDate(this.todayDate).subscribe(s => {this.today = s;});
    this.substituteService.getSubstitutesForDate(this.tomorrowDate).subscribe(s => {this.tomorrow = s; });
    this.rollTextService.getRollTextsForDate(this.todayDate).subscribe(r => {this.rollText = r;console.table(this.rollText);});

  }
 }
