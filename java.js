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

// let x = prompt("the number for the multiplication table (x):");
// let y = prompt("upper limit (y):");

// for (let i = 0; i < y; i++) {
//   if (x * i < y) {
//     console.log(x * i);
//   } else {
//     console.log('wrong numbers');
//   }
// }

// let name = prompt("Enter your name:");
// let checkNameLength = name => name.length % 2 === 0 ? "even" : "odd";
// console.log(`length of the name "${name}" is: ${checkNameLength(name)}`);
  

let person = {
  name: "Moo",
  age: 20,
  city: "Alex",
  information() {
    console.log(`I am ${this.name}, ${this.age} years old, from ${this.city}.`);
  }
};

let student = Object.create(person);
Object.assign(student, {
 name : "Abdelhalim",
age : 22,
university : "helwan University",
major : "science",
information : function () {
  console.log(`I am ${this.name}, a ${this.age}-year-old ${this.major} student at ${this.university}.`);
},
})

let doctor = Object.create(person);
Object.assign(doctor,{
name : "Dr. Amr",
age : 50,
teach : "chem department",
information : function () {
  console.log(`I am ${this.name}, doctor at ${this.teach}.`);

},
});
person.information();
student.information();
doctor.information();


function findMinMax(arr = []) {
  return [Math.min(...arr), Math.max(...arr)];
}


const [min, max] = findMinMax([4, 6, 2,22,3245,45,1, 3, 10]);
console.log(`Min: ${min}, Max: ${max}`);

