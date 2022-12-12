import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pi_calculator';

  small: boolean = false;

  public getScreenWidth: any;
  public getScreenHeight: any;

ngOnInit() {
  this.onWindowResize();
}

@HostListener('window:resize', ['$event'])
onWindowResize() {
  this.getScreenWidth = window.innerWidth;
  this.getScreenHeight = window.innerHeight;
  this.isSmall();
}
isSmall(){
  if(this.getScreenWidth < 700){
    this.small = true;
  } else {
    this.small = false;
  }
}
}
