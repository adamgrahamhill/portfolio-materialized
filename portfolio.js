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
			} else if (textEntered.includes("adam_hill") || textEntered.includes("res.doc")) {
				$('#google-docs-resume').click();
			} else if (textEntered.includes("twitter")) {
				$('#twitter-link').click();
			}
			statusLine.val("");
		}
	})
	$('#files-list').click(function(){

		if ($('#connect-seg .collapsible-header').hasClass("active")) {
			$('#connect-seg .collapsible-header').text('connecting...');
		} else {
			$('#connect-seg .collapsible-header').text("connect")
		}
	})
})