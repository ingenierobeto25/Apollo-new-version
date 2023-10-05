$( document ).ready(function() {
	
function nav(){
	
	$('.nav-toggle').click(function(){
		
		$('.nav').toggleClass('open');
		
	});
	
}

nav();

});

var map = L.map('map').setView([45.4011, -71.88], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([45.40820, -71.88290]).addTo(map);

//function slider
let index = 0
let changeSlider= document.querySelectorAll('.test1')
function next(){	
	if(index>=0 && index<(changeSlider.length-1)){
		indexSlider = changeSlider[index]
		indexSlider= nextSlider(indexSlider)
		index++		
	}
	else {		
		index =0		
		indexSlider = returnSlider(indexSlider)
	}		
	
}

function previous(){
	if(index>=0 && index<(changeSlider.length-1)){
		indexSlider = changeSlider[index]
		indexSlider= nextSlider(indexSlider)
		index++		
	}
	else {		
		index =0		
		indexSlider = returnSlider(indexSlider)
	}
	
}
function nextSlider(indexSlider) {
	indexSlider.classList.remove('active')
	indexSlider = changeSlider[index+1]
	indexSlider.classList.add('active')
	return indexSlider
}
 function returnSlider(indexSlider){
	indexSlider.classList.remove('active')
	indexSlider = changeSlider[index]
	indexSlider.classList.add('active')
	return indexSlider
 }