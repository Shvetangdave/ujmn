function nextn(){
    window.location='n.html';
    
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
        speak_data="m is for moon";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }