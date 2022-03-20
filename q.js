function nextr(){
    window.location='r.html';
    
    }
    function back(){
        window.location='Intro.html';
    }
    function speaks(){
        speak()
    }
    function backp(){
        window.location="p.html";
    }
    function speak(){
        
 
            
           
        var synth=window.speechSynthesis;
        speak_data=" Q is for queen of england ";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }