function nextg(){
    window.location='g.html';
    
    }
    function back(){
        window.location='Intro.html';
    }
    function speaks(){
        speak()
    }
    function backe(){
        window.location="e.html";
    }
    function speak(){
        
 
            
           
        var synth=window.speechSynthesis;
        speak_data="f is for fish";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }