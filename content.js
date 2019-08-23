// var clickedEl = null;

// var myConfObj = {
//     iframeMouseOver : false
//   }

// window.addEventListener("click", (event) => {
//     clickedEl = event.target
// })

// window.addEventListener('blur',(event) => {
//     clickedEl = event.target
//     if(myConfObj.iframeMouseOver){
//         console.log('Wow! Iframe Click!');
//     }
// });


// const getIframe = (elem) => {
//     if(!elem)
//         return null;
//     if (elem.nodeName === "IFRAME")
//         return elem;
//     return (getIframe(elem.parentNode))
// }
  

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // console.log("iframe?", getIframe(clickedEl));
    var iframe = document.getElementsByClassName("player-img-iframe")
    iframe[0].requestFullscreen();
});