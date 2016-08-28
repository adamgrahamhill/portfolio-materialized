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
			} else if (textEntered.includes("github")) {
				$('.fa-github').click();
			} else if (textEntered.includes("adam" || "_hill" || "res.txt")) {
				$('#google-docs-resume').click();
				console.log(textEntered)
			}
			statusLine.val("");
		}
	})
	$('#connect-seg .collapsible-header').click(function(){

		if ($('#connect-seg .collapsible-header').hasClass("active")) {
			$('#connect-seg .collapsible-header').text('connect');
		} else {
			$('#connect-seg .collapsible-header').text("connecting...")
		}
	})
})