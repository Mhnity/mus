import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss']
})
export class CovidComponent implements OnInit {
  imgs:any[]=[]
  constructor() { }

  ngOnInit(): void {
    this.imgs=[
      {img:'assets/imgs/shard/covid/1.PNG'},
      {img:'assets/imgs/shard/covid/2.PNG'},
      {img:'assets/imgs/shard/covid/3.PNG'},
      {img:'assets/imgs/shard/covid/4.PNG'},
      {img:'assets/imgs/shard/covid/5.PNG'},
      {img:'assets/imgs/shard/covid/6.PNG'},
      {img:'assets/imgs/shard/covid/7.PNG'},
      {img:'assets/imgs/shard/covid/8.PNG'},
      {img:'assets/imgs/shard/covid/9.PNG'},
      {img:'assets/imgs/shard/covid/10.PNG'},
      {img:'assets/imgs/shard/covid/14.PNG'},
      {img:'assets/imgs/shard/covid/15.PNG'},
      {img:'assets/imgs/shard/covid/16.PNG'},
    ]
 
  }

}
