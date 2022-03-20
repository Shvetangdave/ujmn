function next4(){
window.location='4number.html';
    
    
    }
    function back(){
        window.location='Intro.html';
        
        }
    function speaks(){
        speak()
    }
    function speak(){
        
    
        var synth=window.speechSynthesis;
        speak_data="Three Cats Meow";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }
    function back2(){
        window.location='2number.html'
    }