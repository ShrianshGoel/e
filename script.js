var offsetX;
var k=5;
var men=0;
var h=5;
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
document.addEventListener('mouseup',function(){var offsetX;
var k=5;
var men=0;
var h=5;
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

    document.querySelector("#w").style.height
      ="70vh";
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
document.querySelector("#translate").addEventListener('click',function(){
document.querySelector("input").placeholder="नाम दाले";
  document.querySelector("input:last-of-type").placeholder="इमेल दाले";
  document.querySelector("textarea").placeholder="अपनी स्थिथि बताये";
  document.querySelector("#submit").innerHTML="फ़ोरम सबमित करे";
  document.querySelector("#sec").innerHTML="<k>इस वेबसाइट को बनाने का कारण?</k><br><br><br>मैंने यह वेबसाइट मसूरी (उत्तराखंड का एक शहर) में महिला सशक्तिकरण के लिए बनाई है। उत्तराखंड का निवासी होने के नाते मुझे बहुत दुख होता है कि उत्तराखंड में साक्षरता का स्तर राष्ट्रीय औसत से काफी नीचे है। सरकार की वेबसाइट पर प्रदर्शित प्रतिशत काफी कम है और मेरा मानना ​​है कि शिक्षा के अधिकार के उल्लंघन के बड़ी संख्या में मामले दर्ज नहीं किए जाते हैं। उत्तराखंड में ऐसे कई उदाहरण हैं जहां माता-पिता अपनी लड़कियों को शिक्षा का अधिकार देने के फैसले के खिलाफ रहे हैं। जब मैंने मसूरी के उपनगरीय इलाकों में रहने वाली विभिन्न आयु वर्ग की लड़कियों से बातचीत की, तो मुझे पता चला कि कई लड़कियों को शिक्षा का अधिकार नहीं मिला है। वेबसाइट बनाने का कारण मसूरी में निरक्षरता मिटाने का मेरा दृढ़ संकल्प था। इस वेबसाइट के माध्यम से हम पर्याप्त धन जुटाने का प्रयास करेंगे ताकि हम लड़कियों को शिक्षा का अधिकार प्रदान कर सकें और उन माता-पिता के बीच जागरूकता बढ़ा सकें जो अपनी लड़कियों के साथ समान व्यवहार करने में विफल रहते हैं और लड़कों के प्रति सामान्य पूर्वाग्रह रखते हैं। इसके अलावा, इस वेबसाइट का उपयोग करके एक डेटाबेस बनाया जाएगा ताकि हम संबंधित अधिकारियों को डेटा रिपोर्ट कर सकें।";
  document.querySelector("#text").innerHTML="हमारे सितारों से मिले";
  document.querySelector("#w b").style.fontSize="11em";
  document.querySelector("#w").innerHTML="<b>हमारा अस्तित्व </b>क्यों है?";
  document.querySelector("#sec").style.top="145%";
});

const canvas=document.querySelector("#c");
const c=canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
window.addEventListener('resize',function(){
    canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
});

setInterval(()=>{
    if(h<6&&h>0){
    document.querySelector(".card:nth-of-type("+h+")").style.left="-70%";
    document.querySelector(".card:nth-of-type("+h+")").style.transition="all 0.6s";
console.log("works");
        --h;
    }
    else{
        document.querySelectorAll(".card").forEach((e)=>{
          e.style.left="60%";
          document.querySelector(".card:nth-of-type("+h+")").style.transition="all 0s";
        });
        h=5;
    }
},3800);
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

    document.querySelector("#w").style.height
      ="70vh";
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
document.querySelector("#translate").addEventListener('click',function(){
document.querySelector("input").placeholder="नाम दाले";
  document.querySelector("input:last-of-type").placeholder="इमेल दाले";
  document.querySelector("textarea").placeholder="अपनी स्थिथि बताये";
  document.querySelector("#submit").innerHTML="फ़ोरम सबमित करे";
  document.querySelector("#sec").innerHTML="<k>इस वेबसाइट को बनाने का कारण?</k><br><br><br>मैंने यह वेबसाइट मसूरी (उत्तराखंड का एक शहर) में महिला सशक्तिकरण के लिए बनाई है। उत्तराखंड का निवासी होने के नाते मुझे बहुत दुख होता है कि उत्तराखंड में साक्षरता का स्तर राष्ट्रीय औसत से काफी नीचे है। सरकार की वेबसाइट पर प्रदर्शित प्रतिशत काफी कम है और मेरा मानना ​​है कि शिक्षा के अधिकार के उल्लंघन के बड़ी संख्या में मामले दर्ज नहीं किए जाते हैं। उत्तराखंड में ऐसे कई उदाहरण हैं जहां माता-पिता अपनी लड़कियों को शिक्षा का अधिकार देने के फैसले के खिलाफ रहे हैं। जब मैंने मसूरी के उपनगरीय इलाकों में रहने वाली विभिन्न आयु वर्ग की लड़कियों से बातचीत की, तो मुझे पता चला कि कई लड़कियों को शिक्षा का अधिकार नहीं मिला है। वेबसाइट बनाने का कारण मसूरी में निरक्षरता मिटाने का मेरा दृढ़ संकल्प था। इस वेबसाइट के माध्यम से हम पर्याप्त धन जुटाने का प्रयास करेंगे ताकि हम लड़कियों को शिक्षा का अधिकार प्रदान कर सकें और उन माता-पिता के बीच जागरूकता बढ़ा सकें जो अपनी लड़कियों के साथ समान व्यवहार करने में विफल रहते हैं और लड़कों के प्रति सामान्य पूर्वाग्रह रखते हैं। इसके अलावा, इस वेबसाइट का उपयोग करके एक डेटाबेस बनाया जाएगा ताकि हम संबंधित अधिकारियों को डेटा रिपोर्ट कर सकें।";
  document.querySelector("#text").innerHTML="हमारे सितारों से मिले";
  document.querySelector("#w b").style.fontSize="11em";
  document.querySelector("#w").innerHTML="<b>हमारा अस्तित्व </b>क्यों है?";
  document.querySelector("#sec").style.top="145%";
});

const canvas=document.querySelector("#c");
const c=canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
window.addEventListener('resize',function(){
    canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
});

setTimeout(()=>{
    if(h<6&&h>0){
    document.querySelector(".card:nth-of-type("+h+")").style.left="-70%";
    document.querySelector(".card:nth-of-type("+h+")").style.transition="all 0.6s";
console.log("works");
        --h;
    }
    else{
        document.querySelectorAll(".card").forEach((e)=>{
          e.style.left="60%";
          document.querySelector(".card:nth-of-type("+h+")").style.transition="all 0s";
        });
        h=5;
    }
},3800);
