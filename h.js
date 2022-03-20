function nexti(){
    window.location='i.html';
    
    }
    function back(){
        window.location='Intro.html';
    }
    function speaks(){
        speak()
    }
    function backg(){
        window.location="g.html";
    }
    function speak(){
        
 
            
           
        var synth=window.speechSynthesis;
        speak_data="H is for house";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }