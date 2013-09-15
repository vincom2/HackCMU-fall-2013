// alert('hi');

// $.getScript(chrome.extension.getURL("savestuff.js"), function() {
//   console.log('savestuff.js successfully loaded in popup.js');
// });
alert(window.localStorage.length);
for(var i=0; i< window.localStorage.length; i++) {
  alert('yo');
  document.write(window.localStorage.key(i)+' '+window.localStorage[window.localStorage.key(i)]+'\n');
}

// alert('bye');