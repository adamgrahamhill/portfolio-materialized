$(document).ready( function(){
	// Sets terminal dimesions on page load///////////
	var windowDimesions = function(){
		$('#window-width').text($(window).width());
		$('#window-height').text($(window).height());
	};
	windowDimesions();
	// update dimensions on window resize //////////////
	$(window).resize(windowDimesions);
	// Typing effect on page load ////////////////////////
	$("#top-status").typed({
		strings: ["Hello! Welcome to my portfolio site."
		,"Type any section name and press ENTER or click on it.<br> Type LIST for a list of commands. Have fun!"],
		typeSpeed: 0
	});
	// Timestamp for use in fake terminal command log /////////////
	var timeStamp = function(){
		var date = new Date();
		return date.getHours().toString() + ":" + date.getMinutes().toString();
	}
	// Auto focus the input for fake command line on page load////////
	var statusLine = $('#bot-status-line input');
	statusLine.focus();
	// Terminal commands control flow///////////////
	$(window).keydown(function(event){
		statusLine.focus();
		if (event.which === 13) {
			var textEntered = statusLine.val().toLowerCase();
			if (textEntered.includes('rm -rf') || textEntered.includes('rm-rf')){
				$('#history').text("PERMISSION DENIED...and...YOU DIDN'T SAY THE MAGIC WORD!" );
				$('#history').append("<div><img src='magicword.gif'/></div>");
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
			} else if (textEntered == "whoami") {
				$('#history').text('Flynn');
			}else if (textEntered.includes("about")) {
				$('#about-seg .collapsible-header').click();
				$('#history').text(timeStamp() +" $ " + textEntered);
			} else if ("list") {
				$('#history').text("COMMANDS: about , resume, connect, github, adam_hill, twitter, linkedin , echo , whoami , rm -rf");
			} else  {
				$('#history').text("-bash: " + textEntered + ": command not found");
			} 
			statusLine.val("");
		}
	});
	// unhide image on click of about section
	$('#about-seg .collapsible-header').click(function(){ $('#me').css("display", "inline");});

	// Make connect section into blinking connection when viewed/////////
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