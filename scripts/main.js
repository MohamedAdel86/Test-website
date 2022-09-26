let myImage = document.querySelector('img');
num=1;
myImage.onclick = () => {
  let mySrc = myImage.getAttribute('src');
  num=num+1;
  if(num===10){num=1}
  imgg= "images/cute-cat-"+num+".jpg"
  myImage.setAttribute('src',imgg);
}
let myButton1 = document.querySelector('#b1');
let myButton2 = document.querySelector('#b2');
let myButton3 = document.querySelector('#b3');
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

myButton3.onclick = () => {
    setusername();
  }
  myButton1.onclick = () => {
    window.open("index.html","_self")
  }
  myButton2.onclick = () => {
    window.open("about.html","_self")
  }


