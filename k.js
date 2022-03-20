function nextl(){
    window.location='l.html';
    
    }
    function back(){
        window.location='Intro.html';
    }
    function speaks(){
        speak()
    }
    function backj(){
        window.location="j.html";
    }
    function speak(){
        
 
            
           
        var synth=window.speechSynthesis;
        speak_data="K is or kite";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }