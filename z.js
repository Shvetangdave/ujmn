function next(){
    window.location='Intro.html';
    
    }
    function back(){
        window.location='Intro.html';
    }
    function speaks(){
        speak()
    }
    function backy
    (){
        window.location="y.html";
    }
    function speak(){
        
 
            
           
        var synth=window.speechSynthesis;
        speak_data="Z is for zebra";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }