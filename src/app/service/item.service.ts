import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Item } from "../model/Item";
import { map, Observable } from "rxjs";
import { environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private readonly BACKEND_URL = environment.backendUrl + '/items';

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.BACKEND_URL)
      .pipe(map(item => item.sort((item1, item2) => item1.name.localeCompare((item2.name)))));
  }

  getItem(id: string): Observable<Item> {
    return this.http.get<Item>(this.BACKEND_URL + '/' + id);
  }

  addItem(dto: any): Observable<any> {
    console.log('trying to add ');
    console.log(dto);
    return this.http.post(this.BACKEND_URL, dto);
  }

  updateItem(dto: any, id: string): Observable<any> {
    return this.http.put(this.BACKEND_URL + '/' + id, dto);
  }

}
