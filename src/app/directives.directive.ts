import { Directive, Input,Output,ElementRef,Renderer } from '@angular/core';
import { ServicesService } from './services.service';

@Directive({
  selector: '[appDirectives]',
  host:{
    '(load)':"show()"
  }
})
export class DirectivesDirective {

  constructor(private el:ElementRef, private service: ServicesService) {
   
   }

  show(){

    this.service.image_heght = this.el.nativeElement.offsetHeight;
    this.service.iamge_width = this.el.nativeElement.offsetWidth;
   
  }

}
