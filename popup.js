'use strict';

let savebutton = document.getElementById('savebutton');

savebutton.onclick = function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    let savedURL = tabs[0].url;
    let title = tabs[0].title;
    chrome.storage.sync.set({title: savedURL}, function() {
      alert('added to storage: ' + title + ': ' + savedURL);
    });
  });
};