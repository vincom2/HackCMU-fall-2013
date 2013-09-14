if(jQuery) {
	alert("hello world!");
}
else {
	alert("fuck!");
}
$toappend = '<li class="testing" onclick="history.back();">go back</li>';

$(document).on('mouseenter mouseleave', '[id^=FeedItemDropdown]', function(e) {
	alert(this.id);
	alert(this.id.split(/_/)[1]);
	$('<ul>').appendTo('[id^='+this.id.split(/_/)[1]+']').append($toappend); //get the numeric part only
});