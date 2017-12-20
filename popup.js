function getCurrentTabUrl(callback){
	var queryInfo={
		active : true,
		currentWindow : true
	};

	chrome.tabs.query(queryInfo,(tabs)=>{
		var tab = tabs[0];

		var url=tab.url;
		console.assert(typeof(url)=="string",'tab.url should be a string');

		callback(url);
	});
}

function disableAuto(){
	var script = "var input=document.getElementsByTagName('input');for(var i=0;i<input.length;i++){input[i].autocomplete='off';}";
	chrome.tabs.executeScript({
		code:script
	});
}

function enableAuto(){
	var script = "var input=document.getElementsByTagName('input');for(var i=0;i<input.length;i++){input[i].autocomplete='on';}";
	chrome.tabs.executeScript({
		code:script
	});
}

document.addEventListener('DOMContentLoaded',()=>{
	getCurrentTabUrl((url)=>{
		var enable = document.getElementById('en');
		var disable = document.getElementById('dis');

	disable.addEventListener('click',()=>{
		disableAuto();
	});

	enable.addEventListener('click',()=>{
		enableAuto();
	});
	});
});