$(document).ready(function(){

  $('#find-user').click(function() {
  	//takes in the username from user input
  		var usernameinput = $('#username').val();
  	//formats it in the flickr url needed for grabbing data
  		var userinfo = "https://api.flickr.com/services/rest/?method=flickr.urls.lookupUser&api_key=BLAHBLAHAPI&url=www.flickr.com%2Fphotos%2F"+usernameinput+"%2F&format=json&jsoncallback=?";
  		console.log(userinfo);

  		$.ajax({
				url: userinfo,
				dataType:  "jsonp",
				success:function(data){
					//pulls the movie poster
					flickrID = data.user.id;
					displayname = data.user.username._content;
					$('#testing-output').html("Your username is <span class='user-input'>"+displayname+"</span> and your flickrID is <span class='user-input'>"+flickrID+"</span>!");
					}
		});

  			// T O  D O
		//use user id to get public photos and add photo ids to array
		//https://www.flickr.com/services/api/explore/flickr.people.getPublicPhotos

		//loop through array to get exif data and camera information
		//https://www.flickr.com/services/api/explore/flickr.photos.getExif

		//make dropdown list of cameras

		//when camera is selected, create photo gallery of matching photos in user's uploads
	})
});
