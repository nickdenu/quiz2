
(function($){
	
	$('.evens').append('<p>******************PART 2******************</p>');
	$('.evens').append('<input type="button" value="Get Title" id="gettitle"></input>');
	$('.evens').append('<input type="button" value="Keep It" id="keeperID" hidden></input>');
		
	var change = 0; //Will be 1 when the button is "change it"
	$('#gettitle').click(function(){
		if(change === 0)
		{	
			change = 1;
			$.getJSON( "http://www.mattbowytz.com/simple_api.json?data=quizData", function( json ){
				var randomNumber = Math.floor(Math.random() * (json.data.length + 1));
				$('.evens').append("<p id=\"para\">" + json.data[randomNumber] + "</p>");
				$("#keeperID").show();
				document.getElementById("gettitle").value="Change it";
			});
		}
		else if(change === 1)
		{
			$.getJSON( "http://www.mattbowytz.com/simple_api.json?data=quizData", function( json ){
				var randomNumber = Math.floor(Math.random() * (json.data.length + 1));
				$('#para').text(json.data[randomNumber]);
			});
		}
	});
	//This button doesn't work for some odd reason.
	$('#keeperID').click(function(){
		localStorage.setItem("quiz2Storage",$("#para").text());
	});
	
	// This is where you will write your function for the programming challenge
	// Do not commit console.log statements
	// Use ajax to reach the api endpoint
	// Whether or not you use jQuery, you still have to fix the jQuery errors. Removing jQuery is not fixing the problem.

	$mouseover = $('div.mouse-over');
	$click     = $('div.click');
	$submit    = $('.submitClass');
	$timeout   = $('.timeout');
	

	$mouseover.mouseover(function() {
		$this = $(this);
		$(this).html('Scrooge McDuck!');
		$(this).height($(this).height() + 50);
	});

	$click.click('click', function() {
		$this = $(this);
		$this.html('Peace Out!')
		$(this).fadeOut(1500);
		return false;
	});

	$submit.submit(function(e) {
		e.preventDefault();
		if ($(this).find('input[type="text"]').val() != '') {
			$(this).find('input').each(function() {
				$(this).fadeOut("slow");
			});
			$('.submitClass').append('<h2>Congratulations! You\'ve entered some text!</h2>');
		}
	});

	$(document).ready(function() {
		$timeout.hide();
		setTimeout(function(){
		$timeout.fadeIn('slow');
		}, 1000);
	});

})(jQuery);