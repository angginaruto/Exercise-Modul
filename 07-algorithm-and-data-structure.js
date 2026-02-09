// Exercise 1
function majority_element(nums) {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
}

const nums = [3, 2, 3];
console.log(majority_element(nums));

const nums2 = [2, 2, 1, 1, 2, 2];
console.log(majority_element(nums2));

// Exercise 2
function konfersi_roman(romawi) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  for (let i = 0; i < romawi.length; i++) {
    const sekarang = map[romawi[i]];
    const selanjutnya = map[romawi[i + 1]];
    if (selanjutnya > sekarang) {
      total = total - sekarang;
    } else {
      total = total + sekarang;
    }
  }
  return total;
}

console.log(konfersi_roman("IV"));

// Exercise 3
function segitiga_paskal(nomor_baris) {
  const hasil = [];

  for (let i = 0; i < nomor_baris; i++) {
    const baris = [];

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        baris.push(1);
      } else {
        baris.push(hasil[i - 1][j - 1] + hasil[i - 1][j]);
      }
    }

    hasil.push(baris);
  }

  return hasil;
}

console.log(segitiga_paskal(3));

// Exercise 4
function cari_profit(array) {
  let nilai_terkecil = array[0];
  let hasil = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < nilai_terkecil) {
      nilai_terkecil = array[i];
    } else {
      const profit = array[i] - nilai_terkecil;
      if (profit > hasil) {
        hasil = profit;
      }
    }
  }
  return hasil;
}

console.log(cari_profit([7, 1, 5, 3, 6, 4]));
console.log(cari_profit([7, 6, 4, 3, 1]));
