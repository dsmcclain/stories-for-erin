'use strict';

chrome.runtime.onInstalled.addListener(function() {
  console.log('background script loaded');
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {schemes: ['http', 'https']}
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});