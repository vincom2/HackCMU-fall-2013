$class_url = $(location).attr('href');
// we would instead like to append stuff that saves the post to favourites
$toappend = '<li class="testing" onclick="history.back();">go back</li>';

$(document).on('mouseenter mouseleave', '[id^=FeedItemDropdown]', function(e) {
	//dreadful hack: since we can't get the "add only to one place" thing to work,
	//we'll just extract post ID and add shit *everywhere* and not care, because nobody can mouseover
	//multiple posts at once. just make sure to extract the post ID so we can save the appropriate post.
	// $post_id = this.id.split(/_/)[1]; //maybe we don't want to split after all LOL
	//because the post ID (as in the @num one) appears to be under the FeedItemDropdown_ part anyway
	$('<ul>').appendTo('[id^=FeedItemDropdown]').append($toappend);
	// $the_string = $('#'+this.id).children('ul li').find('.disabled').text();
	$num_string = $('#'+this.id).children('ul').find('.disabled').text();
	$post_num = $num_string.split(/ /)[1];
	alert($post_num);
});