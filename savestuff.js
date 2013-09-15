var eid = 'lhofepmhjdbipocjjeegpfalgkmggoka';

function storePost(id, link) {
	console.log('sending message');
	chrome.runtime.sendMessage(eid, {data: {id:id, link:link}}, function(r) {
		console.log(r.data);
		return true;
	});
}

// function storePost(id, link) {
// 	try {
// 		console.log("Storing [" + id + ":" + link + "]");
// 		window.localStorage.removeItem(id);      // <-- Local storage!
//      	window.localStorage.setItem(id, link);  // <-- Local storage!
// 	} catch(e) {
//       console.log("Error inside setItem");
//       console.log(e);
//     }
//     console.log("Return from setItem" + id + ":" + link);
//   }

function getItem(key) {
    var value;
    console.log('Retrieving key [' + key + ']');
    try {
      value = window.localStorage.getItem(key);  // <-- Local storage!
    }catch(e) {
      console.log("Error inside getItem() for key:" + key);
      console.log(e);
      value = "null";
    }
    console.log("Returning value: " + value);
    return value;
  }

  // Clears all key/value pairs in local storage.
  function clearStrg() {
    console.log('about to clear local storage');
    window.localStorage.clear(); // <-- Local storage!
    console.log('cleared');
  }