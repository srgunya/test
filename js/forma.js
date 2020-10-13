let ex = document.querySelector('.ex');
let forma = document.querySelector('.forma');
let blur = document.querySelector('.blur');
let but = document.querySelector('.but');
let wr = document.querySelector('.wrap');


if (document.documentElement.clientHeight < 901) {
	but.onclick=function(){
	forma.classList.remove('none');
	forma.classList.add('open_form');
	blur.classList.remove('none');
	forma.classList.remove('close_form');
	wr.classList.add('wrap_forma');
}
} else {
	but.onclick=function(){
	forma.classList.remove('none');
	forma.classList.add('open_form');
	blur.classList.remove('none');
	forma.classList.remove('close_form');
}
}

ex.onclick=function(){
	wr.classList.remove('wrap_forma');
	blur.classList.add('none');
	forma.classList.add('close_form');
	forma.classList.remove('open_form');
	setTimeout(function(){forma.classList.add('none');}, 200);
}