function nexth(){
    window.location='h.html';
    
    }
    function back(){
        window.location='Intro.html';
    }
    function speaks(){
        speak()
    }
    function backf(){
        window.location="f.html";
    }
    function speak(){
        
 
            
           
        var synth=window.speechSynthesis;
        speak_data="G is for goat mheeeeeeeeeeee";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }