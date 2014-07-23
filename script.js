$(document).ready(function(){

  $('#find-user').click(function() {
  	//takes in the username from user input
  		var usernameinput = $('#username').val();
  	//formats it in the flickr url needed for grabbing data
  		var userinfo = "https://api.flickr.com/services/rest/?method=flickr.urls.lookupUser&api_key=3e1bfcd8270761bbc1c9d7849cf71876&url=www.flickr.com%2Fphotos%2F"+usernameinput+"%2F&format=json&jsoncallback=?";
  		console.log(userinfo);

  		$.ajax({
				url: userinfo,
				dataType:  "jsonp",
				success:function(data){
					//pulls the movie poster
					flickrID = data.user.id[0];
					displayname = data.user.username._content[0];
					console.log(flickrID);
					console.log(displayname);}
				});
	})
});
