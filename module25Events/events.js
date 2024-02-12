// option 2 for writing events in button  
function bggColor(){

  document.body.style.backgroundColor='red';
}
// option 3 for writing events in button  
// Writing codes in external js file by id 

const byId=document.getElementById('by-id');

byId.onclick=makeBlue;

function makeBlue(){
  document.body.style.backgroundColor='blue'
}

// option 4 for writing events in button 

const byAddEventListener = document.getElementById('ByAddEventListener');

byAddEventListener.addEventListener('click',add)

function add(){
  document.body.style.backgroundColor='silver'
}
// option 4.1 for writing events in button 

const AddEventListener = document.getElementById('AddEventListener');

AddEventListener.addEventListener('click',function add(){
  document.body.style.backgroundColor='gold'
})

// option 4 final that we will use most of the time 

document.getElementById('EventListener').addEventListener('click',function add(){
  document.body.style.backgroundColor='white'
})
 
// <!-- changing text of h1 by onclick -->

document.getElementById('textChanger').addEventListener('click',function(){
  const h1Changer=document.getElementById('main-id')
  h1Changer.innerText='I am changed by onclick'
})

// <!-- changing text of h1 by onclick of input  -->

document.getElementById('h2-changer').addEventListener('click',function(){
  const inputu = document.getElementById('input');
  const changedInput =inputu.value;
  const h1Changer=document.getElementById('h2-id');
  h1Changer.innerText= changedInput;
  // const inputClear=document.getElementById('input');
  inputu.value = ' ';
})