function nextk(){
    window.location='k.html';
    
    }
    function back(){
        window.location='Intro.html';
    }
    function speaks(){
        speak()
    }
    function backi(){
        window.location="i.html";
    }
    function speak(){
        
 
            
           
        var synth=window.speechSynthesis;
        speak_data="J is for jet";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }