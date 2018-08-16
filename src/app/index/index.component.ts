import { Component, OnInit, AfterViewInit } from '@angular/core';
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

  }

  dosomething(){

     this.img_size = window.innerHeight - 80;

    let image_heght = this.service.image_heght;

    console.log(this.img_size);
    console.log(image_heght);




  }



}
