$(function() {
	$('ul.nav li.dropdown').hover(function() {
		$('.dropdown-menu', this).fadeIn();
	}, function() {
		$('.dropdown-menu', this).fadeOut('fast');
	});


});

$("#contactForm").validator().on("submit", function (event) {
	if (event.isDefaultPrevented()) {
        formError();
   	}
});

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
});


function submitForm(){
	var name = $("#name").val();
	var email = $("#email").val();
	var message = $("#message").val();
	var subject = $("#_subject").val();

	$.ajax({
	    url: "//formspree.io/niloburger@gmail.com",
	    method: "POST",
	    data: {
	    	"name" : name, "email" : email, "subject" : subject, "message" : message,
	    },
	    dataType: "json",
	    contentType: "application/json",
	});
}

function formError(){
    $("#contactForm").addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass('shake animated');
    });
}
