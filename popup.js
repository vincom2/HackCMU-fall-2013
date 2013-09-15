alert('hi');

// $.getScript(chrome.extension.getURL("savestuff.js"), function() {
//   console.log('savestuff.js successfully loaded in popup.js');
// });

for(e in chrome.storage.sync.get(null)) {
  document.write('qn ' + e.id + ': ' + e.link);
}

alert('bye');