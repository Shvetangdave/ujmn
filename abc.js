function nextb(){
    window.location='b.html';
    
    }
    function back(){
        window.location='Intro.html';
    }
    function speaks(){
        speak()
    }
    function speak(){
        
 
            
           
        var synth=window.speechSynthesis;
        speak_data="A is for apple";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }
   