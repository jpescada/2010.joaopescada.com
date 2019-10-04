$("#navigation").load("/projects/_includes/main_nav.html",
	function(response, status, xhr)
	{
		//if (status == "error") alert("this happened: "+ xhr.status +" "+ xhr.statusText);
		updateNavigation();
	}
);

function setReferral(page)
{
	//console.log('@ setReferral()', page);
	//track which page lead to contacts
	if (page != 'contacts') window.localStorage.setItem('user_referral', page);

	updateUserFlow( page );
}

function updateUserFlow(page)
{
	//console.log('@ updateUserFlow()', page);
	
	var userFlow = window.localStorage.getItem('user_flow');

	if (userFlow) userFlow += ','+ page;
	else userFlow = page;

	window.localStorage.setItem('user_flow', userFlow);
}

function updateNavigation()
{
	var nav_items = $("#navigation a");
	//console.log("nav_items:", nav_items);
	var stripped_url = document.location.href.match(/([^\/]+)\/(#.+)?$/)[1];
	var prevLink;
	var nextLink;

	//console.log("url:", stripped_url);
	setReferral(stripped_url);

	for (var i = 0; i < nav_items.length; i++)
	{
		var stripped_href = nav_items[i].href.match(/([^\/]+)\/(#.+)?$/)[1];
		var index;
		var first = 0;
		var last = nav_items.length-3;
		
		//console.log( "i:", i, "item:", nav_items[i], "href:", stripped_href, stripped_url );
		
		if (stripped_url == stripped_href)
		{
			//mark current as selected
			nav_items[i].parentNode.className = "selected";
			nav_items[i].parentNode.insertBefore( document.createTextNode("\u203a "), nav_items[i] );
			
			if (stripped_url == 'about' || stripped_url == 'contacts') break;

			//set previous project			
			if (i == first) index = last;
			else index = i-1;
			prevLink = {title:nav_items[index].title, href:nav_items[index].href};
			
			//set next project
			if (i == last) index = first;
			else index = i+1;
			nextLink = {title:nav_items[index].title, href:nav_items[index].href};
			
			//update prev / next nav on page top	
			$(".col .projects-nav").html('<p class="prev"><a href="'+ prevLink.href +'" title="'+ prevLink.title +'">&#x2190; Previous project</a></p><p class="next"><a href="'+ nextLink.href +'" title="'+ nextLink.title +'">Next project &#x2192;</a></p>');
	
			//update prev / next nav on page bottom
			$(".col .projects-nav-bottom").html('<p class="prev"><a href="'+ prevLink.href +'" title="'+ prevLink.title +'">&#x2190; Previous project</a></p><p class="top"><a href="#top" title="Back to Top">&#x2191; Top</a></p><p class="next"><a href="'+ nextLink.href +'" title="'+ nextLink.title +'">Next project &#x2192;</a></p>');
	
			break;
		}
	}
}