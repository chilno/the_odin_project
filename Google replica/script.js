$(document).ready(function() {
	$(window).on('scroll', function() {
		if ($(window).scrollTop() + $(window).height() == $(document).height()) {
			$('.footer').hide();
		} else {
			$('.footer').show();
		}
	});
});