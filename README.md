WhichCamera
===========
A flickr tool that finds which cameras a user is utilizing by exploring their EXIF data

To-do list:
-----------
* use user id to get public photos and add photo ids to array
	* https://www.flickr.com/services/api/explore/flickr.people.getPublicPhotos
* loop through array to get exif data and camera information
	* https://www.flickr.com/services/api/explore/flickr.photos.getExif
* make dropdown list of cameras
	* when camera is selected, create photo gallery of matching photos in user's uploads
