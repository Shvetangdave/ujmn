function next(){
    window.location='wowscreenln.html';
    
    }
    function back(){
        window.location='Intro.html';
    }
    function speaks(){
        speak()
    }
    function speak(){
        
 
            
           
        var synth=window.speechSynthesis;
        speak_data="Ten houses";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }
    function back9(){
        window.location='9number.html'
    }