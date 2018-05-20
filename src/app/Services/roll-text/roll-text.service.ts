import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RollText } from '../../Models/RollText';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';


@Injectable()
export class RollTextService {

  constructor(private http: HttpClient) { }

  getRollTextsForDate(date: Date): Observable<RollText[]> {
    console.log(date.toISOString().substring(0, 10));
    return this.http.get<RollText[]>('http://localhost:3000/api/RollTexts?filter=' +
    '{"where":{"and":[{"startDate":{"lt":"'
     +  date.toISOString().substring(0, 10)
     + 'T12:00:01.000Z"}},{"endDate":{"gt":"'
     +  date.toISOString().substring(0, 10)
     + 'T11:59:59.000Z"}}]}}')
      .map((data: RollText[]) => {
        return data;
      })
      .catch((error: any) => {
        console.log(error);
        return Observable.throw(new Error(error));
      });
  }
}
