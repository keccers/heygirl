chrome.browserAction.onClicked.addListener(function(tab) {
  console.log("HEY RILCH")
  chrome.tabs.executeScript(null, {
    file: "heyrilch.js"
  });
});
