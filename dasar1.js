//cara membuat variabel
var a = 'a';
let b = 'b';
const c = 'c';

//variabel bisa menampung tipe data string (text), integet/number, boolean, array, object

let nama = 'louis'; //string
let umur = '14'; //number
let apakahBenar = 'true' //boolean
let uang = '5000.5' //number namun ada koma

//operator aritmatika

let angka1 = 10;
let angka2 = 20;
console.log(angka1 + angka2, 'penjumlahan');
console.log(angka1 - angka2, 'pengurangan');
console.log(angka1 / angka2, 'pembagian');
console.log(angka1 * angka2, 'perkalian');
console.log(angka1 % angka2, 'modulus');


//disini kita belajar mengisi variabel
let penampungHasilOperatorArtimatika = angka1 + angka2;
console.log(penampungHasilOperatorArtimatika) //30

penampungHasilOperatorArtimatika = angka1 - angka2;
console.log(penampungHasilOperatorArtimatika) //-10

penampungHasilOperatorArtimatika = angka1 / angka2;
console.log(penampungHasilOperatorArtimatika) //ntah brp

penampungHasilOperatorArtimatika = angka1 * angka2;
console.log(penampungHasilOperatorArtimatika) //200

penampungHasilOperatorArtimatika = angka1 % angka2;
console.log(penampungHasilOperatorArtimatika) //10

//string juga bisa ditambah namun string gabisa dikurang dengan operator aritmatika
let firstname = 'louis';
let lastname = 'reyhan';
let fullname = firstname + ' ' + lastname;
console.log(fullname)
console.log(firstname + ' ' + lastname);
console.log(firstname - lastname) //NaN

//alur pembacaan code
//untuk membaca code kalian harus membacanya dari kiri ke kanan, dan dari atas ke bawah
//contoh

let number = 20;
console.log(number + 10) //30
number = 10;
console.log(number + 10) //20
number = false;
console.log(number + 10) //10

//pertanyaan? kenapa false itu - 10 tetap menjadi 10??? karena false = 0, true = 1;
console.log(true + 10) //11

//membaca error
//error itu kalian jangan takut, justru kalian harus takut kalau tidak ada yang namanya error dalam pemograman
//karena dalam pekerjaan kalau suatu fitur berjalan namun ada bug tapi tidak ada error, itu buat si programer rada
//muak buat mencari errornya atau letak kesalahannya

//contoh error
// const hewan = 'jerapah';
// console.log(hewan);
// hewan = 'buaya';

//auto komentar bisa dengan mencet ctrl + /

//tipsnya adalah selalu teliti, dan kalau ada error dibaca aja, dan belajar ngoding itu perlu kebiasaan
//karena ngoding itu adalah habit