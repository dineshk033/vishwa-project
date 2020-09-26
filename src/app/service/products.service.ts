import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as data from '../model/data-product.json';
import { find } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  getAllLaptop(): Observable<any> {
    return of((data as any).default);
  }
  getProductById(id): Observable<any> {
    return of((data as any).default).pipe(find((data) => data.name === id));
  }
}
