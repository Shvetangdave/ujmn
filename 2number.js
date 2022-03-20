function next3(){
    window.location='3number.html';
    
    }
    function back(){
        window.location='Intro.html';
        
        }
    function speaks(){
        speak()
    }
    function speak(){
        
    
        var synth=window.speechSynthesis;
        speak_data="Two Rats";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }
    function back1(){
        window.location='lnumber.html'
    }