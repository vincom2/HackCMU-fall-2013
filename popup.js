alert('hi');

// $.getScript(chrome.extension.getURL("savestuff.js"), function() {
//   console.log('savestuff.js successfully loaded in popup.js');
// });

for(var i=0; i< localStorage.length; i++) {
  alert('yo');
  document.write(localStorage.key(i)+' '+localStorage[localStorage.key(i)]+'\n');
}

alert('bye');