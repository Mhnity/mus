import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {Card} from '../../interfaces/card'
import TypeIt from 'typeit'; 
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  customOptions: OwlOptions = {
    //animateIn: 'flipInX',
    //stagePadding:30,
    smartSpeed:1200,
    autoplay:true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 1.5
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }
  
  cards:Card[]=[];
  galary:any[]=[];
  constructor() { }
  ngOnInit(): void {
    /************************* start top title   ***********/
    new TypeIt(".top_title", {
      strings: "with love & dedication",
      speed:100,
      cursor: false,
      loop:true,
    }).go();
    new TypeIt(".top_title2", {
      strings: "with love & dedication",
      speed:100,
      cursor: false,
      loop:true,
    }).go();
    new TypeIt(".top_title3", {
      strings: "with love & dedication",
      speed:100,
      cursor: false,
      loop:true,
    }).go();
    new TypeIt(".top_title4", {
      strings: "with love & dedication",
      speed:100,
      cursor: false,
      loop:true,
    }).go();
  /************************* end top title   ***********/

  /************************* start cards    ***********/
  this.cards=[
    {name:'mummy flower',   new_sale:'new', new_salary:10, old_salary:12, img:'assets/imgs/middel_slider/1.jpg'},
    {name:'birthday',       new_sale:'new', new_salary:12.3, old_salary:22.2, img:'assets/imgs/middel_slider/2.jpg'},
    {name:'love',           new_sale:'new', new_salary:19, old_salary:25.5, img:'assets/imgs/middel_slider/3.jpg'},
    {name:'flowers',        new_sale:'new', new_salary:11, old_salary:14.9, img:'assets/imgs/middel_slider/4.jpg'},
    {name:'mix',            new_sale:'new', new_salary:13, old_salary:17.2, img:'assets/imgs/middel_slider/5.jpg'},
    {name:'new flower',     new_sale:'new', new_salary:15.5, old_salary:19.2, img:'assets/imgs/middel_slider/6.jpg'},
  ]
  /************************* start cards   ***********/

  /************************* start galary   ***********/
  this.galary=[
    {img:'assets/imgs/galary/1.jpg'},
    {img:'assets/imgs/galary/2.jpg'},
    {img:'assets/imgs/galary/3.jpg'},
    {img:'assets/imgs/galary/4.jpg'},
    {img:'assets/imgs/galary/5.jpg'},
    {img:'assets/imgs/galary/6.jpg'},
    {img:'assets/imgs/galary/7.jpg'},
    {img:'assets/imgs/galary/8.jpg'},
  ]
  /************************* end galary   ***********/

  }

}
