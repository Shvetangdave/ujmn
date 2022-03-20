function next2(){
window.location='2number.html';

}

function speaks(){
    speak()
}
function speak(){
    

    var synth=window.speechSynthesis;
    speak_data="One child";
var utterThis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
}
function back(){
    window.location='Intro.html'
}
        