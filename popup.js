document.addEventListener('DOMContentLoaded', function(activeInfo) {
	var checkPageButton = document.getElementById('checkPage');
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		var activeTab = tabs[0];
		var img_url = construct_url(activeTab.url);
		var im = document.getElementById("priceChart");
		im.src = img_url;
	});
	checkPageButton.hidden = true;
	checkPageButton.previousSibling.hidden = true;
	//checkPageButton.addEventListener('click', function() {
	/*     chrome.tabs.query(null, function(tab) {
		  d = document;
		  var f = d.createElement('form');
		  f.action = 'http://gtmetrix.com/analyze.html?bm';
		  f.method = 'post';
		  var i = d.createElement('input');
		  i.type = 'hidden';
		  i.name = 'url';
		  i.value = tab.url;
		  f.appendChild(i);
		  d.body.appendChild(f);
		  f.submit();
		}); */
		// console.log(productId);
	//}, false);
}, false);

function extract_product_id(url) {
	m=url.split('/');
	return m[m.indexOf("dp")+1];
	console.log('entered');
	return 'checking'
};

function construct_url(base_url) {
	var base_url = base_url.split('?')[0]; // get rid of the tracking context
	var m=base_url.split('/');
	if (m.indexOf('www.amazon.com') > 0) {
		var productId = m[m.indexOf("dp")+1];
		return 'https://charts.camelcamelcamel.com/us/' + productId + '/amazon.png?legend=1';
	} else if (m.indexOf('www.walmart.com') > 0) {
		return 'https://waltrack.net/product/' + m[m["length"]-1];
	} else {
		return ""
	}
}