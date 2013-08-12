chrome.browserAction.onClicked.addListener(function(tab) {
  console.log("HEY GIRL...")
  chrome.tabs.executeScript(null, {
    file: "heygirl.js"
  });
});
