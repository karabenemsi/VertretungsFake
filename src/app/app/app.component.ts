import { Component, OnInit } from '@angular/core';
import { Substitute } from '../Models/Substitute';
import { SubstituteService } from '../Services/substitute/substitute.service';
import { RollTextService } from '../Services/roll-text/roll-text.service';
import { RollText } from '../Models/RollText';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'vf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  now = new Date()
  todayDate = new Date(2018, 5, 29);
  tomorrowDate = new Date(2018, 6, 2);
  today: Substitute[];
  tomorrow: Substitute[];
  rollText: RollText[];
  pages: number[] = [];

  // Config Vars
  breakIndex: number = 12;
  pageDuration: number = 10000; //Milliseconds

  constructor(private substituteService: SubstituteService,
    private rollTextService: RollTextService) { }

  ngOnInit(): void {
    this.substituteService.getSubstitutesForDate(this.todayDate)
      .subscribe(s => {
        this.today = s;
        this.today.sort((a, b) => {
          if (a.class == b.class) {
            return (a.hour < b.hour) ? -1 : (a.hour > b.hour) ? 1 : 0;
          }
          else {
            return (a.class > b.class || a.class.length > b.class.length) ? 1 : -1;
          }
        });
        this.fillPages(this.today.length);
      });
    this.substituteService.getSubstitutesForDate(this.tomorrowDate)
      .subscribe(s => {
        this.tomorrow = s;
        this.tomorrow.sort((a, b) => {
          if (a.class == b.class) {
            return (a.hour < b.hour) ? -1 : (a.hour > b.hour) ? 1 : 0;
          }
          else {
            return (a.class > b.class || a.class.length > b.class.length) ? 1 : -1;
          }
        });
        this.fillPages(this.tomorrow.length);
      });
    this.rollTextService.getRollTextsForDate(this.todayDate).subscribe(r => { this.rollText = r;});
    let sub = Observable.interval(this.pageDuration)
      .subscribe((val) => { this.changePage( val % this.pages.length);});
  }


  fillPages(arrayLength: number): void {
    console.log("Length: ", arrayLength);
    let possiblePages = Math.ceil(arrayLength / this.breakIndex);
    console.log("P-Pages: ", possiblePages);
    if (possiblePages > this.pages.length) {
      for(let i = 0; i < possiblePages && this.pages.length < possiblePages; i++){
        this.pages.push(i);
      }
    }
    console.log("Pages: ", this.pages);
  }

  changePage(input: number){
    document.getElementsByClassName('visible')[0].classList.add('invisible');
    document.getElementsByClassName('visible')[0].classList.remove('visible');
    document.getElementsByClassName('page-' + input)[0].classList.remove('invisible');
    document.getElementsByClassName('page-' + input)[0].classList.add('visible');
  }
}
