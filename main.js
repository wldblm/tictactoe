import './style.css'

var A1 = document.getElementById('A1');
var A2 = document.getElementById('A2');
var A3 = document.getElementById('A3');

var B1 = document.getElementById('B1');
var B2 = document.getElementById('B2');
var B3 = document.getElementById('B3');

var C1 = document.getElementById('C1');
var C2 = document.getElementById('C2');
var C3 = document.getElementById('C3');

var play = document.getElementById('play');
var reset = document.getElementById('reset');

play.addEventListener('click', () => {
  console.log('start');
  hasWin();
})
reset.addEventListener('click', () => {
  console.log('start');
  resetGame();
})

function hasWin() {

var A1 = document.getElementById('A1').value.trim();
var A2 = document.getElementById('A2').value.trim();
var A3 = document.getElementById('A3').value.trim();

var B1 = document.getElementById('B1').value.trim();
var B2 = document.getElementById('B2').value.trim();
var B3 = document.getElementById('B3').value.trim();

var C1 = document.getElementById('C1').value.trim();
var C2 = document.getElementById('C2').value.trim();
var C3 = document.getElementById('C3').value.trim();

// checking if someone has win 
    // horizontal
  if( 
    ((A1 == A2) && (A2 == A3)) && ((A1 != '') && (A2 != '') && (A3 != ''))
  ||
    ((B1 == B2) && (B2 == B3)) && ((B1 != '') && (B2 != '') && (B3 != ''))
  ||
    ((C1 == C2) && (C2 == C3)) && ((C1 != '') && (C2 != '') && (C3 != ''))
  ){
    alert('win horizontal');
  }

  // for more liseable code am gonna make multiple if
    //vertical
  else if( 
      ((A1 == B1) && (B1 == C1)) && ((A1 != '') && (B1 != '') && (C1 != ''))
    ||
      ((A2 == B2) && (B2 == C2)) && ((A2 != '') && (B2 != '') && (C2 != ''))
    ||
      ((A3 == B3) && (B3 == C3)) && ((A3 != '') && (B3 != '') && (C3 != ''))
    ){
      alert('win vertical');
    }
  
    //diagonal
  else if( 
      ((A1 == B2) && (B2 == C3)) && ((A1 != '') && (B2 != '') && (C3 != ''))
    ||
      ((A3 == B2) && (B2 == C1)) && ((A3 != '') && (B2 != '') && (C1 != ''))
    ){
      alert('win diagonal');
    }
  
}

function resetGame() {
document.getElementById('A1').value = '';
document.getElementById('A2').value = '';
document.getElementById('A3').value = '';

document.getElementById('B1').value = '';
document.getElementById('B2').value = '';
document.getElementById('B3').value = '';

document.getElementById('C1').value = '';
document.getElementById('C2').value = '';
document.getElementById('C3').value = '';
}