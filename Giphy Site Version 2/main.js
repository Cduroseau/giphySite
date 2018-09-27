

	var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=BgMajQrP7pJSKLTKeifz6R5o2CDpfsBp&limit=5");
	xhr.done(function(response) { console.log("success got data", response); });
