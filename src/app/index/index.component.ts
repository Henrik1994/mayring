import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DirectivesDirective } from '../directives.directive';
import { ServicesService } from '../services.service';
declare var $: any;



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [ DirectivesDirective ]
})
export class IndexComponent implements OnInit {

  public img_size ;  
  source='assets/img/Home-picture.jpg';
  constructor(private service: ServicesService) {

   }

  ngOnInit() {
    if(window.innerWidth > 600){
    this.img_size = window.innerHeight - 82;
  }else{
    this.img_size = window.innerHeight - 82;
  }
  }
}
