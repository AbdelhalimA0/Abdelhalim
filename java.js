// let Voltage=window.prompt('Voltage');
// let Resistance=window.prompt('Resistance');
// console.log('V = '+Voltage);
// console.log('R = '+Resistance);
// console.log('I = ' +Voltage/Resistance);

// let name1=window.prompt('name1');
// let NAME1=[name1];
// let name2=window.prompt('name2');
// let NAME2=[name2];
// let name3=window.prompt('name3');
// let NAME3=[name3];
// console.log(NAME1);
// console.log(NAME2);
// console.log(NAME3);
// console.log(NAME1.concat(NAME2,NAME3));
// console.log(NAME1.concat(NAME2,NAME3).length);

// function calc() {
//   let a = parseFloat(document.querySelector("#num1").value);
//   let b = parseFloat(document.querySelector("#num2").value);
//   let op = document.querySelector("#operator").value;
//   let r;

//   if (op === "+") r = a + b;
//   else if (op === "-") r = a - b;
//   else if (op === "*") r = a * b;
//   else if (op === "/") r = b !== 0 ? a / b : "Error: ÷0";
//   else r = "wrong";

//   document.querySelector("#result").textContent = r;
// }

let x = 5;
let y = 100;

for (let i = 0; i < y; i++) {
  if (x * i < y) {
    console.log(x * i);
  } else {
    break;
  }
}

let checkNameLength = name => name.length % 2 === 0 ? "even" : "odd";
console.log(checkNameLength("Ahmed")); 
console.log(checkNameLength("Abdelhalim"));  
