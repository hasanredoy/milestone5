// let seatButtons = document.getElementsByClassName('w-[110px]')
// // console.log(seatButtons)
// // let getOnlyButton = seatButtons.querySelectorAll('button')
// // console.log(getOnlyButton)
// let addArray ;
// let sitAvailable = 39;
// let sitBooked = 1;


// let booked = 1;
// for (const button of seatButtons) {
//   button.addEventListener('dblclick', function () {
//     button.classList.remove('bg-[#1DD100]')
//   })
// //  console.log(button.innerHTML)

//   button.addEventListener('click', function () {
//     // console.log('hello')
//     button.classList.add('bg-[#1DD100]')
//     let getInnerText = button.innerHTML;
//     console.log(getInnerText)
//     const getTheValuePrintDiv = document.getElementById('print-div')
//     // addArray.push(getInnerText)
//     const printValue = document.createElement('td')
//     printValue.innerText = getInnerText;
//     console.log(printValue)



//     const Class = document.createElement('td')
//     Class.innerText = 'Economy';

//     const Price = document.createElement('td')
//     Price.innerText = 550

//     Price.classList.add('mr-0')
//     // creating div
//     const tableRow = document.createElement('tr')

//     tableRow.appendChild(printValue);
//     tableRow.appendChild(Class);
//     tableRow.appendChild(Price);

//     getTheValuePrintDiv.appendChild(tableRow)
//     // document.getElementById('next-button').removeAttribute('disabled')

//     //  available sit sec 
//     const available =
//       document.getElementById('available-sit').innerText = sitAvailable;
//     sitAvailable--;
//     // booked sit  
//     sitBooked=sitBooked+1
//     booked = document.getElementById('sit-booked').innerText = sitBooked;
//     // console.log(booked)
   
//     // console.log(sitBooked)
//     if (sitBooked > 1) {
//       document.getElementById('next-button').removeAttribute('disabled')
//     }
//     if(sitBooked>=4){
//       showHome('inpput')
//     }

//       if(booked>4){
//   // //  alert('Book Limitation is Over')
//   // // hideHome('buttons-div')
//   // this.addEventListener( 'mouseenter' ,)
//   // makeDisable(seatButtons)
//   this.disabled=true
//    }
//   })
 
//   console.log(booked)
// }
// if(sitAvailable<=36){
//   makeDisable('buttons-div')
//  }
// for(let i=0; i< sitBooked.length ; i++ ){
//   loop=loop+2
  
// }
// for(let i=0; i<addArray.length; i++){
//   console.log(i)
// }
// let x = addArray;
// console.log(addArray)






// continue button 
document.getElementById('extra-page').addEventListener('click', function () {
  showHome('home')
  hideHome('side-screen')
})
// next button 
document.getElementById('next-button').addEventListener('click', function () {
  hideHome('home')
  showHome('side-screen')
})



// hide home 

function hideHome(elementId) {
  const id = document.getElementById(elementId)
  id.classList.add('hidden')
}

// show home 
function showHome(elementId) {
  const id = document.getElementById(elementId)
  id.classList.remove('hidden')
}

function makeDisable(id){
  const disabled = document.getElementById(id).disabled=true
  // disabled.ariaDisabled()
}

// let seatButtons = document.getElementById('buttons-div')
// // console.log(seatButtons)
//  let getOnlyButton = seatButtons.getElementsByClassName('btn')


// let inner = getOnlyButton.innerText
// console.log(inner)