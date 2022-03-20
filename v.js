function nextw(){
    window.location='w.html';
    
    }
    function back(){
        window.location='Intro.html';
    }
    function speaks(){
        speak()
    }
    function backu
    (){
        window.location="u.html";
    }
    function speak(){
        
 
            
           
        var synth=window.speechSynthesis;
        speak_data="V is for planet venus ";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }