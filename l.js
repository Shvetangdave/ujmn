function nextm(){
    window.location='m.html';
    
    }
    function back(){
        window.location='Intro.html';
    }
    function speaks(){
        speak()
    }
    function backk(){
        window.location="k.html";
    }
    function speak(){
        
 
            
           
        var synth=window.speechSynthesis;
        speak_data="L is for Yellow lemon";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }