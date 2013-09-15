function storePost(id, link) {
	try {
		console.log("Storing [" + id + ":" + link + "]");
		window.localStorage.removeItem(id);      // <-- Local storage!
     	window.localStorage.setItem(id, link);  // <-- Local storage!
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
    }
    	
      // now the data is on your extension side, just save it to extension's localstorage.
  });