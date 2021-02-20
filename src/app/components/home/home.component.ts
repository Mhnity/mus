import { Component, OnInit } from '@angular/core';

declare var $:any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function(){
      $('.bars').on('click',function(){
          $('.ul_list').slideToggle();
          $('.bars i').toggleClass('change_color')
      })

      /** start go to section **/
        $('.ul_list li').on('click',function(){
          $('body,html').animate({
            scrollTop:$($(this).children('a').data('scroll')).offset().top+1
          },1000)
        })
      /** end go to section   **/

      $('.btn_click').on('click',function(){
        $('html,body').animate({
          scrollTop:0
        },50)
      })


      $(window).on('scroll',function(){
        if($(this).scrollTop()>1000){
            $('.scroll_top').fadeIn(1000);
        }else{
            $('.scroll_top').fadeOut(1000);
        }
      });
      $(".scroll_top").on('click',function(){
        $('html,body').animate({
            scrollTop:0
        },1100)
      });
      /*****************************************************end scroll to top  *****************************/

    })
  }

}
