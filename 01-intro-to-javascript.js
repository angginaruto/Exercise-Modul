//-------------------------------------- Soal Slide -----------------------------------------//
// Write a code to find area of rectangle
let panjang1 = Number(prompt("Masukan nilai panjang : "))
let lebar1 = Number(prompt("Masukan nilai lebar : "))
const luas1 = panjang1*lebar1 
console.log(luas1)

// Write a code to find perimeter of rectangle
let panjang2 = Number(prompt("Masukan nilai panjang : "))
let lebar2 = Number(prompt("Masukan nilai lebar : "))
const keliling2 = 2*panjang2 + 2*lebar2 
console.log(keliling2)

// Write a code to find diameter, circumference, and area of a circle
let jari_jari = Number(prompt("Masukan jari-jari : "))
const diameter = jari_jari*2 
const keliling3 = 2*(Math.PI)*jari_jari
const luas2 = (Math.PI)*(jari_jari**2)
console.log(diameter)
console.log(keliling3)
console.log(luas2)

// Write a code to find angles of triangle if two angles are given 
let sudut_pertama = Number(prompt("Masukan sudut pertama : "))
let sudut_kedua = Number(prompt("Masukan sudut kedua : "))
const sudut_ketiga = 180 - (sudut_pertama + sudut_kedua)
console.log(sudut_ketiga)

// Write a code to convert days to years, months and days
let inputan = Number(prompt("Masukan hari : "))

const tahun = 365
const bulan = 30

let byk_tahun = Math.floor(inputan / tahun)
let sisa_tahun = inputan % tahun 

let byk_bulan = Math.floor(sisa_tahun/ bulan)
let hari = sisa_tahun % bulan

console.log(`banyak tahun : ${byk_tahun}, banyak bulan : ${byk_bulan}, banyak hari : ${hari}`)

// Write a code to get difference between dates in days.
let date1 = new Date("2022-01-20").getDay()
let date2 = new Date("2022-01-22").getDay()
const selisih = date2 - date1
console.log(selisih)