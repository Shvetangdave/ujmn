function speaks(){
    speak()
}

function speak(){
    var synth=window.speechSynthesis;
        speak_data="MOM";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}

function speakdad(){
    speak1()
}

function speak1(){
    var synth=window.speechSynthesis;
        speak_data="Dad";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}

function speakearth(){
    speak2()
}

function speak2(){
    var synth=window.speechSynthesis;
        speak_data="Earth";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}

function speaksister(){
    speak3()
}

function speak3(){
    var synth=window.speechSynthesis;
        speak_data="sister";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}


function speakbrother(){
    speak4()
}

function speak4(){
    var synth=window.speechSynthesis;
        speak_data="Brother";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}


function speakyou(){
    speak5()
}

function speak5(){
    var synth=window.speechSynthesis;
        speak_data="You";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}

function speakgod(){
    speak6()
}

function speak6(){
    var synth=window.speechSynthesis;
        speak_data="God";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}

function back(){
    window.location='Intro.html';
}