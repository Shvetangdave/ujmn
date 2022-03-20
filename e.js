function nextf(){
    window.location='f.html';
    
    }
    function back(){
        window.location='Intro.html';
    }
    function speaks(){
        speak()
    }
    function backd(){
        window.location="d.html";
    }
    function speak(){
        
 
            
           
        var synth=window.speechSynthesis;
        speak_data="E is for elephant";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }