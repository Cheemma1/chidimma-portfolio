
// loader
let loader=document.querySelector('.preloader');
window.addEventListener('load', function(){
 setTimeout(function(){
loader.style.display='none';
loader.style.opacity='0';
},2000);
});