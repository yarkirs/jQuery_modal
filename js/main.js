

$(document).ready(function() {
 	var modal = $('.popup'),
 					overlay = $('.overlay'),
 					link = $('button[data-popup="true"]'),
 					close = $('.close-btn'),
 					girlsType = $('.girls-type');

 	close.click(function() {
 		modal.toggleClass('popup_active');
 		overlay.hide();
 	});
 	link.on('click', function () {
 		girlsType.text($(this).attr('data-girl'));
 		overlay.show();
 		modal.toggleClass('popup_active');
 	});
 });
















