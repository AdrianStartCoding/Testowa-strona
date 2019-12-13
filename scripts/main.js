/* zmiana nagłówka 
var myHeading = document.querySelector('h1');
myHeading.textContent = 'result';
var myPonny;
myPonny = 'Joe';
if (myPonny === 'GEo' ) {
	alert('Hi Joe i waiting for you')
}else{
	alert('Hi Ponny you see my Ponny Joe?')}*/
	
/* Mnożenie
multiply(20,20);function multiply(num1,num2) {
  var result = num1 * num2;
  return result;    }*/

/*document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me xd');
} klikanie alert*/

var myImage = document.querySelector('img');

myImage.onclick = function()
{
    var mySrc = myImage.getAttribute('src');
    
    if (mySrc === 'images/steamhotdog.jpg')
    {
      myImage.setAttribute ('src','images/tenor.gif');
    } 
    else 
    {
      myImage.setAttribute ('src','images/steamhotdog.jpg');
    }
}

{
var myButton = document.querySelector('switch');
var myHeading = document.querySelector('h1');
function setUserName() 
    {
      var myName = prompt('Please enter your name.');
      localStorage.setItem('name', myName);
      myHeading.textContent = 'May the force be with you, ' + myName;
    }
    
if(!localStorage.getItem('name'))
{
  setUserName();
} 
else 
{
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello in Guns and Hot dogs!, ' + storedName;
}
myButton.onclick = function() 
{
  setUserName();
}
}