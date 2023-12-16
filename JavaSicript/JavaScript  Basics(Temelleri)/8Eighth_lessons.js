//* --------------String Sinifinin Metotlar1--------------------

// charAt() //* indexe gitme 
// concat() //* 2 veya daha fazla stringi birleştirme
// indexof()    //* index numarası yazdırma
// lastindexof()
// toUpperCase () //* harflerin hepsini büyük harfe çevirir
// toLowerCase () //* harflerin hepsini küçük harfe çevirir
// trim()  //? kullanıcının kullandığı boşlukları sağdan ve soldan temizlemek için kullanırız
// slice() //* 2 değer veririz o iki değer arasını yakalar
// substring() //* bundada değer yakalarız
// replace() //* harfi yada kelimeyi değiştirmek için kullanabiliriz
// split()  //* kelimeleri ayırır örnek split(" ") yaptığımızda boşluklardan ayırır
//startsWith() //* verdiğin değerle başlıyormu başlamıyormu onu kontrol eder
//endswith() //* verdiğin değerle bitiyormu bitmiyormu onu kontrol eder



//* --------------Math Sinifinin Metotlar1--------------------
/* //? kullanım şekkilleri örnek  "Math.floor" gibidir
*1-Floor   // bir sayı verirsin ve noktadan sonrasını atar
*2-Ceil    // noktadan sonrasında herhangi bir küsürat varsa yukarıya yuvarlar
*3-Round   // noktadan sonrasına bakar lakin en yakın sayıya yuvarlar

*4-Max     // array(dizi)'deki değerin en büyük değerini verir
*5-Min     // array(dizi)'deki değerin en küçük değerini verir

*6-Random  // bize rastgele bir değer üretir
*7-Abs     // Mutlak değer almak için kullanılır
*8-Sqrt    // Bir sayının karekökünü almak için kullanılır
*9-Pow     // Bir sayının üssünü alır 2 değer alır  pow(3,4) dersek 3'ün 4'üncü kuvvetini alır
*----› PI Sayisi // metot değildir bir property'dir
*/



//* --------------Date(Tarih) Metotlar1--------------------

let tarih = new Date(); //* şu anın tarihini gösterir
// let birthdate = new Date(2002,4,2);

// console.log(tarih);
// console.log(tarih.getFullYear());
// console.log(tarih.getDate());
// console.log(tarih.getDay());
// console.log(tarih.getHours());
// console.log(tarih.getMilliseconds());
// console.log(tarih.getMinutes());
// console.log(tarih.getMonth()+1);
// console.log(tarih.getSeconds());
// console.log(tarih.toLocaleDateString());
// console.log(tarih.toLocaleTimeString());
// console.log(tarih.toLocaleString());

//? Set(atama) metotları
// console.log(tarih);
// tarih.setDate(24);
// tarih.setHours(13);
// tarih.setMonth(11);
// tarih.setHours(tarih.getHours()+2);
// console.log(tarih);



//* --------------DEĞER(PRIMITIVE) VE REFERANS(REFERANCE) TİPLERİ--------------------
// let name = "Mahmut";        //* Primitive
// console.log(typeof name);

// let array = [1,2,3,4];
// let object = {          //* Referance
//     name : "esat",
//     password : 123456
// }