let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll=() => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
document.querySelector('#search-icon').onclick=() => {
    document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector('#close1').onclick=() => {
    document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector("#feedback").onclick=() =>{
document.querySelector("#co1").classList.toggle("active");
}
document.querySelector("#close").onclick=() =>{
document.querySelector("#co1").classList.toggle("active");
}
var preloader = document.getElementById("loading");
function myload() {
preloader.style.display="none";
}


const btn = document.querySelector("button");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit");

btn.onclick = () =>{
widget.style.display = "none";
post.style.display = "block";
editBtn.onclick = () =>{
    widget.style.display = "block";
    post.style.display = "none";
}
return false;
}
function openAbout(){
document.getElementById("about").style.width = "100%";

}
function closeNav(){
document.getElementById("about").style.width = "0%";
}
var preloader = document.getElementById("loader");

function myloader(){
preloader.style.display = "none";
}
function mygrocery(){
confirm("Order Now on Whatsapp click ok to continue");
}