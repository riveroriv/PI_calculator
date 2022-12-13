import { Component, OnInit } from '@angular/core';
import { MacService } from 'src/app/servicios/mac.service';

@Component({
  selector: 'app-mac',
  templateUrl: './mac.component.html',
  styleUrls: ['./mac.component.css']
})
export class MacComponent implements OnInit {

  info: any = null;

  constructor(
    public macAPI: MacService
  ) { }

  ngOnInit(): void {
  }

  llamarAPI(mac: string){
    if(mac.length >= 12){
      this.macAPI.macvendor(mac).subscribe({
        next: (r) => this.info = r,
        error: (r) => console.log(r)
      });
    }
  }

}
