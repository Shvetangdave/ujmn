function next7(){
    window.location='7number.html';
    
    }
    function back(){
        window.location='Intro.html';
        
        }
    function speaks(){
        speak()
    }
    function speak(){
        
     
        var synth=window.speechSynthesis;
        speak_data="Six toys ";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }
    function back5(){
        window.location='5number.html'
    }