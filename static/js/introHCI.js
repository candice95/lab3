'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$(".jumbotron h1").text("Javascript is connected");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").toggleClass("active");
	});
	$("#submitBtn").click(changeDiv);

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}
	function changeDiv(e){
		var proj = $("#project").val();
		var wid = $("#width").val();
		$(proj).animate({width:wid});
		var des = $("#description").val();
		// Debug
		console.log(des);
		$(proj + " .project-description").text(des);
	}

	function projectClick(e){
		// Cancel the default action, which prevents the page from reloading
		e.preventDefault();
		// change background color of project
		$(this).toggleClass("highlight");

		// In an event handler, $(this) refers to the object that fired the event
		var projectTitle = $(this).find("p").text();
		var jumbotronHeader = $(".jumbotron h1");
		jumbotronHeader.text(projectTitle);

		var containingProject = $(this).closest(".project");
		var description = $(containingProject).find(".project-description");
		var fimg = $(containingProject).find(".img");
		// Toggle the image
		$(fimg).fadeToggle();
		if(description.length == 0){
			$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
		}
		// Toggle the description
		else{
			$(".project-description").fadeToggle();
		}
	}
