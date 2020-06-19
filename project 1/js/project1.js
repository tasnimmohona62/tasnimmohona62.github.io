setInterval(anim1,1000);

function anim1(){
   var m = document.querySelector(".animation");
   m.innerHTML="contact us?"
}


setInterval(anim2,2000);

function anim2(){
   var m = document.querySelector(".animation");
   m.innerHTML="Click the icon below"


}


(function($){
//isotope
// init Isotope
var $grid = $('.grid').isotope({
  // options
});
// filter items on button click
$('.isotopee').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

})(jQuery);


    
 //map     
var map;
$(document).ready(function(){
  map = new GMaps({
    el: '#map',
    zoom: 15,
    lat: 23.7489419,
    lng: 90.3655124,
    scrollwheel:false
  });
  map.addControl({
    position: 'top_right',
    content: 'Geolocate',
    style: {
      margin: '5px',
      padding: '1px 6px',
      border: 'solid 1px #717B87',
      background: '#fff'
    },
    events: {
      click: function(){
        GMaps.geolocate({
          success: function(position){
            map.setCenter(position.coords.latitude, position.coords.longitude);
          },
          error: function(error){
            alert('Geolocation failed: ' + error.message);
          },
          not_supported: function(){
            alert("Your browser does not support geolocation");
          }
        });
      }
    }
  });
});
 

//fadeIn fadeOut when scrolling

$(window) .scroll (function () {
  if ($(this).scrollTop() > 150) {
    $('.scrollup') .fadeIn();
  } else {
     $('.scrollup') .fadeOut();
  }
  
});

//for scroll top

$('.scrollup').click(function ()  {
  $ ("html, body") .animate({
    scrollTop:0
  }, 600);
   return false;
});


$('.grid').isotope({
  // options
  itemSelector: 'element-item',
  layoutMode: 'fitRows'
});
