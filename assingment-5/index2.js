
let seatButtons = document.getElementsByClassName('w-[110px]')
let total=0;
let left= 39;
var sum = 1;
for (let i =0; i<seatButtons.length; i++) {
  
  let button = seatButtons[i]
  // console.log(button)
  // click button 
   button.addEventListener('dblclick', function () {
    button.classList.remove('bg-[#1DD100]')
  })
    
  //  
  button.addEventListener('click', function() {
    let getInnerText= button.innerText
    console.log(getInnerText)
// booked sit
button.classList.add('bg-[#1DD100]')
// booked=sum
   
  let booked = document.getElementById('sit-booked').innerText = sum;sum=sum+1
  if(booked>=4){
    // document.getElementById('A1').setAttribute(makeDisable)
    // document.getElementById('a-section').disabled = true;
    makeDisable('A1')
    makeDisable('A2')
    makeDisable('A3')
    makeDisable('A4')
    makeDisable('B1')
    makeDisable('B2')
    makeDisable('B3')
    makeDisable('B4')
    makeDisable('C1')
    makeDisable('C2')
    makeDisable('C3')
    makeDisable('C4')
    makeDisable('D1')
    makeDisable('D2')
    makeDisable('D3')
    makeDisable('D4')
    makeDisable('E1')
    makeDisable('E2')
    makeDisable('E3')
    makeDisable('E4')
    makeDisable('F1')
    makeDisable('F2')
    makeDisable('F3')
    makeDisable('F4')
    makeDisable('J1')
    makeDisable('J2')
    makeDisable('J3')
    makeDisable('J4')
    makeDisable('H1')
    makeDisable('H2')
    makeDisable('H3')
    makeDisable('H4')
    makeDisable('I1')
    makeDisable('I2')
    makeDisable('I3')
    makeDisable('I4')
    makeDisable('G1')
    makeDisable('G2')
    makeDisable('G3')
    makeDisable('G4')
    console.log(4)
  }
  console.log(8)
  

// append part 
// console.log(getInnerText)
    const getTheValuePrintDiv = document.getElementById('print-div')
    // addArray.push(getInnerText)
    const printValue = document.createElement('td')
    printValue.innerText = getInnerText;
    console.log(printValue)



    const Class = document.createElement('td')
    Class.innerText = 'Economy';

    const Price = document.createElement('td')
    Price.innerText = 550

    Price.classList.add('mr-0')
    // creating div
    const tableRow = document.createElement('tr')

    tableRow.appendChild(printValue);
    tableRow.appendChild(Class);
    tableRow.appendChild(Price);

    getTheValuePrintDiv.appendChild(tableRow)  

     //  available sit sec 
    const available =
      document.getElementById('available-sit').innerText =left;
    left--;

    let calculation =parseInt(booked)*550
    
    total= document.getElementById('totalPrice').innerText=calculation;

    if(booked>=4){
          showHome('inpput')
        }
      if(booked>=1 ){
        document.getElementById('next-button').removeAttribute('disabled')
      }

 })

}

function applyForDiscount(){
  const getInputValue=document.getElementById('Coupon-input').value;
  console.log(getInputValue)
  const fix = getInputValue.split(' ').join('').toUpperCase()
  if(fix==='NEW15'){
      
  }
}