var stopButton = document.getElementById('stopButton'); 
var myWindow = window.open("", "_blank", "width=100,height=100");
myWindow.focus();

var posX = 0;
var posY = 0;
var direction = 1;
var intervalId;

function moveFlyingWindow() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const maxPosX = Math.min(screenWidth, screenHeight) - 100;

  posX += direction * 10;
  posY += direction * 10;

  if (posX >= maxPosX || posY >= maxPosX) {
    direction = -1;
  }
  if (posX <= 0 || posY <= 0) {
    direction = 1; 
  }

  myWindow.moveTo(posX, posY);
}

intervalId = setInterval(moveFlyingWindow, 50);

stopButton.addEventListener('click', Stop);

function Stop() {
  if (intervalId) {
    clearInterval(intervalId); 
    intervalId = null;
    myWindow.focus();
  }

}
