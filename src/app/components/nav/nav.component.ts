import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


  
    $(function(){
        $('.bars i').on('click',function(){
            $('.ul_list').slidToggle();
            $('.bars i').toggleClass('change_color')
        })
  
    /** start go to section **/
      $('.ul_list li').on('click',function(){
        $('body,html').animate({
          scrollTop:$($(this).children('a').data('scroll')).offset().top+1
        },1000)
      })
    /** end go to section   **/
    })
  }




}
