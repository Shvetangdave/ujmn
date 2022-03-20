function nextj(){
    window.location='j.html';
    
    }
    function back(){
        window.location='Intro.html';
    }
    function speaks(){
        speak()
    }
    function backh(){
        window.location="h.html";
    }
    function speak(){
        
 
            
           
        var synth=window.speechSynthesis;
        speak_data="I is for igloo";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }