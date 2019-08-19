var clickedEl = null;

document.addEventListener('contextmenu', function(event) {
    chrome.storage.sync.set({ toto: event }, function(){
        console.log("set ok");
    });
    return false;
}, false);

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("on est dans le send reponse")
    console.log(clickedEl);
    sendResponse({value: clickedEl });
})

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     console.log("on communique bien");
//     if(request == "coucou") {
//         sendResponse({value: "toto"});
//     }
// });