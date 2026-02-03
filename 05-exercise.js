import PromptSync from "prompt-sync";
const prompt = PromptSync()

/*
Write a function to get the lowest, highest and average value in the array (with and without sort function).
a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
*/
/*
const string_masukan = prompt("Masukan value array, pisahkan dengan koma : ")
const arr = string_masukan.split(",").map(Number)

let nilai_terkecil = arr[0]
let nilai_terbesar = arr[0]
let jumlah = 0
let rata2 = 0

for(let i = 0; i < arr.length; i++){
    if(nilai_terkecil > arr[i]){
        nilai_terkecil = arr[i]
    }else{
        nilai_terkecil 
    }
    if(nilai_terbesar < arr[i]){
        nilai_terbesar = arr[i]
    }else{
        nilai_terbesar
    }
    jumlah += arr[i]
    rata2 = jumlah/(arr.length)
}

console.log(`lowest : ${nilai_terkecil}, highest : ${nilai_terbesar}, average : ${rata2}`)
*/
/*
Write a function that takes an array of words and returns a string by concatenating the words in the array, separated
by commas and - the last word - by an 'and'.
a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
*/
/*
const string_array = prompt("Masukan value array, pisahkan dengan koma : ")
const Array = string_array.split(",")
let kalimat = ""

for(let i = 0; i < Array.length; i++){
    if(i < (Array.length - 1)){
        kalimat += `${Array[i]},`
    }else{
        kalimat += ` and ${Array[i]}`
    }
}

console.log(kalimat)
*/
/*
Write a function from a given array of numbers and return the second smallest number
a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2
*/
/*
const array_inputan = prompt("Masukan value array, pisahkan dengan koma : ")
const array = array_inputan.split(",").map(Number)

const nilai_terkecil = Math.min(...array)
let array_baru = array.filter(x => x != nilai_terkecil)
const nilai_terkceil_kedua = Math.min(...array_baru)

console.log(nilai_terkceil_kedua)
*/
/*
Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of
the same length.
a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
*/
/*
const arr_masukan1 = prompt("Masukan value array pertama, pisahkan dengan koma : ")
const arr_masukan2 = prompt("Masukan value array kedua, pisahkan dengan koma : ")

const arr1 = arr_masukan1.split(",").map(Number)
const arr2 = arr_masukan2.split(",").map(Number)
let penjumlahan_array = []

for(let i = 0; i < arr1.length; i++){
    let nilai = 0;
    nilai += arr1[i] + arr2[i]
    penjumlahan_array.push(nilai)
}

console.log(penjumlahan_array)
*/
/*
Write a function that adds an element to the end of an array. However, the element should only be added if it is not
already in the array.
a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]
*/
/*
let array_ = new Array(1, 2, 3, 4)
const nilai_baru = Number(prompt("Masukan nilai baru : "))

if(array_.includes(nilai_baru)){
    array_
}else{
    array_.push(nilai_baru)
}

console.log(array_)
*/
/*
Write a function from a given array of mixed data types and return the sum of all the number
a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
*/
/*
const mixed_array = ["3", 1, "string", null, false, undefined, 2]
let total = 0

for(let i = 0; i < mixed_array.length; i++){
    if(typeof mixed_array[i] == "number"){
        total += mixed_array[i]
    }
}

console.log(total)
*/
/*
Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the array
can only contain 5 elements).
a. Example :
■ maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
The function will return [5, 10, 24, 3, 6]
*/
/*
const maximum = Number(prompt("Masukan nilai panjang array maksimal : "))
const value = prompt("Masukan value array, pisahkan dengan koma : ")
let _array = []

for(let i = 0; i < maximum; i++){
    const value2 = value.split(",")
    _array.push(value2[i])
}

console.log(_array)
*/
/*
Write a function that will combine 2 given array into one array
a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]
*/
/*
const a = [1, 2, 3]
const b = [4, 5, 6]

const c = a.concat(b)

console.log(c)
*/
/*
Write a function to find duplicate values in an array
a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
*/
/*
const arry = [1,2,2,3,3,4,5,5]
const duplicate = arry.filter((item, index) => {
    return arry.indexOf(item) !== index;
});
console.log(duplicate)
*/
/*
Write a function to find the difference in 2 given array
a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]
*/
/*
const array_1 = [1,2,3,4,5]
const array_2 = [3,4,5,6,7]

function ubah_array(array_1, array_2){

    const array_3 = array_1.filter(item => !array_2.includes(item))
    const array_4 = array_2.filter(item => !array_1.includes(item))

    const array_akhir = array_3.concat(array_4)

    console.log(array_akhir)
}

ubah_array(array_1,array_2)
*/
/*
Based on the array below write a function that will return primitive data types only.
a. let arr = [1, [], undefined, {}, "string", {}, []];
b. The function will return [1, undefined, “string”]
*/
/*
function tipe_primitive(arr_1){
    arr_1 = [1, [], undefined, {}, "string", {}, []]
    let arr_2 = []

    arr_2 = arr_1.filter(item => typeof item == "number" || typeof item == "undefined" || typeof item == "string" || typeof item == "boolean")

    console.log(arr_2)
}
const arr_1 = [1, [], undefined, {}, "string", {}, []]
tipe_primitive(arr_1)
*/
/*
Write a function from the below array of number that will return sum of duplicate values.
a. let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
b. The function will return 40
*/
/*
const _arr_ = [10, 20, 40, 10, 50, 30, 10, 60, 10]

function hitung_duplikat(_arr_){

    let arr__ = _arr_.filter(item => _arr_.indexOf(item) !== _arr_.lastIndexOf(item))
    let total = 0
    for(let i = 0; i < arr__.length; i++){
        total += arr__[i]
    }
    console.log(total)
}

hitung_duplikat(_arr_)
*/
/*
Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
between rock, paper, or scissor.
a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'
*/

let masukan_user = prompt("Masukan (scissor/rock/paper) : ") 

function soal_final(masukan_user){
    const final = ['scissor', 'rock', 'paper']
    let hasil;
    let item_random = final[Math.floor(Math.random() * final.length)]
    
    if(item_random == masukan_user){
        hasil = "draw"
    }else if((item_random == "scissor" && masukan_user == "paper") || (item_random == "paper" && masukan_user == "rock") || (item_random == "rock" && masukan_user == "scissor")){
        hasil = "Lose"
    }else if((item_random == "scissor" && masukan_user == "rock") || (item_random == "paper" && masukan_user == "scissor") || (item_random == "rock" && masukan_user == "paper")){
        hasil = "Win"
    }
    console.log(`pc : ${item_random} and user : ${masukan_user}`)
    return hasil 

}
console.log(soal_final(masukan_user))