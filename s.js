function nextt(){
    window.location='t.html';
    
    }
    function back(){
        window.location='Intro.html';
    }
    function speaks(){
        speak()
    }
    function backr
    (){
        window.location="r.html";
    }
    function speak(){
        
 
            
           
        var synth=window.speechSynthesis;
        speak_data=" S is for sun ";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }