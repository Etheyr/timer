'use strict';
var isPause = false;
var timer = 930;
var arret =setInterval(compteur,1000);
var minute;
var	seconde;
var interval;


function compteur(){
	timer--
	minute= parseInt(timer/60,10)
	seconde= timer-minute*60
	$('#minutes').text(minute);
	$('#secondes').text(seconde);
	if(isPause){
		timer++;
		$('#minutes').text(minute);
		$('#secondes').text(seconde);
	}
	if(timer=== 0)
	{
		clearInterval(interval);
	}
}


function pause(){
}

$('.play').click(function(){
	isPause=false;

});

$('.pause').click(function(){
	isPause=true;
});

function play(){

	interval =setInterval(compteur,1000)

}




