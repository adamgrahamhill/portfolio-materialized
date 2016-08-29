$(document).ready( function(){
	var statusLine = $('#bot-status-line input')
	var timeStamp = function(){
		var date = new Date();
		return date.getHours().toString() + ":" + date.getMinutes().toString();
	}
	statusLine.focus();
	$(window).keydown(function(event){
		statusLine.focus();
		if (event.which === 13) {
			var textEntered = statusLine.val().toLowerCase();
			if (textEntered.includes("about")) {
				$('#about-seg .collapsible-header').click();
				$('#history').text(timeStamp() +" $ " + textEntered);
			} else if (textEntered.includes("resume")){
				$('#resume-seg .collapsible-header').click();
				$('#history').text(timeStamp() +" $ " + textEntered);

			} else if (textEntered.includes("connect")) {
				$('#connect-seg .collapsible-header').click();
				$('#history').text(timeStamp() +" $ " + textEntered);

			} else if (textEntered.includes("github")) {
				$('.fa-github').click();
				$('#history').text(timeStamp() +" $ " + textEntered);

			} else if (textEntered.includes("adam_hill") || textEntered.includes("res.doc")) {
				$('#google-docs-resume').click();
				$('#history').text(timeStamp() +" $ " + textEntered);

			} else if (textEntered.includes("twitter")) {
				$('#twitter-link').click();
				$('#history').text(timeStamp() +" $ " + textEntered);

			} else if (textEntered.includes("linkedin")) {
				$('#linkedin-link').click();
				$('#history').text(timeStamp() +" $ " + textEntered);
			} else if (textEntered.includes("echo")){
				$('#history').text(statusLine.val().replace("echo",""));
			}else {
				$('#history').text("-bash: " + textEntered + ": command not found");

			}
			statusLine.val("");
		}
	})
	$('#files-list').click(function(){

		if ($('#connect-seg .collapsible-header').hasClass("active")) {
			$('#connect-seg .collapsible-header').text('connecting...');
			$('#connect-seg .collapsible-header').addClass("blink");

		} else {
			$('#connect-seg .collapsible-header').text("connect");
			$('#connect-seg .collapsible-header').removeClass("blink");
			
		}
	})
})