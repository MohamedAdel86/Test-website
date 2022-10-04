let myImage1 = document.querySelector('.cat');
num1=1;
myImage1.onclick = () => {
  let mySrc = myImage1.getAttribute('src');
  num1=num1+1;
  if(num1===11){num1=1} 
  imgg= "images/cute-cat-"+num1+".jpg";
  myImage1.setAttribute('src',imgg);
}

let myImage2 = document.querySelector('.uncanny');
num2=1;
myImage2.onmouseover = () => {
  let mySrc2 = myImage2.getAttribute('src');
  num2=num2+1;
  if(num2===11){num2=1}
  imgg2= "images/uncanny-incredible/phase"+num2+".webp";
  myImage2.setAttribute('src',imgg2);
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

if ((localStorage.getItem('name'))) {
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


