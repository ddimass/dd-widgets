import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Strategy } from './strategy';
import { STRATS } from './mock-strats';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StratService {

	private heroesUrl = 'http://secure.clawshorns.local/api/strategies?token=f984357eab59537962aab2cc190a7fe3&out_type=json';

  constructor( private http: HttpClient ) { 
  }

  getStrats(): Observable<Strategy[]>  {
 
  return this.http.get<Strategy[]>(this.heroesUrl);
	}

}
