function nextu(){
    window.location='u.html';
    
    }
    function back(){
        window.location='Intro.html';
    }
    function speaks(){
        speak()
    }
    function backs
    (){
        window.location="r.html";
    }
    function speak(){
        
 
            
           
        var synth=window.speechSynthesis;
        speak_data=" T is for toys ";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }