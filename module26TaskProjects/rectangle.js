function idSelector(id){
  const getId=document.getElementById(id).value
  const valueOfInputInNumber = parseFloat(getId)
  return valueOfInputInNumber
}
function printTheValueInArea( id, value){
 const valuePrint =document.getElementById(id)
 valuePrint.innerText=value
 return valuePrint
}
function onclickOfRectangle(){
  const triangleBase = idSelector('rectangle-base')
  const triangleHeight = idSelector('rectangle-height')
   
  const calculation= 0.5*triangleBase*triangleHeight;
  // const value = document.getElementById('will-print-the-results-of-calculation').innerText=calculation;
  const calculate= printTheValueInArea('will-print-the-results-of-calculation-of-rectangle',calculation)
  const x = calculate
}