console.log("background running");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked() {
    console.log("button clicked!");
    console.log(tab.id);
    let msg = {
        txt: "hello"
    }
    chrome.tabs.sendMessage(tab.id, msg);
    // I dont think any of this is actually necessary, so we can probably remove it later
}