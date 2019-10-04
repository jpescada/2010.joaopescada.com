$("#navigation").load("/projects/_includes/main_nav.html", 
	function(response, status, xhr)
	{
		//if (status == "error") alert("this happened: "+ xhr.status +" "+ xhr.statusText);
		
		updateNavigation();
	}
);

function updateNavigation()
{	
	var nav_items = $("#navigation a");
	var stripped_url = document.location.href.match(/([^\/]+)\/(#.+)?$/)[1];
	var prevLink;
	var nextLink;
	
	for (var i = 0; i < nav_items.length; i++) 
	{
		var slug = nav_items[i].href.match(/([^\/]+)\/$/);
		var stripped_href = (slug) ? slug[1] : "";
		if (stripped_url == stripped_href)
		{
			//mark current as selected
			nav_items[i].parentNode.className = "selected";
			nav_items[i].parentNode.insertBefore(document.createTextNode("\u203a "), nav_items[i]);
			
			//set previous project
			if (i == 0) prevLink = {title:nav_items[ nav_items.length-3 ].title, href:nav_items[ nav_items.length-3 ].href};
			else prevLink = {title:nav_items[i-1].title, href:nav_items[i-1].href};
			
			//set next project
			if (i == nav_items.length-3) nextLink = {title:nav_items[0].title, href:nav_items[0].href};
			else nextLink = {title:nav_items[i+1].title, href:nav_items[i+1].href};
			
			break;
		}
	}
	
	//update prev / next nav on page top
	$(".col .projects-nav .prev a").attr("title", prevLink.title);
	$(".col .projects-nav .next a").attr("title", nextLink.title);
	
	$(".col .projects-nav .prev a").attr("href", prevLink.href);
	$(".col .projects-nav .next a").attr("href", nextLink.href);
	
	//update prev / next nav on page bottom
	$(".col .projects-nav-bottom .prev a").attr("title", prevLink.title);
	$(".col .projects-nav-bottom .next a").attr("title", nextLink.title);
	
	$(".col .projects-nav-bottom .prev a").attr("href", prevLink.href);
	$(".col .projects-nav-bottom .next a").attr("href", nextLink.href);
}