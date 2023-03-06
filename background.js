// chrome.runtime.onInstalled.addListener(async () => {
//   chrome.contextMenus.create({
//     id: "some id",
//     title: "!Sima Art's",
//     type: 'normal',
//     contexts: ['selection'],
//   });
// });

// background.js
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    func: contentScriptFunc,
  });
});

function contentScriptFunc() {
  text = window.getSelection().toString().match(/(-?\d+(\.\d+)?)/g).map(v => +v);
  text.map(i => {
    window.open("https://www.sima-land.ru/"+i,'_blank');
  });
}

// // Open a new search tab when the user clicks a context menu
// chrome.contextMenus.onClicked.addListener(item => {
//   let arr = item.selectionText.match(/(-?\d+(\.\d+)?)/g).map(v => +v);
//   console.log(arr);
// });



