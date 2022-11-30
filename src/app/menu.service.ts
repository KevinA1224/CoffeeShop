import { Injectable } from '@angular/core';
import { MenuItem } from './MenuItem';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  getMenuItems(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(this.menuUrl)
    .pipe(
      catchError(this.handleError<MenuItem[]>('getMenuItems', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error);
  
      return of(result as T);
    };
  }

  private menuUrl = 'api/items';

  constructor(private http: HttpClient) { }

}


