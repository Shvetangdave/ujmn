function next6(){
    window.location='6number.html';
    
    }
    function back(){
        window.location='Intro.html';
    }
    function speaks(){
        speak()
    }
    function speak(){
     
            
            
    
        var synth=window.speechSynthesis;
        speak_data="Five monkeyes";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }
    function back4(){
        window.location='4number.html'
    }