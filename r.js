function nexts(){
    window.location='s.html';
    
    }
    function back(){
        window.location='Intro.html';
    }
    function speaks(){
        speak()
    }
    function backq
    (){
        window.location="q.html";
    }
    function speak(){
        
 
            
           
        var synth=window.speechSynthesis;
        speak_data=" R is for rainbow ";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }