//? - - - - - - - - - METHODS- - - - - - - - -

//* Parametresiz ve geriye döndürmeyen metot tanımlamak

/*
 * En basit metot tanımı
 * 
 * funciton yazdir(){
 *      //kodlar 
 * }
 * 
 ? Methodun sayfa içinde nereye yazıldığının herhangi bir önemi yoktur
 * 
 * 
 */


//* metodu burda hazırladık
// function yazdir(){
//     console.log("Mahmut");
// }

// //* burda da kodu çalıştırdık kopyala yapıştırıp yazmaya gerek yok
// yazdir();
// debugger; //* macbook ta "debugger" F10 tuşu ile kullanılır
// yazdir();




//* Parametreli geri döndürmeyen metot oluşturma

// function printt(name,surname){
//     console.log(name + " " + surname);
// }
// printt("Mahmut Esat","Arslan");


// function cube(number){
//     console.log(number*number*number);
// }
// cube(4);


// let age = Number(prompt("Enter your age: "));

// function check(age){
//     if(age>=18){
//         console.log("You can join licence exam.");
//     }else{
//         console.log("You can not join licence exam.");
//     }
// }
// check(age);



//* Geriye döndüren metot-------    "return"     ------ oluşturma

// function square(number){
//     let result = number*number;
//     console.log(result);
        //? void : geriye değer döndürmeyen metotlara denir bunun gibi
// }

// function cube(number){          //*fonksiyonun içinde return kullanarak fonksiyonda ürettiğimiz sonucu tekrar çağırdımız yere("cube(3)") bırakabiliyoruz-----return'den sonraki kısmı alır ve yukarıdaki let içine atar
//     let result = (number*number*number);
//     return result;
     //* ve return'den sonra yazdığımız kodlara ulaşılmaz
// }

// let returnvalue=cube(2);
// square(returnvalue);





//*-----------Example--------

//* Harf sayısı bulma uygulaması

// let text = "I am learning JavaScript in Ankara";

// let letter = prompt("Enter letter: ");

// let result = findletter(letter);

// alert("Letter's number: " + result);

// function findLetter(letter){
//     let sum = 0;
//     for(let i = 0; i<=text.length; i++){
//         if(text.charAt(i).toLowerCase()==letter.toLowerCase()){
//             sum +=1;
//         }
//     }
//     return sum;
// }



//* Mükemmel Sayı uygulaması
//* 6 - 28 - 496
//* "6"  :tam bölen sayılar 1 ,2 ,3 ,6  =toplamı 12  = sayının 2 katına eşitse "6"*2
//-----> bir sayının tam bölünmesi için yarısına kadar yolumuz var

// isPerfectNumber(Number(prompt("Enter Number: ")))


// function isPerfectNumber(number){
//     let sum = 0;
//     for(i = 2; i<=number/2; i++){
//         if(number % i == 0){
//             sum+=i;
//         }
//     }
//     sum += 1+number;
//     if(sum == number*2){
//         alert(number + " is a perfect number.");
//     }else{
//         alert(number + " is not a perfect number.");
//     }
// }



//* Decimal sayıyı binary'ye çevirme uygulaması

// convectDecimalToBinary(25);

// function convectDecimalToBinary(number){
//     let binary ="";
//     while(true){
//         binary += (number%2).toString();
//         number=Math.floor(number/2);
//         if(number==1){
//             binary +=1;
//             break;
//         }
//     }
//     let result = reverse(binary);
//     console.log(result);
// }


// function reverse(binary){
//     reverseBinary = "";
//     for(let i = binary.length-1; i >= 0; i--){
//         reverseBinary += binary.charAt(i);
//     }
//     return reverseBinary;
// }




//* Binary to Decimal conversation(ikili sayıdan 10'luk sayıya dönüşüm)

// let binary = "1010"

// function convertBinaryToDecimal(number){
//     let sum = 0;
//     let increase = 0;
//     for(let i = number.length-1; i >=0 ;i--){
//         if(Number(binary.charAt(i))!=0){
//             sum += Math.pow(2,increase)*Number(binary.charAt(i)); //? Math.pow(2,3) bu metod 2**3 manasına gelir üst alma metodudur
//         }
//         increase++;
//     }    
//     console.log("result " +sum);
// } 

// convertBinaryToDecimal(binary);




