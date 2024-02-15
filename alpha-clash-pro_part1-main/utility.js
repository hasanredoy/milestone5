// making hide element by id function
function hideById(elementId){
  const hide = document.getElementById(elementId);
  hide.classList.add('hidden')
}
// making show element by id function
function showById(elementId){
  const show = document.getElementById(elementId);
  show.classList.remove('hidden')
}

// making a random alphabet by function
function getARandomAlphabet(){
  const alphabet ='abcdefghijklmnopqrstuvwxyz';
  const splitAlphabet= alphabet.split('');
  const randomNumber = Math.random()*25;
  const roundRandomNumber= Math.round(randomNumber)
  const finalAlphabet= alphabet[roundRandomNumber]
  return finalAlphabet
}

// set background on click 
function addBg (elementId){
 const getId = document.getElementById(elementId);
 const addBg= getId.classList.add('bg-orange-400')
}
// remove background on click 
function removeBg (elementId){
 const getId = document.getElementById(elementId);
 const removeBg= getId.classList.remove('bg-orange-400')
}