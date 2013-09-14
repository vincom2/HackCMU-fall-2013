if(jQuery) {
	alert("hello world!");
}
else {
	alert("fuck!");
}
$toappend = '<li class="testing" onclick="history.back();">go back</li>';

$(document).on('mouseenter mouseleave', '[id^=FeedItemDropdown]', function(e) {
	alert(e.target.id);
	$('<ul>').appendTo('[id^='+e.target.id+']').append($toappend);
});