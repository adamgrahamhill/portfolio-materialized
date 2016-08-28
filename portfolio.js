$(document).ready( function(event){
	console.log("Hola amigos!");
	// Status line field /////////
	// auto-select field on page load
	var statusLine = $('#bot-status-line input')
	statusLine.focus();
	statusLine.select();
	$(window).keydown(function(event){
		statusLine.focus();
		// statusLine.select();
		console.log("you pressed a key!");

	})
})