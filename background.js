function storePost1(id, link) {
	try {
    // alert("id: "+id+", link: "+link);
		// console.log("Storing [" + id + ":" + link + "]");
		window.localStorage.removeItem(id);
    window.localStorage.setItem(id, link);
	} catch(e) {
      console.log("Error inside setItem");
      console.log(e);
    }
    console.log("Return from setItem" + id + ":" + link);
}


chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	alert(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if(request.data) {
    	storePost1(request.data.id, request.data.link);
    	sendResponse({data:"cool"});
    }
    return true;
});