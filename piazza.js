$class_url = $(location).attr('href');

$(document).on('mouseenter mouseleave', '[id^=FeedItemDropdown]', function(e) {
	//dreadful hack: since we can't get the "add only to one place" thing to work,
	//we'll just extract post ID and add shit *everywhere* and not care, because nobody can mouseover
	//multiple posts at once. just make sure to extract the post ID so we can save the appropriate post.
	$num_string = $('#'+this.id).children('ul').find('.disabled').text();
	$post_num = $num_string.split(/ /)[1];
	'<li class="testing" onclick="history.back();">go back</li>';
	// we would instead like to append stuff that saves the post to favourites
	$toappend = '<li class="testing" onclick="location.href=\'' + $class_url + '?cid=' + $post_num.split(/@/)[1] + '\';">view post</li>';
	// alert($toappend);
	$('<ul>').appendTo('[id^=FeedItemDropdown]').append($toappend);
});