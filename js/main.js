$(function() {
	$('.js-openmenu, .js-closemenu').click(function(event) {
		var $body = $('body');
		if ($body.hasClass('openmenu')) {
			$body.removeClass('openmenu');
		} else {
			$body.addClass('openmenu');
		}
	});
});