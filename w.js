function nextx(){
    window.location='x.html';
    
    }
    function back(){
        window.location='Intro.html';
    }
    function speaks(){
        speak()
    }
    function backv
    (){
        window.location="v.html";
    }
    function speak(){
        
 
            
           
        var synth=window.speechSynthesis;
        speak_data="W is for world where we live in";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }