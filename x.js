function nexty(){
    window.location='y.html';
    
    }
    function back(){
        window.location='Intro.html';
    }
    function speaks(){
        speak()
    }
    function backw(){
        window.location="w.html";
    }
    function speak(){
        
 
            
           
        var synth=window.speechSynthesis;
        speak_data="x is for xylophone ";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }