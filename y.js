function nextz(){
    window.location='z.html';
    
    }
    function back(){
        window.location='Intro.html';
    }
    function speaks(){
        speak()
    }
    function backx
    (){
        window.location="x.html";
    }
    function speak(){
        
 
            
           
        var synth=window.speechSynthesis;
        speak_data="Y is for Yellow color";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }