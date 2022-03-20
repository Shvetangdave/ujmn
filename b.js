function nextc(){
    window.location='c.html';
    
    }
    function back(){
        window.location='Intro.html';
    }
    function speaks(){
        speak()
    }
    function backa(){
        window.location="abc.html";
    }
    function speak(){
        
 
            
           
        var synth=window.speechSynthesis;
        speak_data="B is for ball";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }






