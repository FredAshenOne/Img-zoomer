$(document).ready(function() {

// La variable i se incremeta por cada imagen en la pagina para asignar un id unico
var i=0;
// la funcion asigna el id unico y crea las thumbnails
  $('.imz').each(function() {
    var route = $(this).attr('src');
    $('#small-wraper').append('<img class="small-img" src="' + route + '" id="thumb'+i+'">');
    i++;
  });

// Esta funcion selecciona la imagen a la que se le hara zoom al hacer click
// calcula el ancho y la altura de la imagen grande respecto a 3veces la pequeña
// la imagen se mueve dentro del cuadro en sentido contrario al que se mueve el mouse sobre la imagen pequeña
  $('.small-img').on('click',function(){
    var sours = $(this).attr('src');
    $('#lg-img').attr('src',sours);
    var thumbId = $(this).attr('id');
    var imgW = $(this).css('width').replace('px','');
    var imgH = $(this).css('height').replace('px','');
    var imgWN = parseInt(imgW)/2.3;
    var imgHN = parseInt(imgH)/3.5;


    $('#lg-img').css('width ',imgW*2);
    $('#lg-img').css('height',imgH*2);

    var actPosW = $('#lg-img').css('left').replace('px','');
    var actPosWN = parseInt(actPosW);
    var actPosH = $('#lg-img').css('top').replace('px','');
    var actPosHN = parseInt(actPosH);
    var newPosW = (actPosWN+imgWN);
    var newPosH = (actPosHN+imgHN);

    console.log("this is the new position"+newPosW);

    $('#'+thumbId).on('hover', function() {
        $('#'+thumbId).on('mousemove', function(e) {
        var imgX = e.clientX*(-1);
        var imgY = e.clientY*(-1);
        $('#lg-img').css('left',newPosW+imgX);
        $('#lg-img').css('top',newPosH+imgY);


      });
    });
  });
});
