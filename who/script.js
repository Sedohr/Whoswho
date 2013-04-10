$(document).ready(function() {

	$('.navigation li').hover(function() {
		
		navigationid = $(this).prop('id')
		
		$('#sub'+navigationid).slideDown(250);
		}, function() {
			$('#sub'+navigationid).stop(true,true).slideUp(0);
			
			if (navigationid != $(this).prop('id')) {
				$('.subnavigation').stop(true,true).slideUp(250)};
			});
});