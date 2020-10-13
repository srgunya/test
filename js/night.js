let nght = document.querySelector('.night');
let wrap = document.querySelector('.wrap');

let logo = document.querySelector('.logo');
let logo_night = document.querySelector('.logo_night');

let Pepelane = document.querySelector('.Pepelane');
let Pepelane_night = document.querySelector('.Pepelane_night');

let moon = document.querySelector('.moon');
let moon_black = document.querySelector('.moon_black');
let sun = document.querySelector('.sun');

let night_mod = document.querySelector('.night_mod');
let day_mod = document.querySelector('.day_mod');

let cns = document.querySelector('.cns');
let cns_night = document.querySelector('.cns_night');



nght.onclick=function(){
	wrap.classList.toggle('wrap_night');
	
	logo.classList.toggle('none');
	logo_night.classList.toggle('none');
	
	Pepelane.classList.toggle('none');
	Pepelane_night.classList.toggle('none');
	
	moon.classList.toggle('none');
	moon_black.classList.toggle('none');
	sun.classList.toggle('none');
	
	night_mod.classList.toggle('none');
	day_mod.classList.toggle('none');
	
	cns.classList.toggle('none');
	cns_night.classList.toggle('none');
}