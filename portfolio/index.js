const fs = require('fs')
const download = require('image-downloader')
const webp = require('webp-converter')
const prompt = require('prompt');

var link = "";
var linkExtension = "";
var local = "";
var bool = false;

console.log("Download an image and have it saved in .webp format as well. Or submit a local image to make a .webp clone. Supports .jpg, .png, and .gif.");

prompt.start();

prompt.get(['link', 'local'], function (err, result) {
	console.log('Command-line input received:');
    console.log('Link: ' + result.link);
	console.log('Local image? ' + result.local);
	link = result.link;
	local = result.local;
	get_url_extension(result.link);
	
	while (linkExtension == "jpg" && local == "no" && bool == false) { 
		jpgConvertNonlocal();
		bool = true;
	}
	
	while (linkExtension == "png" && local == "no" && bool == false) { 
		pngConvertNonlocal();
		bool = true;
	}
	
	while (linkExtension == "gif" && local == "no" && bool == false) { 
		gifConvertNonlocal();
		bool = true;
	}
	
	while (linkExtension == "gif" && local == "yes" && bool == false) { 
		gifConvertLocal();
		bool = true;
	}
	
	while (linkExtension != "gif" && local == "yes" && bool == false) {
		convertLocal();
		bool = true;
	}
	
	// console.log("linkExtension: " + linkExtension);
});

function get_url_extension(url) {
	linkExtension = url.split(/[#?]/)[0].split('.').pop().trim();
}

function jpgConvertNonlocal() {
	
	const options = {
		url: link,
		dest: './images/image.jpg' // will be saved to /path/to/dest/image.jpg
	}
		
	download.image(options)
	.then(({ filename }) => {
		console.log('Saved to', filename)  // saved to /path/to/dest/image.jpg
		const result = webp.cwebp("./images/image.jpg", "./images/image-webp.webp", "-q 80", logging="-v");
		result.then((response) => {
			console.log(response);
		}); 
	})
	.catch((err) => console.error(err))
	
}

function pngConvertNonlocal() {
	
	const options = {
		url: link,
		dest: './images/image.png' // will be saved to /path/to/dest/image.jpg
	}
		
	download.image(options)
	.then(({ filename }) => {
		console.log('Saved to', filename)  // saved to /path/to/dest/image.jpg
		const result = webp.cwebp("./images/image.png", "./images/image-webp.webp", "-q 80", logging="-v");
		result.then((response) => {
			console.log(response);
		}); 
	})
	.catch((err) => console.error(err))
	
}

function gifConvertNonlocal() {
	
	const options = {
		url: link,
		dest: './images/image.gif' // will be saved to /path/to/dest/image.jpg
	}
		
	download.image(options)
	.then(({ filename }) => {
		console.log('Saved to', filename)  // saved to /path/to/dest/image.jpg
		const result = webp.gwebp("./images/image.gif", "./images/image-webp.webp", "-q 80", logging="-v");
		result.then((response) => {
			console.log(response);
		}); 
	})
	.catch((err) => console.error(err))
	
}

function gifConvertLocal() {
	
	const result = webp.gwebp(link, "./images/image-webp.webp", "-q 80", logging="-v");
	result.then((response) => {
		console.log(response);
	});
  
}

function convertLocal() {
	
	const result = webp.cwebp(link, "./images/image-webp.webp", "-q 80", logging="-v");
	result.then((response) => {
		console.log(response);
	});
  
}