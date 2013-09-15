function storePost(id, link) {
	try {
		console.log("Storing [" + id + ":" + link + "]");
		window.localStorage.removeItem(id);
     	window.localStorage.setItem(id, link);
	} catch(e) {
      console.log("Error inside setItem");
      console.log(e);
    }
    console.log("Return from setItem" + id + ":" + link);
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if(request.data) {
    	storePost(request.data.id, request.data.link);
    	sendResponse({data:"cool"});
    }
    return true;
});