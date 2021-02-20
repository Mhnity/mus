import { Component, OnInit } from '@angular/core';
declare var $:any
@Component({
  selector: 'app-motanaw3',
  templateUrl: './motanaw3.component.html',
  styleUrls: ['./motanaw3.component.scss']
})
export class Motanaw3Component implements OnInit {

  imgs:any[]=[]
  constructor() { }

  ngOnInit(): void {
    this.imgs=[
      {img:'assets/imgs/shard/motanaw3/0.PNG'},
      {img:'assets/imgs/shard/motanaw3/1.PNG'},
      {img:'assets/imgs/shard/motanaw3/2.PNG'},
      {img:'assets/imgs/shard/motanaw3/3.PNG'},
      {img:'assets/imgs/shard/motanaw3/4.PNG'},
      {img:'assets/imgs/shard/motanaw3/5.PNG'},
      {img:'assets/imgs/shard/motanaw3/6.PNG'},
      {img:'assets/imgs/shard/motanaw3/7.PNG'},
      {img:'assets/imgs/shard/motanaw3/8.PNG'},
      {img:'assets/imgs/shard/motanaw3/9.PNG'},
      {img:'assets/imgs/shard/motanaw3/10.PNG'},
      {img:'assets/imgs/shard/motanaw3/11.PNG'},
      {img:'assets/imgs/shard/motanaw3/12.PNG'},
    ]
 
  }

}
