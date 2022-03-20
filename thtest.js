var SpeechRecognition=window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function back(){
  window.location="Intro.html"
}

var live="lives";

var live = 3;

function n7(){
  document.getElementById("cow").innerHTML='CORRECT!!!';
  window.location="Intro.html";
  speak();
  }

function speak(){
  var synth=window.speechSynthesis;
  speak_data="CORRECT";
var utterThis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
}









function n5(){
  
  document.getElementById("cow").innerHTML='WRONG TRY AGAIN';
  speak5();
 live = live-1;
 document.getElementById("lives").innerHTML=live;
 if (live==0) {
   alert("You died. You need to learn numbers again.");
   window.location="lnumber.html";


 }
}
function speak5(){
  var synth=window.speechSynthesis;
  speak_data="wrong try again";
var utterThis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
}









function n3(){
  document.getElementById("cow").innerHTML='WRONG TRY AGAIN';
  speak3();
  live=live-1;
  document.getElementById("lives").innerHTML=live;
 if (live==0) {
  alert("You died sorry you are again learning numbers.");
  window.location="lnumber.html";
 }
}
function speak3(){
  var synth=window.speechSynthesis;
  speak_data="wrong try again";
var utterThis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
}



















function n4(){
  document.getElementById("cow").innerHTML='WRONG TRY AGAIN';
  speak4();
  live=live-1;
  document.getElementById("lives").innerHTML=live;
 

  if (live==0) {
    alert("You died sorry you are again learning numbers.");
    window.location="lnumber.html";
    
  }
}
function speak4(){
  var synth=window.speechSynthesis;
  speak_data="wrong try again";
var utterThis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
}







function n10(){
  document.getElementById("cow").innerHTML='WRONG TRY AGAIN';
  speak10();
  live=live-1;
  document.getElementById("lives").innerHTML=live;
 

  if (live==0) {
    alert("You died sorry you are again learning numbers.");
    window.location="lnumber.html";
}
function speak10(){
  var synth=window.speechSynthesis;
  speak_data="wrong try again";
var utterThis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
}

}














function n1(){
  document.getElementById("cow").innerHTML='WRONG TRY AGAIN';
  speak1();
  live=live-1;
  document.getElementById("lives").innerHTML=live;
 

  if (live==0) {
    alert("You died. You need to learn numbers again.");
    window.location="lnumber.html";
}
}
function speak1(){
  var synth=window.speechSynthesis;
  speak_data="wrong try again";
var utterThis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
}














function n2(){
  document.getElementById("cow").innerHTML='WRONG TRY AGAIN';
  speak2();
  live=live-1;
  document.getElementById("lives").innerHTML=live;
 

  if (live==0) {
    alert("You died sorry you are again learning numbers.");
    window.location="lnumber.html";
}
}
function speak2(){
  var synth=window.speechSynthesis;
  speak_data="wrong try again";
var utterThis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
}











function n6(){
  document.getElementById("cow").innerHTML='WRONG TRY AGAIN';
  speak6();
  live=live-1;
  document.getElementById("lives").innerHTML=live;
 

  if (live==0) {
    alert("You died. You need to learn numbers again.");
    window.location="lnumber.html";
}
}
function speak6(){
  var synth=window.speechSynthesis;
  speak_data="wrong try again";
var utterThis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
}





function n8(){
  document.getElementById("cow").innerHTML='WRONG TRY AGAIN';
  speak7();
  live=live-1;
  document.getElementById("lives").innerHTML=live;
 

  if (live==0) {
    alert("You died sorry you are again learning numbers.");
    window.location="lnumber.html";
}
}
function speak7(){
  var synth=window.speechSynthesis;
  speak_data="wrong try again";
var utterThis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
}








function n9(){
  document.getElementById("cow").innerHTML='WRONG TRY AGAIN';
  speak8();
  live=live-1;
  document.getElementById("lives").innerHTML=live;
 

  if (live==0) {
    alert("You died sorry you are again learning numbers.");
    window.location="lnumber.html";
}
}
function speak8(){
  var synth=window.speechSynthesis;
  speak_data="wrong try again";
var utterThis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
}








