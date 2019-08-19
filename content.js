var clickedEl = null;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    var iframe = document.getElementsByClassName("player-img-iframe")
    iframe[0].requestFullscreen();
});