$(document).ready(function () {
  $('.img-center').on('click',function(){
      if (!$('.spans').hasClass('focus')) {
        $('.spans').addClass('focus');
        $('.img-center').addClass('img-clicked');
        $('.img-clicked').removeClass('img-center');
      }
  });

  $('body').click(function (event) {
    if (!$(event.target).closest('.img-clicked').length){
    if ($('.img-clicked').length>0) {
        $('.img-clicked').addClass('img-center');
        $('.img-center').removeClass('img-clicked');
        $('.spans').removeClass('focus');
      }
    }
  });

//
//   $("im-box").mousemove(function(e){
//   var spleft = e.clientX + "px";
//   var sptop = e.clientY + "px";
//
//   console.log(spleft);
//
// });
//
$(function(){
  $('#zoom').anythingZoomer({
    clone: true
  });
});

});
