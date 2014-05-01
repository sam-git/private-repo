$(function(){
	
	var speech = new webkitSpeechRecognition();

	speech.continuous = true;

	speech.onresult = function(event){
		
		$("<p>" + event.results[event.resultIndex][0].transcript + "</p>").appendTo('.output');
	
	};


	$('.button').on('click', function(){
		speech.start();
	});

});