let myImage = document.querySelector('img');
myImage.onclick = () => {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/cute-cat.jpg') {
    myImage.setAttribute('src','images/cute-cat-2.jpg');
  } else {
    myImage.setAttribute('src','images/cute-cat.jpg');
  }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setusername() {
    const myname = prompt('Please enter name');
    if(!myname){setusername()
    } 
    else{
        localStorage.setItem('name', myname);
        myHeading.textContent = `Hello, ${myname}. I'm a cat`;
    } 
}

if (!(localStorage.getItem('name'))) {
    setusername();
  } else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Hello, ${storedName}. I'm a cat`;
  }

myButton.onclick = () => {
    setusername();
  }


