$(function() {

	// Make menus dropdown on hover
	$('ul.nav li.dropdown').hover(function() {
		$('.dropdown-menu', this).fadeIn();
	}, function() {
		$('.dropdown-menu', this).fadeOut('fast');
	}); // hover


}); // jQuery is loaded

