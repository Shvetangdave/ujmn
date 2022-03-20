function nextv(){
    window.location='v.html';
    
    }
    function back(){
        window.location='Intro.html';
    }
    function speaks(){
        speak()
    }
    function backt
    (){
        window.location="t.html";
    }
    function speak(){
        
 
            
           
        var synth=window.speechSynthesis;
        speak_data=" u is for unicorn ";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }