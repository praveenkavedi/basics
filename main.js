var i=0;
function changeText(){
    console.log("function called");
    var eventext = "it is even";
    var noteventext = "it is not even";
    console.log("the value of p1 is "+document.getElementById("p1"));
    if(i%2){
        document.getElementById("p1").innerHTML = noteventext;
        document.getElementById("p1").classList.remove('red');
        document.getElementById("p1").classList.add('blue');
    } else {
        document.getElementById("p1").innerHTML = eventext;
        document.getElementById("p1").classList.remove('blue');
        document.getElementById("p1").classList.add('red');
    }         
    i=i+1;
}

function myFunction() {
    setInterval(changeText, 3000);
}


