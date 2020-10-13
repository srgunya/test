let Specifications = document.querySelector('.Specifications');
let Team = document.querySelector('.Team');
let Rent = document.querySelector('.Rent');

let one = document.querySelector('.container_one');
let two = document.querySelector('.container_two');
let three = document.querySelector('.container_three');


Specifications.onclick=function(){
	two.classList.add('none');
	three.classList.add('none');
	one.classList.remove('none');
	
	Team.classList.add('switch_none');
	Rent.classList.add('switch_none');
	Specifications.classList.remove('switch_none');
}

Team.onclick=function(){
	one.classList.add('none');
	three.classList.add('none');
	two.classList.remove('none');
	
	Team.classList.remove('switch_none');
	Specifications.classList.add('switch_none');
	Rent.classList.add('switch_none');
}

Rent.onclick=function(){
	one.classList.add('none');
	two.classList.add('none');
	three.classList.remove('none');
	
	Rent.classList.remove('switch_none');
	Specifications.classList.add('switch_none');
	Team.classList.add('switch_none');
}