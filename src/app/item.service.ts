import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

export interface Item{
  id: number;
  name: String;
}


@Injectable({
  providedIn: 'root'
})


export class ItemService {

  private itemsUrl = 'api/items';

  constructor(private http: HttpClient) { }


  getItems(): Observable<Item[]>{
    return this.http.get<Item[]>(this.itemsUrl)
    .pipe(
      catchError(this.handleError<Item[]>('getItems',[]))
    )
  }

  getItem(id:number):Observable<Item>{
    const url = `${this.itemsUrl}/${id}`;
    return this.http.get<Item>(url).pipe(
      catchError(this.handleError<Item>(`getItem id=${id}`))
    )
  }

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.itemsUrl, item).pipe(
      catchError(this.handleError<Item>('addItem'))
    );
  }


  updateItem(item: Item): Observable<any> {
    return this.http.put(this.itemsUrl, item).pipe(
      catchError(this.handleError<any>('updateItem'))
    );
  }

  deleteItem(id:number): Observable<Item>{
    const url = `${this.itemsUrl}/${id}`;
    return this.http.delete<Item>(url).pipe(
      catchError(this.handleError<Item>('updateItem'))
    )
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
