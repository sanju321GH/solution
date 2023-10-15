const s1 = document.querySelector('#matter');
const s2 = document.querySelector('#success');
console.log(s1.style);

document.getElementById("subbtn").onclick = function(){
   s1.style.zIndex = "0";
   s1.style.opacity = "0";
}