import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MacService {

  constructor(
    private http:HttpClient
    ) { }

  macvendor(mac: string): Observable<any>{
    return this.http.get<any>("https://api.macaddress.io/v1?apiKey=at_zSAhdBg8shhKGgvyWCJgx8CL5G7N3&output=json&search="+mac);
  }
}
