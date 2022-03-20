function next9(){
    window.location='9number.html';
    
    }
    function back(){
        window.location='Intro.html';
        
        }
    function speaks(){
        speak()
    }
    function speak(){
       
    
        var synth=window.speechSynthesis;
        speak_data="Eight lionness";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }
    function back7(){
        window.location='7number.html'
    }