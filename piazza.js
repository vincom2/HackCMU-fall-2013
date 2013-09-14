if(jQuery) {
	alert("hello world!");
}
else {
	alert("fuck!");
}
$toappend= '<li class="testing" onclick="history.back();">go back</li>';

$(document).ready(function () {
	alert("it claims it's done");
	$('a').css({'background-color': 'yellow'});

	$('.mark_unread_action').append($toappend);
});

$('#FeedItemDropdown*').mouseover(function() {
	$('.mark_unread_action').append($toappend);
})