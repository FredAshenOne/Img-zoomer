$(document).ready(function(){


  // var route = $('.init').attr('src');
  // $('.init').before("<div class='main-box'><div class='wraper'><div class='small-wraper'><img class='small-img' src='"+route+"'><div class='window-wraper' id='box'><div class='large'><img src='"+route+"' id='lg-img'></div></div></div></div></div>");

  $('.small-img').on('hover',function(){
    $('.small-img').on('mousemove', function(e){
      $('.window-wraper').removeClass('window-hide');
      var ximg = e.clientX * (-1.4);
      var yimg = e.clientY * (-1.3);
      $('.large').css('left',320 + ximg);
      $('.large').css('top',300 + yimg);
    });
    $('.small-img').on('mouseout',function(){
    $('.window-wraper').addClass('window-hide');
  });
});


});
