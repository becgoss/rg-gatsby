import $ from 'jquery';
$(document).ready(function(){
  $('.slick-slider').slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      fade: true,
      infinite: true
  });
});
