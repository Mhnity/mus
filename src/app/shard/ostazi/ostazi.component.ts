import { Component, OnInit } from '@angular/core';
declare var $:any
@Component({
  selector: 'app-ostazi',
  templateUrl: './ostazi.component.html',
  styleUrls: ['./ostazi.component.scss']
})
export class OstaziComponent implements OnInit {

  imgs:any[]=[]
  constructor() { }

  ngOnInit(): void {
    this.imgs=[
      {img:'assets/imgs/shard/ostazi/1.PNG'},
      {img:'assets/imgs/shard/ostazi/2.PNG'},
      {img:'assets/imgs/shard/ostazi/3.PNG'},
      {img:'assets/imgs/shard/ostazi/4.PNG'},
      {img:'assets/imgs/shard/ostazi/5.PNG'},
      {img:'assets/imgs/shard/ostazi/6.PNG'},
    ]
 
  }

}
