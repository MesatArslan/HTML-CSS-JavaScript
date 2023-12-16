//* - - - - - - - - -  CONDİTİON(KOŞUL) STRUCTURES(YAPILARI) - - - - - - - - -
/*
 * if(koşul){
 *     kodlar
 * }
 * 
 *  --> birden fazla koşulun olduğu durumlarda
 * else if(koşul){
 *     kodlar
 * }
 * 
 *  --> if (true) doğruysa onun kodlarını yapar yanlış(false) ise - else kodlarını çalıştırır
 * else{
 *     kodlar
 * } 
 * 
 *  --> bu kodlarda her zaman bir tanesi çalışır birden fazlası çalışmaz 
 *  --> yukarıdan aşağı kodları okuyarak gelir true değer gördüğünde çalıştırır devamına bakmaz
 */
//? if çalıştı      // else kullanmak zorunda değiliz

// let note = 65;
// if(note>50){
//     console.log("You passed  , your note: " + note)
// }else{
//     console.log("Get out  , your note: " + note)
// }

//? else çalıştı    
// let note1 = 65;

// if(note>50){
//     console.log("You passed  , your note: " + note1)
// }else{
//     console.log("Get out  , your note: " + note1)
// }

//? numberı kullanarak numbera çeviriyoruz
// let age = Number(prompt("Your age: "));
// let salary = Number(prompt("Your salary: "))

// if(age >= 18 && salary>=3000){
//     alert("You can take the driving license.")
// }else{
//     alert("You can't take the driving license.")
// }


//* - - - - - - - - -  DERS ORTALAMASI BULMA - - - - - - - - -
//* vize1 %30, vize1 %30, Final %40

// let visa1 = Number(prompt("Enter your visa1 grade: "));
// let visa2 = Number(prompt("Enter your visa2 grade: "));
// let Final = Number(prompt("Enter your Final grade: "));

// let average = (visa1*0.3)+(visa2*0.3)+(Final*0.4);

// if(average>=60){
//     alert("Congratulations, you passed :))" + average);
//     console.log("Congratulations, you passed :))" + average);
// }else{
//     alert("You stayed, get well soon :((" + average);
//     console.log("You stayed, get well soon :((" + average);
// }



//* - - - - - - - - -  else if  yapısı - - - - - - - - -

/*
*          -              -              -
*           -             -             -
*            -            -            -
*             -           -           -
*              -          -          -
*               -         -         -
*               1.way   2.way   3.way

 */     

// //? aldığımız değer string
// let chosenPath = prompt("Please, Select your war: ");

// //? 
// if(chosenPath == 1){
//     alert("Chosen path " + chosenPath + ".way.");
// }
// else if(chosenPath == 2){
//     alert("Chosen path " + chosenPath + ".way.");
// }
// else if(chosenPath == 3){
//     alert("Chosen path " + chosenPath + ".way.");
// }else{
//     alert("Please choose a valid path.");
// }



//* - - - - - - - - -  birden fazla if  - - - - - - - - -
/*
 * if(koşul){
 *     //kodlar
 * }
 * if(koşul){
 *    //kodlar
 * }
 * if(koşul){
 *    //kodlar
 * }
 * --> hepsi birbirinden ayrı değerlendirilir her if gördüğünde ona bakar doğruysa çalıştırır
 * 
 * Example:
 *      Take name and TC
 *      Name : can not be left blank
 *      TC   : it should consist of 11 characters
 */

//? if kullanmadan yapımı

// let name = prompt("Wright your name: ");
// let tckn = prompt("Wright your TC: ");

// checkit(name,tckn);
// checkit2(name,tckn);


// function checkit(name , tckn){
//         if(name != ""){
//             if(tckn.length == 11){
//                 console.log("You succedd.");
//             }else{
//                 console.log("Enter your TC as 11 digits.");
//             }

//         }else{
//             console.log("please, Do not leave the name field empty!!!");
//         }
// }


// function checkit2(name, tckn){
//     if(name == ""){
//         console.log("please, Do not leave the name field empty!!!");
//         return;
//         //! bu retürnün kullanıldığı yerden sonrasını çalıştırma (returnün anlamı)
//     }

//     if(tckn.length != 11){
//         console.log("Enter your TC as 11 digits.");
//         return;
//     }

//     console.log("You succedd.");
// }



//* - - - - - - - - -  BODY MASS INDEX(Beden kitle endeksi)  - - - - - - - - -

// let mass = Number(prompt("Body mass: "));
// let length = Number(prompt("Body length(meter): "));
 
// let index = mass/(length**2);

// if(index < 18.5){
//     console.log("Your weight is below your ideal weight" + index);
// }else if(index > 18 && index <= 24.9){
//     console.log("Your weight is below your ideal weight" + index);
// }else if(index > 24.9 && index <= 29.9){
//     console.log("Your weight is ideal weight" + index);
// }else if(index > 29.9 && index <= 39.9){
//     console.log("Your weight is above your ideal weight(obez)." + index);
// }else{
//     console.log("Your weight is above your ideal weight(morbid obez)." + index);
// }

//* - - - - - - - - -  GAS STATİON(BENZİN İSTASYONU) - - - - - - - - -
/*
 *      Dizel  :  24.53
 *      Benzin :  22.53
 *      LPG    :  11.1
 *  
 * 
 *      * Gelen müşteriden alacağımız bilgiler
 *      ->Yakıt tipi
 *      ->Yüklenecek yakıt miktari
 */

let dizel = 24.53, benzin = 22.53, lpg = 11.1;
const newline = "\r\n";
const gastext = "1-Dizel  :  24.53" + newline+
                "2-Benzin :  22.53" + newline+
                "3-LPG    :  11.1 "

let gastype = prompt(gastext);
if(gastype=="1" || gastype=="2" || gastype=="3" ){
    let fuelliter = Number(prompt("Enter fuel liter: "));
    let amount = Number(prompt("Enter your amount: "));

    if(gastype == "1"){
        let amountToPaid = fuelliter*dizel;
        if(amountToPaid<amount){
            let balance = amount - amountToPaid
            alert("Refueling successful" + newline
            + "balance: " + balance);
        }else{
            alert("Your amount is not enough" + newline 
            + amountToPaid + newline
            + "Missing Amount: " + (amountToPaid-amount));
        }

    }else if("2" == gastype){
        let amountToPaid = fuelliter*benzin;
        if(amountToPaid<amount){
            let balance = amount - amountToPaid
            alert("Refueling successful" + newline
            + "balance: " + balance);
        }else{
            alert("Your amount is not enough" + newline 
            + amountToPaid + newline
            + "Missing Amount: " + (amountToPaid-amount));
        }
        
    }else if("3" == gastype){
        let amountToPaid = fuelliter*lpg;
        if(amountToPaid<amount){
            let balance = amount - amountToPaid
            alert("Refueling successful" + newline
            + "balance: " + balance);
        }else{
            alert("Your amount is not enough" + newline 
            + amountToPaid + newline
            + "Missing Amount: " + (amountToPaid-amount));
        }
        
    }
}
else{
    alert("Please, select a valid option.")

}