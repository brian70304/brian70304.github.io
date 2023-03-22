let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/cat1.jpg') {
        myImage.setAttribute('src', 'images/cat2.jpg');
    }
    else {
        myImage.setAttribute('src', 'images/cat1.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myHeading.innerHTML = '!!BE A CAT LOVER!!'

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    }   
    else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = '!!A CAT LOVER, ' + myName + '!!';
    } 
}

if(!localStorage.getItem('name')) {
    setUserName();
} 
else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = '!!A CAT LOVER, ' + storedName + '!!';
}

myButton.onclick = function() {
    setUserName();
}