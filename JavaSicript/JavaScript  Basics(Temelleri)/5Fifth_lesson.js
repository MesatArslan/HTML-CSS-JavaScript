//* - - - - - - - - -  TÜR DÖNÜŞÜMLERİ (DATA TYPES) - - - - - - - - -
/*
?     strings, numbers, booleans, undefined and null.
?     object, function
*/


//* string veri tipinden number veri tipine çevirme
//? 1. yol
// let a = '15';
// // let a = Number('15)';
// let b = 5;
// let c = Number(a);

// console.log(a+b);
// console.log(c+b);
//? 2. yol

// let a = 5;
// let b = parsefloat("10");
// console.log(a+b);


//* number veri tipinden string veri tipine çevirme


// let a = String(55);
// // let a = (55).toString();
// console.log(typeof a);


//* sadece sayı olabilecek stringler sayıya çevirilebilir
// let x = [1,2,3,4];
// console.log(typeof x); //* object




//? - - - - - - - - -  BREAKPOİNT AND TOOLTİP - - - - - - - - -

//? TOOLTİP = bir şey yazmaya çalışırken üstte çıkan kutucuklar
// toString gibi mesela
//? BREAKPOİNT  = kullanarak uzun bir kodda hata yaptığımızda teker teker çalıştırarak koddaki hatayı bulmamızı kolaylaştırır

//?  source tagı içerisinde çalıştırır ve kodu teker teker kontrol edebiliriz
//? debugger anahtar kelimesini nereye koyarsak ordadan başlar
// let a = 5 ;
// debugger;
// let b = 10;
// let c = 11 ;
// let d = a + b;
// let e = a+ b + c;

// console.log(a+b+c+d+e);





//? -------- - - - - - - - -  DÖNGÜLER - - - - - - - - ---------
/*
*1- For
*2- While
*3- Do-While
*4- ForEach
*/

//? "For" Döngüsü-------
//* for(değişken ; koşul ; artırma-azaltma){
//*   //Kodlar   
//*}

//? bu döngü birden 10'a kadar yazdırır
// for(let i=1; i<=10; i++){   
//     //* ilk iki sıraya bakar daha sonra i de bir arttırma yapar
//     //* koşulun true döndürmesi gerekir
//     //* false döndüğü an for döngüsünü kırar
//     //* i sürekli 1 artar 10'a kadar
//     console.log(i); 
// }

// //* tekleri yazdırır
// for(let i=1; i<=10; i+=2){   
//     console.log(i); 
// }

// //* çifleri yazdırır
// for(let i=0; i<=10; i+=2){   
//     console.log(i); 
// }

// /*
//  * Mahmut 
//  * naber
//  * Mahmut
//  * naber 
//  */
// for(let i = 0; i <= 10; i++){
//     if(i%2==0){
//         console.log("Mahmut");
//     }else{
//         console.log("naber");
//     }
// }


//* 50'den 1'e kadar git ve topla
// let sum = 0;
// for(let i =50; i>=1; i--){
//     sum = sum + i;
//     console.log(i);
// }
// console.log("Sum: " + sum);



//? "While" döngüsü-------
//* kullanım şekli
// while(koşul){
    //* "koşul" true'ysa kodları okur false ise kodları okumadan devam eder
//     //kodlar 

//     //sayacın değerini atarız
    //* for döngüsünde başta yaptığımız koşul artırma azaltma işlemini while döngüsünde sonda yaparız
// }


//* 1'den 10'a kadar yazdıralım

// let sayac = 1;

// while(sayac<=10){
//     console.log(sayac);
//     sayac++;
// }

//* 1'den 10'a kadar sayıların teklerini ve çiflerini yazdıralım

// let sayac = 0;

// while(sayac<=10){
//     if(sayac%2==0){
//     console.log(sayac);
//     }
//     sayac++;
// }

// let sayac = 0;
// while(sayac<=10){
//     if(sayac%2==1){
//     console.log(sayac);
//     }
//     sayac++;
// }

// let sayac = 1;
// while(true){
//     console.log(sayac);
//     if(sayac == 7){
//         break;  //* break kullanarak sonsuz döngüleri kısıtlayabiliyoruz
//     }
//     sayac++;
// }



//? " Do-While" döngüsü-------
//* nasıl kullanılır
// do{
     //kodlar        //*önce do'daki kodları çalıştırıyor sonra while'daki koşula bakıyor true'ysa başa dönüyor do'daki kodları bir daha çalıştırıyor, while koşulu false olana kadar do tekrarlanıyor.
// }while(koşul);

//* 1'den 10'a kadar yazdıralım
// let sayac = 1;
// do{
//     console.log(sayac);
//     sayac++;
// }while (sayac<=10);


//* ehliyet yaş sorgusu

// let age = 23;

// do {
//     console.log("You can take driver licance"); //* burda kkodu çalıştırır ardından while'ın doğru olmadığını görür ve tekrar çalıştırmaz
// } while (age>=25);

//* 1'den 20'ye kadar olan tek sayıların toplamı
// let sayac = 1;
// let sum = 0;
// do {
//     if(sayac%2==1){
//         sum+=sayac;
//     }
//     sayac++;
// } while (sayac<=20);

// console.log(sum);



//? -------- - - - - - - - - BREAK AND CONTİNUE - - - - - - - - ---------
//? Break--
//? döngüyü kırar ve daha sonra çalışmasını engeller
//* 1'den 10'a kadar sayıları yazdıralım 8'e geldiğimizde döngüden çıkalım

// let sayac = 1;

// while (sayac<=10) {
//     console.log(sayac);
//     if(sayac == 8 ){
//         break;
//     }
//     sayac++;
// }

//? Continue--
//? döngüyü 1 kerelik kırar ve devam eder
//* 1'den 10'a kadar yazdırıcam ama 8 olmasın
// let sayac = 1;

// while (sayac<=10) {
//     sayac++;
    
//     if (sayac==8) {
//         continue;   //*continue'dan sonraki satırları görmez ve çalıştırmaz-- olduğu döngünün sonuna kadar
//     }
//     console.log(sayac);
//     if (sayac==10) {
//         break;
//     }
// }


//* -----Example----
//* Çarpım Tablosu

/*
* 1x1=1
* 1x2=2
* 1x3=3
* ...
* ...
* ...
* ...
* ...
*/


// for(let i =1; i <=10; i++){
//     for(let j=1; j<=10; j++){
//         console.log(i + "x" + j + "=" + (i*j));
//     }
//     console.log("----------------------------");
// }


//* ASAL SAYI BULMA UYGULAMASI
//? 1.yol 
// let number = Number(prompt("Write number: "));
// let sayac = 0;

// for(let i = 2; i < number; i++){
//     if(number % i == 0){
//         console.log(number + " is not a prime number.");
//         sayac ++;
//         break;
//     }
    
// }
// if(sayac==0){
//     console.log(number + " is a prime number.");
// }

//? 2.yol 
// let number = Number(prompt("Write number: "));
// let sayac = 0;

// for(let i = 2; i < Math.floor(number/2); i++){
//     if(number % i == 0){
//         console.log(number + " is not a prime number.");
//         sayac ++;
//         break;
//     }
    
// }
// if(sayac==0){
//     console.log(number + " is a prime number.");
// }

//* Faktoriyel hesaplama uygulaması

// let number = Number(prompt("Number: "));
// let multiply = 1;
// for( let i = 1; i<=number; i++){
//     multiply *=i
// }

// console.log("result: "+multiply);


//* Armstrong sayısı hesaplama ( 153-370-407)(her bir rakamın küpünün toplamı kendisini verir )
// let number  = prompt("Write a number: ");
// let sum = 0;
// for(let i = 0; i <= number.length; i++){ //* number.length = 3'tür-- i değeri 0,1,2 değerlerini alır
//     let number1 = Number(number.charAt(i));
//     sum +=number1*number1*number1;
// }
// if(Number(number)== sum){ //* burada sayıyı "Number" içerisine almasakta olur 
//     console.log(number + " is a armstrong number.");
// }else{
//     console.log(number + " is not a armstrong number.");
// }




//* - - - - - - - - -  SWİTCH   CASE - - - - - - - - -

// switch(koşul){

// case 1 :
//     // kodlar           //* if else blokları gibi 
// break;                  //*switch'in koşul kısmındaki bölüm hangi case'in önündekine eşitse o kodlar çalışır hiçbirine eşit değilse default kodları çalıştırılır

// case 2:
//     // kodlar
// break;

// case 3 :
//     // kodlar
// break;

// default:
//     //kodlar
// break;

// }


//* - - - - - - - - - EXAMPLE - - - - - - - - -


// let number = prompt("Enter a number between 1-5: ");    // gelen sayı string

// switch(number){
//     case "1":
//         //kodlarınız
//         console.log("You entered 1.");
//     break;
    
//     case "2":
//         //kodlarınız
//         console.log("You entered 2.");
//     break; 
    
//     case "3":
//         //kodlarınız
//         console.log("You entered 3.");          //* break'i kullanıyoruz çünkü hangi kod çalışırsa altındaki break'i çalıştırır ve devamını okuma gereği duymaz sistemin işimizi gördükten sonra luzumsuz çalışmasını engeller 
//     break;

//     case "4":
//         //kodlarınız
//         console.log("You entered4.");
//     break;

//     case "5":
//         //kodlarınız
//         console.log("You entered 5.");
//     break;
    
//     default:
//         console.log("Your number should be between 1-5:")
//         break;
// }




//* - - - - - - - - -  ATM APPLİCATİON - - - - - - - - -

/*
*    1-Bakiye görüntüleme
*    2-Para çekme
*    3-Para yatırma
*    4-çıkış
*/


// let newline = "\r\n"

// let balance = 1000;

// let text = "1-Bakiye görüntüleme." + newline
// + "2-Para çekme" + newline
// + "3-Para yatırma" + newline
// + "4-Çıkış" + newline
// + "Lütfen bir değer giriniz.";


// let selection = prompt(text);
// switch(selection){
//     case "1":
//         alert("Your balance" + balance);
//         break;
    
//     case "2":
//         let withdrawAmount = Number(prompt("Withdraw amount: "));
//         if(withdrawAmount <= balance){
//             balance = balance - withdrawAmount;
//             alert("You withdrawed." + newline
//             + "Avaliable balance: " + balance);
//             break;

//         }else{
//             alert("Your balance is not enough." + newline 
//             + "Your balance is " + balance);
//         }
//         break;

//     case "3" :
//         let deposit = Number(prompt("Deposit amount: "));
//         balance = balance + deposit
//         alert("Avaliable balance is " + balance);
//         break;
        
//     case "4":
//         console.log("You logout.");
//         break;

//     default:
//         console.log("Please, Enter a number between 1 - 5.")
//         break;

// }



//* - - - - - - - - -  TYT PUAN HESAPLAMA - - - - - - - - -

/*
 ?      SORULAR
 *      1-Türkçe 40         -4 puan her soru
 *      2-Matematik 40 
 *      3-Fen Bilimleri 20
 *      4-Sosyal Bilgiler 20
 * 
 *      ------> 100 puanı ösym veriyor
 *      ------> Okul puanı max 60 veriyor
 */


//  let turkceTrue, turkceFalse = 0;
//  let matematikTrue, matematikFalse = 0;
//  let fenTrue, fenFalse = 0;
//  let sosyalTrue, sosyalFalse = 0;
//  let result = 0;
//  let schoolPoint = 0;

//  let newline = "\r\n";
//  let message = "Welcome to TYT Point Calculator. :<)" + newline
//                 +"1-Calculate Point" + newline
//                 +"2-Exit";

// // alert(message);

// let select = prompt(message);
//     switch(select){
//         case '1':

//             schoolPoint = Number(prompt("Your school point"))

//             turkceTrue = Number(prompt("Türkçe doğru sayısı: "));
//             turkceFalse = Number(prompt("Türkçe yanlış sayısı: "));

//             matematikTrue = Number(prompt("Matematik doğru sayısı: "));
//             matematikFalse = Number(prompt("Matematik yanlış sayısı: "));

//             fenTrue = Number(prompt("Fen doğru sayısı: "));
//             fenFalse = Number(prompt("Fen yanlış sayısı: "));

//             sosyalTrue = Number(prompt("Sosyal doğru sayısı: "));
//             sosyalFalse = Number(prompt("Sosyal yanlış sayısı: "));

//             let correct =turkceTrue + matematikTrue + fenTrue + sosyalTrue;
//             let wrong = turkceFalse + matematikFalse + fenFalse + sosyalFalse;
//             let remaningCorrectNumber = correct - (wrong/4);
//             result = (remaningCorrectNumber*3.333) + 100 + (schoolPoint*0.6);

//             alert("TYT Puanınız: " + result);
//             break;

//         case '2':
//             alert("You log out.");
//             break;
        
//         default:
//             alert("You realy don't enter valid nubmer!!!");
//             break;
//     }

