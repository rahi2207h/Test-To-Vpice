function convert(){
    let input = document.getElementById("inputtext").value;
    if(input.trim() == ""){
        alert("Enter the text");
        return;
    }
    
    let voice = new SpeechSynthesisUtterance(input);

    window.speechSynthesis.speak(voice);
    
}
