import promptSync from "prompt-sync";
const prompt = promptSync();

// Write a code to check whether the number is odd or even
const nilai = Number(prompt("Masukan nilai : "))
if(nilai % 2 == 0){
    console.log("nilainya genap")
}else{
    console.log("nilainya ganjil")
}

// Write a code to check whether the number is prime number or not
const prima = Number(prompt("Masukan nilai : "))
let banyak_pembagi = 0

for(let i = 2; i < prima; i++){
    if(prima % i == 0){
        banyak_pembagi += 1
    }
}
if(banyak_pembagi == 0){
    console.log("bilangan prima")
}else{
    console.log("bukan bilangan prima")
}


// Write a code to find the sum of the numbers 1 to N
const jumlah = Number(prompt("Masukan nilai : "))
let total = 0

for(let i = 1; i <= jumlah; i++){
    total += i;
}

console.log(total)

// Write a code to find factorial of a number
const faktorial = Number(prompt("Masukan nilai : "))
let hasil = 1

for(let i = 1; i <= faktorial; i++){
    hasil *= i
}

console.log(hasil)

// Write a code to print the first N fibonacci numbers
const fibonacci = Number(prompt("Masukan nilai : "))

let a = 0;
let b = 1;
let total2 = 0;

if(fibonacci == 1){
    console.log(0)
}else if(fibonacci == 2){
    console.log(1)
}else{
  for (let i = 2; i < fibonacci; i++) {
    let next = a + b;
    a = b;
    b = next;
    total2 = next
  }
  console.log(total2)
}
