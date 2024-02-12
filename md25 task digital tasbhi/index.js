// subhanallah section 
let incrementBtnSubhanAllah =document.getElementById('subhanAllahIncriment');

let decrementBtnSubhanAllah =document.getElementById('subhanAllahDecriment');

let countSubhanAllah =document.getElementById('subhanAllahCount');

// incrementBtn function
let subhanAllahVlaue=0;
incrementBtnSubhanAllah.addEventListener('click',function(){
 
  if( subhanAllahVlaue === 33){
  
    return alert("SubhanAllah count is done Please Count another.")
  }
  subhanAllahVlaue += 1;
  countSubhanAllah.innerText=subhanAllahVlaue;
})
// incrementBtn function

decrementBtnSubhanAllah.addEventListener('click',function(){
 
  if( subhanAllahVlaue === 0){
    return alert("Value Should be more than 0.")
  }
  subhanAllahVlaue-= 1;
  countSubhanAllah.innerText=subhanAllahVlaue;
})
// ***********************************
// alhamdulillah section 
let incrementBtn =document.getElementById('alhamdulillahIncriment');

let decrementBtn =document.getElementById('alhamdulillahDecriment');

var count =document.getElementById('alhamdulillahCount');

// incrementBtn function
let alhamdulillahVlaue=0;
incrementBtn.addEventListener('click',function(){
 
  if( alhamdulillahVlaue === 33){
    return alert("Alhamdulillah count is done Please Count another.")
  }
  alhamdulillahVlaue += 1;
  count.innerText=alhamdulillahVlaue;
})
// incrementBtn function

decrementBtn.addEventListener('click',function(){
 
  if( alhamdulillahVlaue === 0){
    return alert("Value Should be more than 0.")
  }
  alhamdulillahVlaue -= 1;
  count.innerText=alhamdulillahVlaue;
})
// ***********************************
// alhamdulillah section 
let AllahuAkberIncriment =document.getElementById('AllahuAkberIncriment');

let decrement =document.getElementById('AllahuAkberDecriment');

let AllahuAkberCount =document.getElementById('AllahuAkberCount');

// incrementBtn function
let Vlaue=0;
AllahuAkberIncriment.addEventListener('click',function(){
 
  if(Vlaue === 33){
    return alert("AllahuAkber count is done Please Count another.")
  }
  Vlaue += 1;
  AllahuAkberCount.innerText=Vlaue;
})
// decrementBtn function

decrement.addEventListener('click',function(){
 
  if( Vlaue === 0){
    return alert("Value Should be more than 0.")
  }
  Vlaue -= 1;
  AllahuAkberCount.innerText=Vlaue;
})
// ***********************************
let allCount=document.getElementById('NNNN') ;
allCount.addEventListener('click',function(){
  AllahuAkberCount.innerText=0;  
  subhanAllahCount.innerText='0';
  count.innerText='0';
  subhanAllahVlaue=0;
  alhamdulillahVlaue=0;
  Vlaue=0
})
document.getElementById('Submit').addEventListener('click',function(){
  if(AllahuAkberCount.innerText===33&& subhanAllahCount.innerText===33&&count.innerText===33){
      return alert('You have complete Tasbhi')
    }
})

