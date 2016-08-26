var canvas = document.getElementById('screen');
var ctx = canvas.getContext('2d');
var speed = 1/16/1000;
var x = 0;
var y = 0;
canvas.onkeydown = function(event){
  console.log(event.keyCode);
  switch(event.keyCode){
    //case
  }
}
function loop(){
	ctx,fillRect(x,y,50,50);
	x++;
	setTimeout(loop, speed);
}
  loop();
