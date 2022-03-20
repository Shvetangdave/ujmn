function next8(){
    window.location='8number.html';
    
    }
    function back(){
        window.location='Intro.html';
        
        }
    function speaks(){
        speak()
    }
    function speak(){
       
    
        var synth=window.speechSynthesis;
        speak_data="Seven books";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }
    function back6(){
        window.location='6number.html'
    }