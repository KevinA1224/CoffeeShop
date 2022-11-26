import { Injectable } from '@angular/core';
import { MenuItem } from './MenuItem';
// import { MENUITEMS } from './mock-menu-items';
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
      tap(_ => this.log('fetched items')),
      catchError(this.handleError<MenuItem[]>('getMenuItems', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private menuUrl = 'api/items';

  private log(message: string) {
    this.messageService.add(`MenuItemService: ${message}`);
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
}


