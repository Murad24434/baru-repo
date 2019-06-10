// const TebakAngka = document.getElementsByTagName('button');
// //algoritma tebakan angka
// TebakAngka[0].addEventListener('click',function() {
//
//   var lagi = true;
//   while (lagi) {
//
//   //menangkap pilihan user
//   var user = parseInt(prompt('Masukan nomor tebakan anda :\nNB: angka 1-10'));
//   //membuat pilihan acak komputer
//   var crandom = Math.random();
//       com = Math.floor((crandom * 100)/10);
//       if (com == 0) {
//         com += 1;
//       };
//   //membuat aturan main
//   var hasil = ''
//   if (user == com) {
//     hasil = 'Benar'
//   }else if (user < com) {
//     hasil = 'Anda terlalu kecil'
//   }else{
//     hasil = 'Anda terlalu besar'
//   };
//   alert('Anda memasukkan angka : '+ user + ' dan komputer memiliki nilai angka : '+ com +' maka angka ' + hasil)
//   lagi = confirm('Mau main lagi ?');
//   }
// });
// angka.forEach(function(e) {
// let angka = [1,2,3,4,5,6,7,8,9];
//     console.log('ini angka ke-'+e);
// });
//
// const h1 = document.createElement('h1');
// const isih1 = document.createTextNode('ini judul hasil manipulasi');
// h1.appendChild(isih1);
//
// const letak = document.querySelector('.Tebakan');
// letak.before(h1);
// h1.setAttribute('id','judul');
// angka.push(10);
// angka.pop();
// console.log(angka);
for (var i = 1; i <= 10; i++) {
  console.log(i);
}
