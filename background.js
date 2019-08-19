console.log("background loaded");

var context = {
    "id": "fullscreen",
    "title": "fullscreen",
    "contexts":["all"],
}



var test = chrome.contextMenus.create(context)

chrome.contextMenus.onClicked.addListener(function(info, tab, titi) {
    chrome.tabs.sendMessage(tab.id, {content: "message"}, function(response) {});
});