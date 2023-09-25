var offsetX;
var k=5;
var men=0;
const backgrounde=document.querySelector("#mainheader");
var colors=["black","lightblue","coral","#c5b9c4","steelblue"];


const move=(e)=>{
  document.querySelector(".card:nth-of-type("+k+")").style.left=e.clientX-offsetX+"px";
};
he();
function he(){
document.querySelector(".card:nth-of-type("+k+")").addEventListener('mousedown',function(e){
offsetX=e.clientX-document.querySelector(".card:nth-of-type("+k+")").offsetLeft;
document.addEventListener('mousemove',move);
backgrounde.style.setProperty("--backheader",colors[k-1]);
});}
document.addEventListener('mouseup',function(){
  document.querySelector(".card:nth-of-type("+k+")").style.left="-93vw";
  document.querySelector(".card:nth-of-type("+k+")").style.transition="all 0.65s";
  document.removeEventListener('mousemove',move);

  if(k!=1){
  k--;
  he();
  }
  else{
    setTimeout(function(){
      document.querySelector(".card:nth-of-type(1)").style.left="60%";
    },500);
    
    document.querySelector(".card:nth-of-type(2)").style.left="60%";
    document.querySelector(".card:nth-of-type(3)").style.left="60%";
    document.querySelector(".card:nth-of-type(4)").style.left="60%";
    document.querySelector(".card:nth-of-type(5)").style.left="60%";
k=5;
  }
});
window.addEventListener('scroll',function(e){
  if(window.scrollY>630){
    document.querySelector("#about").style.borderRadius="0vh";
    document.querySelector("#w").style.height="60vh";
    document.querySelector("#w").style.width="90vw";
  }
  else{
    document.querySelector("#w").style.height="0vh";
    document.querySelector("#w").style.width="80vw";
  }
});
document.querySelector("#close").addEventListener('click',function(){
  if(men===1){
const h=document.querySelector("#menu");
h.style.left="-160%";
men=0;
}});
document.querySelector("#hamburger").addEventListener('click',function(){
  if(men===0){
  const h=document.querySelector("#menu");
  h.style.left="3%";
  h.style.boxShadow="20px 20px 60vh black";
  men=1;
  }});
  document.addEventListener('keyup',function(e){
    console.log(e);
    if(e.key==="/"){

        const h=document.querySelector("#menu");
        h.style.left="3%";
        men=1;
      
    }
    if(e.key==="Escape"){

        const h=document.querySelector("#menu");
        h.style.left="-160%";
        men=0;
   
    }
  });