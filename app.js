$(document).ready(function() {
	$('.show-app1, .show-app2, .show-app3, .show-app4').hide();
	$('#options ul li').on('click', function() {
		$('.show-app1, .show-app2, .show-app3, .show-app4').hide();
		$(this).hide();
		var length = $("#options ul li").length;
		var val = $(this).attr('id');
		var listArray = ['#app1', '#app2', '#app3', '#app4'];;
		listArray = jQuery.grep(listArray, function(value) {
		  	return value != "#" + val;
		});
		val = val.slice(-1);
		$(".show-app" + val).show();
		$(listArray[0] + ',' + listArray[1] + ',' + listArray[2]).css('width', '32%');
		$(listArray[0] + ',' + listArray[1] + ',' + listArray[2]).show();

	});

	$('.fa-compress').on('click', function() {
		$(this).parent().hide();
		$('#options ul li').css('width', '24%');
		$('#options ul li').show();
	});

	$('#flip').on("click", function() {
		if($(this).hasClass('fa fa-angle-up')) {
			$(this).removeClass('fa fa-angle-up').addClass('fa fa-angle-down');
			$('#panel').slideDown('slow');
		}
		else {
			$(this).removeClass('fa fa-angle-down').addClass('fa fa-angle-up');
			$('#panel').slideUp('slow');
		};
	});
});

