$("a[href^='http']").click(function(){window.open(this.href);return false;});
$("#years-in-biz").html( ( new Date() ).getFullYear() - 2002 );
var postbox = "joao" + "@" + "pescada.pt";
$(".post-box").attr("href", "ma" + "il" + "to" + ":" + postbox);
$(".post-box-full").attr("href", "ma" + "il" + "to" + ":" + postbox).html(postbox);

function isEmail(email){ return /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test( email ); }

$('#lead-name,#lead-email,#lead-brief').change(function()
	{
		$(this).parent().find('.input-error').removeClass('input-error-visible');
	}
);

$('.idea-form .input-submit').click(function()
	{
		//console.log('clicked submit');

		var isIdeaValid = true;

		if ( $('#lead-name').val().length >= 2 ) $('#lead-name-error').removeClass('input-error-visible');
		else
		{
			$('#lead-name-error').addClass('input-error-visible');
			isIdeaValid = false;
		}

		if ( isEmail($('#lead-email').val()) ) $('#lead-email-error').removeClass('input-error-visible');
		else
		{
			$('#lead-email-error').addClass('input-error-visible');
			isIdeaValid = false;
		}

		if ( $('#lead-brief').val().length >= 10 ) $('#lead-brief-error').removeClass('input-error-visible');
		else
		{
			$('#lead-brief-error').addClass('input-error-visible');
			isIdeaValid = false;
		}

		if (!isIdeaValid)
		{
			smoothScroll.animateScroll( null, '#idea-form-title' );
			return;
		}

		//console.log('idea is valid');

		$(".idea-form .input-submit").disabled = true;

		$.ajax({
			url: "/api/idea.send.php",
			type: "POST",
			data: {
				a1: $('#lead-name').val(),
				a2: $('#lead-email').val(),
				b1: $('#lead-needs').val(),
				b2: $('#lead-brief').val(),
				b3: $('#lead-budget').val(),
				b4: $('#lead-starting').val(),
				c1: window.localStorage.getItem('user_referral'),
				c2: window.localStorage.getItem('user_flow')
			},
			success: function(data, status, xhr){
				//log("@ _onFeedbackSubmit.success()", status, data, Number(data) === 0);

				
				$('.idea-form').hide();
				smoothScroll.animateScroll( null, '#idea-form-title' );

				//re-enable form
				//$(".idea-form .input-submit").disabled = false;

				if (Number(data) !== 0)
				{
					$('.idea-form-error').show('slow');
					_gaq.push(['_trackEvent', 'Portfolio', 'Contacts', 'Error submitting idea']);
				}
				else
				{
					$('.idea-form-sent').show('slow');
					_gaq.push(['_trackEvent', 'Portfolio', 'Contacts', 'Idea submitted']);
				}
			},
			error: function(xhr, status, error){
				console.log("error submitting idea", status, error);

				$('.idea-form').hide();
				smoothScroll.animateScroll( null, '#idea-form-title' );

				//re-enable form
				//$(".idea-form .input-submit").disabled = false;

				$('.idea-form-error').show('slow');
				_gaq.push(['_trackEvent', 'Portfolio', 'Contacts', 'Error submitting idea']);
			}
		});

	}
);


// TODO: old website warning
$('body').prepend('<div class="alert-old-website">Please notice you are currently viewing my old website from 2010. <a href="http://joaopescada.com">Check my new website</a> instead.</div>');


// google analytics tracking
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-1950548-2', 'joaopescada.com');
ga('send', 'pageview');



