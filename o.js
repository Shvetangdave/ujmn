function nextp(){
    window.location='p.html';
    
    }
    function back(){
        window.location='Intro.html';
    }
    function speaks(){
        speak()
    }
    function backn(){
        window.location="n.html";
    }
    function speak(){
        
 
            
           
        var synth=window.speechSynthesis;
        speak_data="O is for ocean";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }