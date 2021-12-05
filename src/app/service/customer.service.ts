import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { Customer } from "../model/Customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private readonly BACKEND_URL = environment.backendUrl + '/customers';

  constructor(private http: HttpClient) {
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.BACKEND_URL)
      .pipe(map(customer => customer.sort((customer1, customer2) => customer1.firstname.localeCompare((customer2.firstname)))));
  }

  getCustomer(id: string): Observable<Customer> {
    return this.http.get<Customer>(this.BACKEND_URL + '/' + id);
  }

  addCustomer(dto: any): Observable<any> {
    console.log('trying to add ');
    console.log(dto);
    return this.http.post(this.BACKEND_URL, dto);
  }

  updateCustomer(dto: any, id: string): Observable<any> {
    return this.http.put(this.BACKEND_URL + '/' + id, dto);
  }

}
