import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MacService {

  constructor(
    private http:HttpClient
    ) { }

  macvendor(mac: string){
    return this.http.get('https://api.macvendors.com/'+mac);
  }
}
