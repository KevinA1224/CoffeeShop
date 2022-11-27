import { Injectable } from '@angular/core';
import { OrderItem } from './OrderItem';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  addOrder(order: OrderItem): Observable<OrderItem> {
    return this.http.post<OrderItem>(this.ordersUrl, order, this.httpOptions)
    .pipe(
      catchError(this.handleError<OrderItem>('addOrder'))
    );
  }

  getOrderItems(): Observable<OrderItem[]> {
    return this,this.http.get<OrderItem[]>(this.ordersUrl)
    .pipe(
      catchError(this.handleError<OrderItem[]>('getOrderItems', []))
    );
  }

  updateOrder(order: OrderItem): Observable<any> {
    return this.http.put(this.ordersUrl, order, this.httpOptions)
    .pipe(
      catchError(this.handleError<any>('updateHero'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private ordersUrl = 'api/orders';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }
}
