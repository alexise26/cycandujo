import {Inject, OnInit,Component,ElementRef,HostListener, Attribute } from '@angular/core';
import {Router, ActivatedRoute   } from '@angular/router';
import {DOCUMENT} from "@angular/platform-browser";
import { ScrollToService } from 'ng2-scroll-to-el';
import {BlogService} from '../../../services/blog.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent{
  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    this.getSizes();
    this.getposition();
  }
  private position:number =0;
  private activeElement:string="#slider";
  private sliderTop:number;
  private aboutTop:number;
  private servicesTop:number;
  private blogTop:number;
  private contactTop:number;


  constructor(@Inject(DOCUMENT) private document: Document,private _bs:BlogService,private router:Router, private scrollService: ScrollToService, private er: ElementRef) {
  }

  navigate(element:string, duration:number, offset:number ){
      if (this._bs.route == '/home') {
        this.scrollService.scrollTo(element, duration, offset);
        this.getposition();
      }
      else{
        this.router.navigate(['home']);
      }
  }
  getSizes(){
    this.sliderTop = document.getElementById("slider").offsetTop-76;
    this.aboutTop=document.getElementById("about").offsetTop-76;
    this.servicesTop=document.getElementById("services").offsetTop-76;
    this.blogTop=document.getElementById("blog").offsetTop-76;
    this.contactTop=document.getElementById("contact").offsetTop-76;
  }

  getposition(){
    let  pos = -1*(this.er.nativeElement.getBoundingClientRect().bottom);

    if (pos < this.aboutTop) {
        this.position= 0;
    }else if (pos >= this.aboutTop && pos < this.servicesTop) {
        this.position= 1;
    }else if (pos >= this.servicesTop && pos < this.blogTop) {
        this.position= 2;
    }else if (pos >= this.blogTop && pos < this.contactTop) {
        this.position= 3;
    }else if (pos >= this.contactTop) {
        this.position= 4;
    }
  }
}
