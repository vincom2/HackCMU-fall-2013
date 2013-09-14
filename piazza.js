if(jQuery) {
	alert("hello world!");
}
else {
	alert("fuck!");
}

// $(document).ready(function () {
// 	alert("it claims it's done");
// 	$('a').css({'background-color': 'yellow'});

// 	$('.mark_unread_action').append($toappend);
// });

// $('#FeedItemDropdown*').mouseover(function() {
// 	$('.mark_unread_action').append($toappend);
// })

setTimeout(function () {
	alert("lulz");
	$('a').css({'background-color': 'yellow'});
	$('.mark_unread_action').append('<li class="testing" onclick="history.back();">go back</li>'); //it just hates this for some reason
}, 5000);