var offsetX;
var k=5;
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
})