import { Component,ElementRef,HostListener } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { ScrollToService } from 'ng2-scroll-to-el';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent{
  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    this.getposition();
  }
  position:number =0;

  constructor(private router:Router, private scrollService: ScrollToService, private er: ElementRef) { }
  activeElement:string="#slider";

  navigate(element:string, duration:number, offset:number ){
      this.scrollService.scrollTo(element, duration, offset);
      this.getposition();
  }

  getposition(){
    let  pos = -1*(this.er.nativeElement.getBoundingClientRect().bottom);

    if (pos < 717) {
        this.position= 0;
    }else if (pos > 717 && pos < 1115) {
        this.position= 1;
    } else if(pos > 1115 && pos < 1618){
        this.position= 2;
    }else if(pos > 1618 && pos < 2244){
        this.position= 3;
    }else if(pos > 2244){
        this.position= 4;
    }

  }
}
