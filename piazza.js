if(jQuery) {
	alert("hello world!");
}
else {
	alert("fuck!");
}
$(window).load(function () {
	alert("it claims it's done");
	$('a').css({'background-color': 'yellow'});
	$('.mark_unread_action').append('<li class="testing" onclick="history.back();">go back</li>');
});