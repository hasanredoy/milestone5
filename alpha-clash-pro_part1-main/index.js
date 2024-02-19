function continueGame(){
  // step -1: generate a random alphabet
  const alphabet = getARandomAlphabet();
  console.log('your random alphabet', alphabet);

  // set randomly generated alphabet to the screen (show it)
  const currentAlphabetElement = document.getElementById('current-alphabet');
  currentAlphabetElement.innerText = alphabet;

  // set background color
  addBg(alphabet);
}
// hide home screen 
function play(){
  hideById('home-screen')
  showById('play-ground')
 continueGame()
}
// hide play ground
document.getElementById('score-button').addEventListener('click', function(){
  hideById('play-ground')
  showById('final-score')
  document.getElementById('user-score').innerText=score;
})

// hide score and show playground 
let UserScore=0;
document.getElementById('play-again-btn').addEventListener('click', function(){
  showById('play-ground')
  hideById('final-score')
  const newScore = document.getElementById('score')
  newScore.innerText=UserScore;
  document.getElementById('life').innerText=5;
  
  
})
// keyUp function 
let score=0;
// console.log(score)
  let life=5;
  if(score === 10){
    life++
  }
function onKeyUp(event){
  // user press key 
  const userPress = event.key
  const currentAlphabetElement = document.getElementById('current-alphabet');
  const displayedAlphabet = currentAlphabetElement.innerText
  const expectedPress = displayedAlphabet.toLowerCase()
  console.log(userPress,expectedPress)
  const expectedUserPress=userPress.toLowerCase()
  
  
  if(expectedUserPress === expectedPress){
    continueGame()
    // score = score+1
    score=score+1
    if(score === 10){
      life++
    }
    if(score === 20){
      life=life+2
    }
    if(score === 30){
      life=life+3
    }

  }
  else{
    life--
    if(life <1){
      hideById('play-ground')
      showById('final-score')
      document.getElementById('user-score').innerHTML=score;
      alert('game over')
    }
  }
  removeBg(expectedPress)
  document.getElementById('score').innerText=score;
  document.getElementById('life').innerText=life;
}


document.addEventListener('keyup',onKeyUp)

// trying to make start with enter 
document.addEventListener('keydown',function(e){
  const x = e
   if(x.key == 'Enter'){
    hideById('home-screen')
    showById('play-ground')
    // continueGame()
   }
})
//