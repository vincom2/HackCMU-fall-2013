if(jQuery) {
	alert("hello world!");
}
else {
	alert("fuck!");
}
$toappend = '<li class="testing" onclick="history.back();">go back</li>';

$(document).on('mouseenter mouseleave', '[id^=FeedItemDropdown]', function(e) {
	$('<ul>').appendTo('[id^=FeedItemDropdown]').append($toappend);
	$('<ul>').appendTo('[id^='+this.id.split(/_/)[1]+']').append($toappend);
});