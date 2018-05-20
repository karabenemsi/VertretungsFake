import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Substitute } from '../../Models/Substitute';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';


@Injectable()
export class SubstituteService {

  constructor(private http: HttpClient) {}

  getSubstitutesForDate(date: Date): Observable<Substitute[]> {
    return this.http.get<Substitute[]>('http://localhost:3000/api/Substitutes?filter={"where":{"date":"' +
      date.toISOString().substring(0,10) +
      'T12:00:00.000Z"},"order":"class"}')
      .map((data: Substitute[]) => {
        return data;
      })
      .catch((error: any) => {
        console.log(error);
        return Observable.throw(new Error(error));
      });
  }
}


