var a=0;



setTimeout(()=>{
document.querySelector("#header").style.opacity="0";
document.body.overflowY="Scroll";
document.querySelector("#header").style.width="0vw";

},14700);
document.querySelector("#hamburger").addEventListener("click",function(){
    if(a===0){
const menu=document.querySelector("#menu");
menu.style.left="17%";
menu.style.boxShadow="7px 7px 100vh black,19px 19px 76vh 100vh black";
a=1;
}
else{

    const menu=document.querySelector("#menu");
    menu.style.left="-40%";
    menu.style.boxShadow="none";
    a=0;
}}
);


document.querySelector("#close").addEventListener("click",function(){
    const menu=document.querySelector("#menu");
    menu.style.left="-40%";
    menu.style.boxShadow="none";
    });
    document.addEventListener("keydown",function(e){
if(e.key==="Escape"){
    const menu=document.querySelector("#menu");
    menu.style.left="-40%";
    menu.style.boxShadow="none";
}
if(e.key==="/"){
    if(a===0){
    const menu=document.querySelector("#menu");
    menu.style.left="17%";
    menu.style.boxShadow="7px 7px 100vh black,19px 19px 76vh 100vh black";
    a=1;
}
else{
    const menu=document.querySelector("#menu");
    menu.style.left="-40%";
    menu.style.boxShadow="none";
    a=0;
}
}
    });


    document.getElementById("dream").addEventListener("click",function(){
        const cursor=document.querySelector("#cursor");
        cursor.style.transitionDelay="0s";
        cursor.style.border="0px";
        cursor.style.transform="";
        cursor.style.boxShadow="-100vw 100vh 100vh 100vh black";
        cursor.style.top="05%";
        cursor.style.left="10%";
        cursor.style.borderRadius="7px";
        cursor.style.width="80vw";
        cursor.style.height="93vh";
        cursor.style.background="rgba(255,255,255,0.12)";
        cursor.style.backdropFilter="blur(12px)";

        document.querySelector("#world").pointerEvents="none";
       
    });