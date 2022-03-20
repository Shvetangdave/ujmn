function next5(){
    window.location='5number.html';
    
    }
    function back(){
        window.location='Intro.html';
        
        }
    function speaks(){
        speak()
    }
    function speak(){
        
    
        var synth=window.speechSynthesis;
        speak_data="Four lion roar";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }
    function back3(){
        window.location='3number.html'
    }