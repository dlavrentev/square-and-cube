let squaredResult = document.getElementById("squared-result");
let cubedResult = document.getElementById("cubed-result");
let inputNumber = document.getElementById("input-number");
let historyContainer = document.getElementById("history-container");
let calculateButton = document.querySelector(".calc-btn");


// function calculateResult (){
//   squaredResult.innerHTML = inputNumber.value * inputNumber.value;
//   cubedResult.innerHTML = inputNumber.value * inputNumber.value* inputNumber.value;

//  let newNumber = document.createElement('p');
//  newNumber.innerHTML = inputNumber.value;
//  newNumber.setAttribute("id","search")
//  historyContainer.appendChild(newNumber);
  
//  inputNumber.value = " "; 
// }


// calculateButton.onclick = calculateResult;

// calculateButton.addEventListener('click',calculateResult);


calculateButton.addEventListener('click',()=>{
   squaredResult.innerHTML = inputNumber.value * inputNumber.value;
  cubedResult.innerHTML = inputNumber.value * inputNumber.value* inputNumber.value;

 let newNumber = document.createElement('p');
 newNumber.innerHTML = inputNumber.value;
 newNumber.setAttribute("id","search")
 historyContainer.appendChild(newNumber);
  
 inputNumber.value = " "; 
});





function deleteSearchItem (){
  let toRemove = document.getElementById("search");
  historyContainer.removeChild(toRemove)
}