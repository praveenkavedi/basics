var myimage = document.querySelector('img')

myimage.onclick = function () {
    var mysrc = myimage.getAttribute('src');
    if (mysrc === 'images/mozillalogo.jpeg') {
        myimage.setAttribute('src', 'images/vadivel3.jpeg');
    }
    else {
        myimage.setAttribute('src','images/mozillalogo.jpeg');
    }
}

var mybutton = document.querySelector('button');
var myheading = document.querySelector('h1');

function setUserName () {
    var myname = prompt("please Enter Your Name...");
    localStorage.setItem('name', myname);
    myheading.textContent='Welcome to Mozilla ' + myname;
}

if (!localStorage.getItem('name')) {
    setUserName ();
} else {
    var storedname = localStorage.getItem('name');
    myheading.textContent = 'Welcome to Mozilla ' + storedname;
}

mybutton.onclick = function() {
    setUserName ();
}