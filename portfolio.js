$(document).ready( function(){
	var statusLine = $('#bot-status-line input')
	statusLine.focus();
	$(window).keydown(function(event){
		statusLine.focus();
		if (event.which === 13) {
			var textEntered = statusLine.val().toLowerCase();
			if (textEntered.includes("about")) {
				$('#about-seg .collapsible-header').click();
			} else if (textEntered.includes("resume")){
				$('#resume-seg .collapsible-header').click();
			} else if (textEntered.includes("connect")) {
				$('#connect-seg .collapsible-header').click();
			}
			statusLine.val("");
		}
	})
})