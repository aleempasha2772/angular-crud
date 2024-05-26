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

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
