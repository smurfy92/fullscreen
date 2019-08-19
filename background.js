console.log("background loaded");

var context = {
    "id": "fullscreen",
    "title": "fullscreen",
    "contexts":["all"],
}



var test = chrome.contextMenus.create(context)

chrome.contextMenus.onClicked.addListener(function(info, tab, titi) {
    chrome.storage.sync.get(["toto"], function(result) {
        console.log("result", result);
      });
    chrome.tabs.sendMessage(tab.id, {content: "message"}, function(response) {
        if(response) {
            console.log("reponse", response);
            //We do something
        }
   });
});