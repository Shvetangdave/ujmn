function nexte(){
    window.location='e.html';
    
    }
    function back(){
        window.location='Intro.html';
    }
    function speaks(){
        speak()
    }
    function backc(){
        window.location="c.html";
    }
    function speak(){
        
 
            
           
        var synth=window.speechSynthesis;
        speak_data="D is for Dog Bark";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }