'use strict';


$(document).ready(init);

var $display;

function init() {
	$display = $('#display')

	$(document).on('keypress', keyPressed);

	$('.num').click(clickNum);
	$('#clear').click(clear);
	$('#toggle').click(toggleNeg);
	$('#percent').click(percent);
	// $('.button').click(buttons);
	$('#decimal').click(decimal);
}


function keyPressed(event){
	var key = String.fromCharCode(event.charCode);

	if($.isNumeric(key)){
	addNumToDisplay(key)
	}
	if(key ==='c'){
		clear()
	}
}

function buttons(){
	var array = [];
	var $()
	if($('#add')){
		$(display)
	}
	if($('#sub')){

	}
	if($('#divide')){

	}
	if($('#multi')){

	}




}

function decimal(){
	var currentValue = $display.text();
	var dec = currentValue + '.';
	if(!currentValue.includes('.')){
		$(display).text(dec);
	}
}

function toggleNeg(){
	var currentValue = $display.text();
	var invert = currentValue * -1;
	$(display).text(invert);
}

function percent(){
	var currentValue = $display.text();
	var perc = currentValue / 100;
	$(display).text(perc);
}

function clickNum(){
	var num = $(this).text();
	addNumToDisplay(num);
}


function addNumToDisplay(num){
	var currentDisplay = $display.text()

	if($display.text() === '0'){
	$display.text(num)
  }	
	else {
	$display.text(currentDisplay + num)
  }
}


function clear(){
	$display.text(0)
}
