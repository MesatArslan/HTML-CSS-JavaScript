//? - - - - - - - - - Dizilere Başlıyalım- - - - - - - - -
//? diziler object(obje) türünde veri tipidir

// let numbers = [0,1,2,3,4,"Mahmut",5,6,"Esat",7,8,9,"Arslan"];
//* indexe ulaşma
// console.log(numbers[8]);

//* indexin değerini değiştirme
// numbers[8] = "Mehmet"
// console.log(numbers[8]);

//* en son elemana ulaşma
// numbers[numbers.length-1];


// let array1 = ["Mahmut","Enes"];  //* boş bir dizi atayabiliyoruz
// let array2 = new Array("Mahmut","Enes"); //* bu nesne türetmedir lakin ram bellekte çok yer kaplar "array1" deki kullanım daha mantıklıdır


//* sonradan diziye ekleyebiliriz
// dizi1[0] = "Mahmut";
// dizi1[1] = "Enes";

// dizi2[0] = "Mahmut";
// dizi2[1] = "Enes";



//? - - - - - - - - - FOREACH DÖNGÜSÜ - - - - - - - - - dizilerde kullanılır

// let names = ["Enes","Buğra","Yakup","Necmi","Mustafa","Mahmut","Kübra","Ayşenur"]

// //* en sonda noktalı virgül var 
// names.forEach(function(name){  //* sırasıyla names dizisinin içindekileri name' e atar ve yazdırır
//     console.log(name);
// });


//? - - Dizi Metotları kullanımı - - - - -
// methodları ezberleme internetten araştır veya genellikle üstteki tooltipsleri oku

/*
* push : dizinin sonuna eleman ekler , ayrica dizinin uzunlugunu döner 
*unshift: dizinin basina eleman ekler, eleman sayisin geriye döner

*pop: dizinin sonundan eleman siler, eleman sayisini döner
* shift: dizinin basindan eleman sile, eleman sayisin1 döner

*splice(index,incdex) :eleman eklemek ve silmek icin kullanilir.

*toString: diziyi stringe cevirebiliriz.
*join: diziyi stringe cevirir. Farki ise araya eleman ekleyebiliriz

*concat : dizileri birlestirmek icin kullanilir.
*slice(dilimlemek): diziyi istenilen yerden bölüp yeni bir dizi olustu

*length : dizinin uzunlugunu verir.
*reverse: dizinin elemanlarin ters cevirmek

*split(bölmek) : belirli bir ifadeye göre bölüp diziye cevirmek.
*indexOf : elemanin index numarasini verir. 
*includes: verilen eleman içeriyor mu ona bakar
*/


// let cars = ["TOGG","TESLA","TOYOTA","PORCHE","RENAULT","BMV"];

//* eleman ekleme (push method)
// console.log(cars.length);
// cars.push("OPEL");
// console.log(cars.length);
// console.log(cars);

//* Unshift method (eleman ekleme)
// cars.unshift("HYUNDAİ");
// console.log(cars);c

//* Pop method (eleman silme)
// cars.pop();
// console.log(cars);

//* Splice method
// console.log(cars);
// cars.splice(0,0,"hyundai");   //* diziden birşey silmeden ekleme yapma 
// cars.splice(2,0,"hyundai");      //* 2.indexin yerine koyar
// console.log(cars);             

//* Tostring methodu
// let stringcars = cars.toString(); //* string bir şekilde yazılırlar
// console.log(stringcars);




//? -- --- - --- Example - - -- - --- - 
//* ÜRÜN Arama Uygulaması

// let product1 = {
//     name     : "ACER Swift",
//     categori : "Technology",
//     price    : 6.258
// }

// let product2 = {
//     name     : "ACER Nitro 5",
//     categori : "Technology",
//     price    : 15.987
// }

// let product3 = {
//     name     : "LENOVO V15",
//     categori : "Technology",
//     price    : 11.258
// }

// let product4 = {
//     name     : "LENOVO V16",
//     categori : "Technology",
//     price    : 13.258
// }

// let product5 = {
//     name     : "LENOVO Ideapad",
//     categori : "Technology",
//     price    : 20.258
// }

// let product6 = {
//     name     : "ACER Gaming",
//     categori : "Technology",
//     price    : 4.399
// }

// let products = [product1,product2,product3,product4,product5,product6];
// let filteredProducts = [];
// let productUserName = prompt("Enter a product name: ");

// pushFilteredProducts(products);
// writefilteredProducts(filteredProducts);

// function pushFilteredProducts(products){
//     products.forEach(function(product){
//         if(product.name.toUpperCase().includes(productUserName.toUpperCase(),0)){
//             filteredProducts.push(product);
//         }
//     });
// }

// function writefilteredProducts(products){
//     products.forEach(function(product){
//         console.log("----------------------------------------------");
//         console.log("|" + product.name + "|" + product.price + "|" + product.categori);
//         console.log("----------------------------------------------");
//     });
// }


//* - -- - -  - Kitap bulma Uygulaması - -- - -  - - * * * ** *  - --- -- - - - - 

// let book1 = { name   : "Her Şeyi Düşünme", author : "Anne Bogel", price  : 35, shelf:"1.3.Shelf"}
// let book2 = { name   : "Hiçbir Karşılaşma Tesadüf Değildir", author : "Hakan Mengüç", price  : 65, shelf:"2.5.Shelf"}
// let book3 = { name   : "İnsan Neyle Yaşar", author : "Tolstoy", price  : 34, shelf:"3.2.Shelf"}
// let book4 = { name   : "Zafer Sızlanarak Kazanılamaz", author : "Haluk Tatar", price  : 45, shelf:"4.4.Shelf"}
// let book5 = { name   : "Şeker Portakalı", author : "José Mauro de Vasconcelos", price  : 22, shelf:"5.1.Shelf"}


// let books = [book1,book2,book3,book4,book5];

// let shelf11 = {kod: '1.1.Shelf', show: false}
// let shelf12 = {kod: '1.2.Shelf', show: false}
// let shelf13 = {kod: '1.3.Shelf', show: false}
// let shelf14 = {kod: '1.4.Shelf', show: false}
// let shelf15 = {kod: '1.5.Shelf', show: false}

// let shelf21 = {kod: '2.1.Shelf', show: false}
// let shelf22 = {kod: '2.2.Shelf', show: false}
// let shelf23 = {kod: '2.3.Shelf', show: false}
// let shelf24 = {kod: '2.4.Shelf', show: false}
// let shelf25 = {kod: '2.5.Shelf', show: false}

// let shelf31 = {kod: '3.1.Shelf', show: false}
// let shelf32 = {kod: '3.2.Shelf', show: false}
// let shelf33 = {kod: '3.3.Shelf', show: false}
// let shelf34 = {kod: '3.4.Shelf', show: false}
// let shelf35 = {kod: '3.5.Shelf', show: false}

// let shelf41 = {kod: '4.1.Shelf', show: false}
// let shelf42 = {kod: '4.2.Shelf', show: false}
// let shelf43 = {kod: '4.3.Shelf', show: false}
// let shelf44 = {kod: '4.4.Shelf', show: false}
// let shelf45 = {kod: '4.5.Shelf', show: false}

// let shelf51 = {kod: '5.1.Shelf', show: false}
// let shelf52 = {kod: '5.2.Shelf', show: false}
// let shelf53 = {kod: '5.3.Shelf', show: false}
// let shelf54 = {kod: '5.4.Shelf', show: false}
// let shelf55 = {kod: '5.5.Shelf', show: false}

// let shelfes = [
//     [shelf51,shelf52,shelf53,shelf54,shelf55],
//     [shelf41,shelf42,shelf43,shelf44,shelf45],
//     [shelf31,shelf32,shelf33,shelf34,shelf35],
//     [shelf21,shelf22,shelf23,shelf24,shelf25],
//     [shelf11,shelf12,shelf13,shelf14,shelf15]];

// function createShelfes(){
//     console.clear();
//     let line = "";
//     for(let i = 0; i<shelfes.length;i++){
//         for(let j = 0; j<5; j++){
//             line += "|" + (shelfes[i][j].show ? shelfes[i][j].kod : "---");
//         }
//         console.log(line);
//         console.log("--------------------");
//         line = "";
//     }
// }


// function findcode(bookname){
//     let shelfkod = null;
//     books.forEach(function(book){
//         if(book.name.toUpperCase().includes(bookname.toUpperCase(),0)){
//             shelfkod = book.shelf;
//         }
//     });
//     return shelfkod;

// }


// function showOnShelf(shelfcode){
//     for(let i = 0; i < shelfes.length;i++){
//         for(let j = 0; j<5; j++){
//             if(shelfes[i][j].kod == shelfcode){
//                 shelfes[i][j].show=true;
//                 break;
//             }
//         }
//     }
// }

// createShelfes();

//  let bookname = prompt("Please, Enter a book name: ");
//  let shelfcode = findcode(bookname);


//  if(shelfcode != null){
//     showOnShelf(shelfcode);
//     createShelfes();
//  }else{
//     alert("There is no book you entered in the library.");
//  }