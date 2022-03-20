function next10(){
    window.location='10number.html';
    
    }
    function back(){
        window.location='Intro.html';
    }
    function speaks(){
        speak()
    }
    function speak(){
        
    
            
            
        var synth=window.speechSynthesis;
        speak_data="Nine dogs bhow";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
        }
    function back8(){
        window.location='8number.html'
    }