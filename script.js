
var overlay=document.querySelector(".overlay");
var closebtn=document.getElementById("closebtn");
var img=document.querySelectorAll(".img");

function popup(event){
  
  overlay.style.display="block";
 
}
closebtn.addEventListener("click",()=>{
overlay.style.display="none";

});
