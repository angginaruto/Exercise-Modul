import PromptSync from "prompt-sync"
const prompt = PromptSync()

/*Create a function that can create a triangle pattern according to the height we provide like the following :

1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/

const tinggi = Number(prompt("Masukan tinggi segitiga : "))

let array = []

function segitiga1 (tinggi){
    for(let i = 1; i <= tinggi; i++){
        array.push(i)
        console.log(array.join(" "))
    }
}

segitiga1(tinggi)

/*Create a function that can create a triangle pattern according to the height we provide like the following :

01
02 03
04 05 06
07 08 09 10
*/

const tinggi2 = Number(prompt("Masukan tinggi segitiga 2 : "))

function segitiga2(tinggi2){

    let array2 = []
    let idx = 0

    for(let i = 1; i <= tinggi2; i++){
        array2.push("0" + i)
    }
    for(let i = 1; i < array2.length; i++){
        let line = ""
        for(let j = 0; j < i; j++){
            line += `${array2[idx]} `
            idx++
        }
        console.log(line)
    }
}

segitiga2(tinggi2)


/*
Create a function that can loop the number of times according to the input we provide, and will replace
multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
● Parameters : n → total looping
○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz
*/

const masukan = Number(prompt("Masukan nilai : "))

function fizz_buzz(masukan){
    let array3 = []

    for(let i = 1; i <= masukan; i++){
        if((i % 3 == 0)&&(i % 5 ==0)){
            array3.push('FizzBuzz')
        }else if(i % 5 == 0){
            array3.push('Buzz')
        }else if(i % 3 == 0){
            array3.push('Fizz')
        }else{
            array3.push(i)
        }
    }
    console.log(array3.join(" "))
}

fizz_buzz(masukan)

/*
Create a function to calculate Body Mass Index (BMI)
● Formula : BMI = weight (kg) / (height (meter))2
● Parameters : weight & height
● Return values :
○ < 18.5 return “less weight”
○ 18.5 - 24.9 return “ideal”
○ 25.0 - 29.9 return “overweight”
○ 30.0 - 39.9 return “very overweight”
○ > 39.9 return “obesity”z
*/

const bb = Number(prompt("Masukan berat badan : "))
const tb = Number(prompt("Masukan tinggi badan : "))

function bmi(berat_badan, tinggi_badan){
    const BMI = berat_badan / ((tinggi_badan)/100)**2
    let hasil_BMI;
    if(BMI <= 18.5){
        hasil_BMI = "less weight"
    }else if(BMI > 18.5 && BMI <= 24.9){
        hasil_BMI = "ideal"
    }else if(BMI > 25.0 && BMI <= 29.9){
        hasil_BMI = "overweight"
    }else if(BMI > 30.0 && BMI <= 39.9){
        hasil_BMI = "very overweight"
    }else{
        hasil_BMI = "obesity"
    }
    return hasil_BMI;
}

console.log(`Maka hasil BMI-nya : ${bmi(bb,tb)}`)

/*
Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]
*/

let Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let hasil = Array.filter(item => item % 2 == 0)
console.log(hasil)

/*
Write a function to split a string and convert it into an array of words
○ Example : “Hello World” → [“Hello”, “World”]
*/
const string = prompt("Masukan sebuah kalimat : ")
function split_array(string){
    const arr = string.split(" ")
    return arr 
}
console.log(split_array(string))