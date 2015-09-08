var buttonMake = 0 ;
var buttonHover = 0 ;
var buttonClick = 0 ;
var buttonHM = 0 ;

$(document).ready(function() {
    $('#makeHover').click(function() {
        buttonMake = makeHoverGrid(buttonMake) ;
        $('.square').unbind('click');
        $('.square').mouseover(function() {
            $(this).css('background-color', '#F7230C');
        });
    });

     $('#makeClick').click(function() {
        buttonMake = makeClickGrid(buttonMake) ;
        $('.square').unbind('mouseover');
        $('.square').click(function() {
            $(this).css('background-color', '#F7230C');
        });
    });

        $('#makeHM').click(function() {
        buttonMake = makeUserGrid(buttonMake) ;
        $('.square').unbind('click');
             $('.square').mouseover(function() {
            $(this).css('background-color', '#F7230C');
        });
    });


});

function makeUserGrid(button) {
	if (!buttonHM) {
        $('#makeHM').html('Choose the number of squares per side - Clear the grid');
        button = 1 ;
        buttonHM = 1 ;
  	}
 	if (button) {
        $('#grid').remove() ;
	}

   	var num =  prompt("How many squares do you want ?");
    var sizeSquare =  Math.round(600 / num) ;
    var sizeGrid = num * sizeSquare ;


    $('.wrapper').append('<div id="grid"></div') ;
    $('#grid').css('font-size', "0");
    $('#grid').width(sizeGrid);
    $('#grid').height(sizeGrid);
    $('#grid').css('overflow', 'hidden');
    $('#grid').css('margin', '30px auto');
    $('#grid').css('padding', '0');
    $('#grid').css('outline', "solid 2px #F0F0F0");


    for(var i = 0 ; i < num * num ; i++) {
        $('#grid').append('<div class="square"> </div>') ;
    };

    $('.square').css('display', 'inline-block');
    $('.square').css('margin', '0px');
	  $('.square').width(sizeSquare);
   	$('.square').height(sizeSquare);
	  $('.square').css('background-color', 'grey');
    $('.square').css('font-size', "20px");


    return button ;

}

function makeHoverGrid(button) {

	if (!buttonHover) {
        $('#makeHover').html('Draw by hover - Clear the grid');
        button = 1 ;
        buttonHover = 1 ;
  }
  if (button) {
        $('#grid').remove() ;
  }

    $('.wrapper').append('<div id="grid"></div') ;
    $('#grid').css('outline', "solid 2px #F0F0F0");
    $('#grid').css('font-size', "0");
	  $('#grid').width('600px');
    $('#grid').height('600px');
    $('#grid').css('overflow', 'hidden');
    $('#grid').css('margin', '30px auto');
    $('#grid').css('padding', 'auto');

    for(var i = 0 ; i < 576 ; i++) {
        $('#grid').append('<div class="square"> </div>') ;
    };

    $('.square').css('display', 'inline-block');
    $('.square').css('margin', '0px');
  	$('.square').width('25px');
   	$('.square').height('25px');
  	$('.square').css('background-color', 'grey');
    $('.square').css('font-size', "20px");

    return button ;
}

function makeClickGrid(button) {

	if (!buttonClick) {
        $('#makeClick').html('Draw by click - Clear the grid');
        button = 1 ;
        buttonClick = 1 ;
  }
  if (button) {
        $('#grid').remove() ;
  }

    $('.wrapper').append('<div id="grid"></div') ;
    $('#grid').css('outline', "solid 2px #F0F0F0");
  	$('#grid').width('600px');
    $('#grid').height('600px');
    $('#grid').css('overflow', 'hidden');
    $('#grid').css('margin', '30px auto');    $('#grid').css('padding', 'auto');
    $('#grid').css('font-size', "0");

    for(var i = 0 ; i < 576 ; i++) {
        $('#grid').append('<div class="square"> </div>') ;
    };

    $('.square').css('display', 'inline-block');
  	$('.square').width('25px');
   	$('.square').height('25px');
	  $('.square').css('background-color', 'grey');
    $('.square').css('font-size', "20px");

    return button ;
}
