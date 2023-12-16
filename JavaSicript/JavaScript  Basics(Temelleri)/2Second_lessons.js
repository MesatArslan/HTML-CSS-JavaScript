//* - - - - - - - - -  ARİTMATİC OPERATORS  - - - - - - - - -

/*
 * - - - - - - - - - >     =    Atama operatörleri önemli
 *      +
 *      _
 *      *
 *      /
 *      %
 *      ++
 *      --
 *      ** 
 */

//*   '=' : ifadenin anlamı eşittir değil     anlamı  sağ taraftaki ifadeyi al sol taraftaki 'a' isimli kutunun içine koy
// let a = 5;
// let name = "Mahmut";

//*  '+' : bildiğimiz toplama veya birleştirmeye yarıyor


// let numbers1 = 70;
// let numbers2 = 50;      //toplar
// console.log(numbers1 + numbers2);

// let not1 = '5';
// let not2 = 3;       //birleştirir
// console.log(not1 + not2);


//*  '-' : bildiğimiz çıkarma işlemi
// let numbers1 = 70;
// let numbers2 = 50;      
// console.log(numbers1 - numbers2);


//*   '*' : bildiğmiz çarpma
// let numbers1 = 70;
// let numbers2 = 50;      
// console.log(numbers1 * numbers2);

//*    '/' : bildiğimiz bölme işlemi
// let numbers1 = 70;
// let numbers2 = 5;      
// console.log(numbers1 / numbers2);

//? Bir gelenektir uzayMusteriNo = '123' her yeni başlayan kelimenin başı büyük yazılır.

//*    '%' : bir sayının bölümünden kalanı verir 
// let numbers1 = 70;
// let numbers2 = 3;      
// console.log(numbers1 % numbers2);

//     '++' : 1 artırmak için kullanılır
// let a = 10;
// a ++;
// console.log(a);

//     '--' : 1 eksiltmek için kullanılır 
// let a = 10;
// a --;
// console.log(a);

//     '**' : bi sayının üssünü almak için kullanılır 
// console.log(4**2);




/*
 * - - - - - - - - ATAMA OPERATÖRLERİ - - - - - - - -
 *      =
 *      ==
 *      ===
 *      +=
 *      _=
 *      *=
 *      /=
 *      %=
 *      **= 
 */

//* '=' : bunu biliyoruz

//* '==' : eşittir anlamına gelir
// console.log(5==5);
// console.log(5==3);
// console.log(3=='3');  // veri tipine bakmaz içindeki değere bakar

//* '===' : hem tiplerinin hem de değerlerinin eşit olup olmadığına bakar
// console.log(5==5);
// console.log(5==3);
// console.log(3=='3');  // veri tipine bakmaz içindeki değere bakar

//* '+=' : eşittir anlamına gelir
//* '-=' : eşittir anlamına gelir
//* '*=' : eşittir anlamına gelir
//* '/=' : eşittir anlamına gelir
//* '%=' : eşittir anlamına gelir
//* '**=' : eşittir anlamına gelir
// let number = 4;
// number += 4;   //* aynı anlama gelir number = number + 4; 
// number -= 4;   //* aynı anlama gelir number = number - 4; 
// number *= 4;   //* aynı anlama gelir number = number / 4; 
// number /= 4;   //* aynı anlama gelir number = number * 4; 
// number %= 4;   //* aynı anlama gelir number = number % 4; 
// number **= 2;   //* aynı anlama gelir number = number ** 2; 
// console.log(number);
//? kodlar her zaman sağdan okunur




//* - - - - - - - - -  LOGİCAL(MANTIKSAL) OPERATORS  - - - - - - - - -

/*
*      && : ve
*      || : veya
*      !  : değil 
*/


//*  && : ve = bütün koşulların sağlanması gerekir
// let age = 20;
// let salary = 3500;
// let health = true;
// console.log( age>18 && salary>3000 && health == false)
// console.log( age>25 && salary>3000 && health == false)

//*  || : veya = tek koşulun sağlanması yeter
// let age = 20;
// let salary = 3500;
// let health = true;
// console.log( age>18 || salary>3000 || health == false)
// console.log( age>25 ||salary>3000 || health == false)

//*  !  : koşulun zıttını(tersini) alır  
// console.log(   !(5>3)   ); // normalde doğru ama yanlış diye alır




//* - - - - - - - - -  COMPARE(KARŞILAŞTIRMA) OPERATORS  - - - - - - - - -
/*
*      != : eşit değil mi
*      > : büyüktür
*      < : küçüktür
*      >= :  büyük eşittir
*      <= :  küçük eşittir 
*/

// let age = 23;
// console.log(age != 18); // true
// console.log(age > 18); // true
// console.log(age < 18); // false
// console.log(age >= 24); // false
// console.log(age <= 23); // true


