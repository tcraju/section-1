jQuery(document).ready(function(){
	$(function(){
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    
  });
});
}); 

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
})
