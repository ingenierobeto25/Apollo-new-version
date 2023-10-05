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
let changeSlider= document.querySelectorAll('.changeClass')
function next(){
	index++	
	if(index>changeSlider.length-1){
		index =0				
	}
	nextSlider()			
}

function previous(){
	index--	
	if(index<0){
		index = changeSlider.length-1				
	}
	prevSlider()
	
}

function nextSlider() {
	if(index===0){
		indexSlider = changeSlider[2]	
		removeClass(indexSlider)		
	}else{
		indexSlider = changeSlider[index-1]	
		removeClass(indexSlider)		
	}
	display()	
}

function prevSlider(){
	if(index===2){
		indexSlider = changeSlider[0]	
		removeClass(indexSlider)
	}else{
		indexSlider = changeSlider[index+1]	
		removeClass(indexSlider)		
	}	
	display()
}

function display(){
	indexSlider = changeSlider[index]
	indexSlider.classList.add('active')
}

function removeClass(indexSlider){
	indexSlider.classList.remove('active')
}