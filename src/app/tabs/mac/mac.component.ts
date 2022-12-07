import { Component, OnInit } from '@angular/core';
import { MacService } from 'src/app/servicios/mac.service';

@Component({
  selector: 'app-mac',
  templateUrl: './mac.component.html',
  styleUrls: ['./mac.component.css']
})
export class MacComponent implements OnInit {

  constructor(
    public macAPI: MacService
  ) { }

  ngOnInit(): void {
  }

  llamarAPI(mac: string){
    console.log('hola')
    if(mac.length >= 12){
      this.macAPI.macvendor(mac).subscribe({
        next: (r) => console.warn(r),
        error: (r) => console.log(r)
      });
    }
  }

}
