'use strict';

let savebutton = document.getElementById('savebutton');

savebutton.onclick = function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    alert(tabs[0].url);
  });
};