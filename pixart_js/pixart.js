
let brush =document.querySelector('.brush');
let input = document.querySelector('#color-field');

const Setcolors =(evt) =>{
brush.style.backgroundColor = input.value;
evt.preventDefault();

}
let color = document.querySelector('#set-color');
color.addEventListener('click', Setcolors);

let newColor = document.querySelectorAll('body');
	

const paint = (evt)=>{
	evt.target.style.backgroundColor = input.value;
	// document.getElementsByClassName('square').style.backgroundColor = brush;
} 

	for(let i=0; i < 8000; i++){
	let divs = document.createElement('div');
	divs.addEventListener('mouseover',paint);
	document.body.appendChild(divs).className= "square";
}
