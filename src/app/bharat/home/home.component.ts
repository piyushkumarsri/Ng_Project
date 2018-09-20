import { Component, OnInit } from '@angular/core';
declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  ngAfterViewInit() {

      // The relative URL of the submit.php script.
      // You will probably have to change	it.
    
      // Caching the feedback object:	
      var feedback = $('#feedback');
    
      $('#feedback h6').click(function(){
    
        // We are storing the values of the animated
        // properties in a separate object:
            
        var anim	= {		
          mb : 0,			// Margin Bottom
          pt : 25			// Padding Top
        };
        
        var el = $(this).find('.arrow');
        
        if(el.hasClass('down')){
          anim = {
            mb : -270,
            pt : 10
          };
        }
    
        // The first animation moves the form up or down, and the second one 
        // moves the "Feedback heading" so it fits in the minimized version
        
        feedback.stop().animate({marginBottom: anim.mb});
        
        feedback.find('.section').stop().animate({paddingTop:anim.pt},function(){
          el.toggleClass('down up');
        });
      });
     
    
    
    
  }
  ngOnInit() {
  }

}
