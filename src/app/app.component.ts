import { Component,OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mussada';

  ngOnInit(): void {
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
  }
}
