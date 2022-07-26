
// chrome.runtime.onInstalled.addListener(() => {
  // chrome.storage.sync.set({ color });
  // console.log('Default background color set to %cgreen', `color: ${color}`);
// });
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	var l = tab.url;
	var m = l.split('/');
	if (m.indexOf('www.amazon.com') > 0 && tab.url.indexOf("?") > 0) {
		tab.url = l.split("?")[0];
	    chrome.tabs.update(tabId, {url: l.split("?")[0]});
// 		window.history.replaceState({}, l.split("?")[0]); // brutally remove the context if it is amazon.com
	}
});
async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
};
