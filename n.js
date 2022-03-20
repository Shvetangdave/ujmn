function nexto(){
    window.location='o.html';
    
    }
    function back(){
        window.location='Intro.html';
    }
    function speaks(){
        speak()
    }
    function backm(){
        window.location="m.html";
    }
    function speak(){
        
 
            
           
        var synth=window.speechSynthesis;
        speak_data="N is for nest";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }