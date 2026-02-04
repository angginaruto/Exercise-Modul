/* Create a function to calculate array of student data
● The object has this following properties :
○ Name → String
○ Email → String
○ Age → Date
○ Score → Number
● Parameters : array of student
● Return values :
○ Object with this following properties :
■ Score
● Highest
● Lowest
● Average
■ Age
● Highest
● Lowest
● Average */

const students = [
  {
    name: "Andi",
    email: "andi@mail.com",
    age: new Date("2000-01-01"),
    score: 80
  },
  {
    name: "Budi",
    email: "budi@mail.com",
    age: new Date("1998-05-10"),
    score: 90
  },
  {
    name: "Citra",
    email: "citra@mail.com",
    age: new Date("2002-07-20"),
    score: 70
  }
];

function menghitung_data_siswa(students){
    const skor = students.map(array => array.score)
    const tanggal_lahir = students.map(array => array.age)
    let usia = []
    for(let i = 0; i < tanggal_lahir.length; i++){
        const sekarang = new Date()
        let usianya = sekarang.getFullYear() - tanggal_lahir[i].getFullYear()
        usia.push(usianya)
    }
    
    function average(...nilai){
        let total = 0
        for(let i = 0; i < nilai.length; i++){
            total += nilai[i]
        }
        return total / nilai.length
    }
    return {
        skor : {
            tertinggi : Math.max(...skor),
            terendah : Math.min(...skor),
            rata_rata: average(...skor)
        },
        usia : {
            tertinggi : Math.max(...usia),
            terendah : Math.min(...usia),
            rata_rata : average(...usia)
        } 
    }

}

console.log(menghitung_data_siswa(students))

/*
Create a program to create transaction
● Product Class
○ Properties
■ Name
■ Price
● Transaction Class
○ Properties
■ Total
■ Product
● All product data
● Qty

○ Add to cart method → Add product to transaction
○ Show total method → Show total current transaction
○ Checkout method → Finalize transaction, return transaction data
*/

class Product{
    constructor(name, price){
        this.nama = name,
        this.harga = price
    }
}

class Transaction{
    constructor(){ 
        this.total = 0,
        this.kuantiti = 0,
        this.produk = []
    }
    addToCart(produk, kuantitas){
        this.produk.push({
            nama: produk.nama,
            harga: produk.harga,
            kuantitas: kuantitas
        })
        this.kuantiti += kuantitas
        this.total += kuantitas * produk.harga
    } 
    showTotal(){
        console.log(`Maka totalnya menjadi : ${this.total}`)
    }
    checkOut(){
        return {
            total : this.total,
            kuantitas : this.kuantiti,
            produk : this.produk
        }
    }
}

const apple = new Product("Apple", 5000);
const banana = new Product("Banana", 3000);

const transaksi = new Transaction();
transaksi.addToCart(apple, 2);
transaksi.addToCart(banana, 1);

transaksi.showTotal(); 

console.log(transaksi.checkOut());


