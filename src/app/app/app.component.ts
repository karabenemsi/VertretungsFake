import { Component } from '@angular/core';

@Component({
  selector: 'vf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  date = new Date();

  today = [
        {
          rowtype:'row',
          date: new Date(2018,5,10),
          type: 'Entfall',
          hour: '1',
          subject: 'F',
          class: '8b',
          repre: 'Ku',
          teacher: 'Ku',
          room: '--',
          text: ''
        },
        {
          date: new Date(2018, 5, 10),
          rowtype:'row',
          type: 'Entfall',
          hour: '1',
          subject: 'F',
          class: '8b',
          repre: 'Ku',
          teacher: 'Ku',
          room: '--',
          text: ''
        },
        {
          date: new Date(2018, 5, 11),
          rowtype:'row',
          type: 'Vertretung',
          hour: '1',
          subject: 'F',
          class: '8d',
          repre: 'Ku',
          teacher: 'Ku',
          room: 'B2.5',
          text: 'Klausur findet statt'
        }
      ];


    }
