function nextd(){
    window.location='d.html';
    
    }
    function back(){
        window.location='Intro.html';
    }
    function speaks(){
        speak()
    }
    function backb(){
        window.location="b.html";
    }
    function speak(){
        
 
            
           
        var synth=window.speechSynthesis;
        speak_data="C is for Cat MEOW";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }