import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Item } from "../model/Item";
import { map, Observable } from "rxjs";
import { environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private backendUrl = environment.backendUrl + '/items';

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.backendUrl)
      .pipe(map(item => item.sort((item1, item2) => item1.name.localeCompare((item2.name)))));
  }

  getItem(id: string): Observable<Item> {
    return this.http.get<Item>(this.backendUrl + '/' + id);
  }

  addItem(dto: any) {
    console.log('trying to add ');
    console.log(dto);
    return this.http.post(this.backendUrl, dto);
  }

  updateItem(dto: any, id: string) {
    return this.http.put(this.backendUrl + '/' + id, dto);
  }

}
