//* html'de <head> tagları içine <script> açtığımızda javascript kodları yazabiliyoruz.
//* ama </body> kısmının hemen üstüne yazmak daha iyi çünkü kodları yukarıdan aşağı okuduğu için önce bilgiyi görüp daha sonra javasicripti uygulaması daha mantıklı olur.

//* JavaScripti de "<script src="app.js"> </script>" kodu ile entegre ediyoruz html sayfasına

// console.log("Mahmut Esat Arslan")




//* Document write ile çıktı verme

// document.write("Hello World <br>");
// document.write("Mahmut Esat Arslan <br>");
// document.write(55 +"<br>");


// console kısmının log metodunu kullanırız.

// console.log("Hello World");
// console.log("Mahmut Esat Arslan");
// console.log(3.53);
// console.log(true);
// console.log({name:"Mahmut Esat", surname:"Arslan"});

// // console.clear();

// let a=5;
// let b=10;

// console.log("2 number sum: ", a+b);
// console.log("2 number sum: " + a+b);

// console.clear();

//* window objesi bütün fonksiyonları görmemizi sağlar incelemek için kullanırsın

// console.log(window);
// console.log(document.location.host);


// // alet(uyarı) methodu ile çıktı verme işlemleri 

// let a=5;
// let b=10;

// alert("Merhaba");
// alert("2 number sum: " + (a+b));
// alert("Please don't push F5");


// console.log(location.port);
// console.error("Hata oluştu");


// web sayfasındaki incele kısmından da "console.log" işlemini kullanabiliriz.
// "source" kısmından kodları teker teker inceleyip hatamızı bulmamıza yarıcak
// "application" kısmındaki "local storag" a kaydettiğimiz herşey kaydedilir ve çıktığımızda silinmez lakin  "session storag" a kaydettiğimiz herşey  web sitesinden çıktığımızda silinir.
// "network" te gelen giden trafiği kontrol etmemize yarar.




//*#############################################

//* YORUM SATIRI KULLANIMI

// yazılımcıyı bilgilendirmek amacıyla kullanılır

// yorum satırı 1
// yorum satırı 1
// yorum satırı 1
// yorum satırı 1
// macbookta  command+k+c yorum satırına çevirme

// uzun yazılarda
/*
    şaksjfda
    wfeaw
    ef
    aw
    ef
    awe

    fsadf
a
*/


// ? bu bir bilgilendirme yorumudur 
// ! burası çok önemli dikkat et
// TODO :  Burası şöyle yapılması gerekiyor
//* Test mesage...



//*#############################################

//* Var-Let-Const

/* 
 *      ------ SCOPE(kapsam, erişilebilirlik)------
  
 *      --> Global Scope
 *      --> Function Scope                      // değişken(variable) demek
 *      --> Block Scope
 
 */

// var variableName= 10;  //* Global Scope
//* Sen buna heryerden erişebilirsin.

// var a = 5;
// if(true){

// }

// function method1(){
//     console.log(a)
// }
// method1();



// function method1(){       //* Function scope
//     var number = 10; //* sadece kıvırcık parantezler içindeki alanda ulaşabilirsin bu değişkenlere
                        //* dışarıdan ulaşılamaz veya kullanılamaz
//     console.log(number)
// }
// method1();




// function method1(){
//     if(true){
//         var a = 5; //* Block scope 
                      //*fonksiyonun içinde if, while, for,... gibi yerlerde tanımlanıyorsa block fonksiyon denir sadece tanımlandığı kısmın içinde geçerlidir
//     }
//     while(true){  

//     }
//     for(let i = 0 ; i<=10; i++){

//     }

// }



//* var c = 10; //* Global scope
// function method1(){
    //*    var b = 10;  //*Function scope
//     if(true){
//*        var a = 5; //* Block scope 
//     }
//     while(true){  

//     }
//     for(let i = 0 ; i<=10; i++){
//*        var a = 5; //* Block scope 
//     }

// }




//*#############################################

//* var-let-const       // let ve const 2015 yılında yada 2016 yılında çıktılar daha hızlı kodlama yapmak için çıkarıldılar



/*
 * Değişken nedir?

 * diğer dillerde değişken tanımlarken 
 * int-str-float-double vb ifadeler kullanılır ama
 * javascripte 
 * var-let-const kullanılır
 
 * let number =10;
 */



//* "var" bir fonksiyonun içinde tanımlandığında function scope lakin fonksiyonunun içindeki  bir if'te tanımlansada function scope oluyor. if'in içinde yazsakta dışarıdan ulaşabiliriz.
//* var fonksiyonunun eksileri heryerden ulalşılabildiği için --- Ram bellekte çok fazla yer kaplıyor.(let ve constun çıkma nedeni).
//* let-const : block scope özelliğine sahiptir. dışarıdan ulaşılamaz.

// function greet1(){
//     var greet = "Hi Everbody"; //* function scope
//     console.log(greet);
//     if(true){
//         var x = 10; //* function scope
//         let b = 10; //* Block scope
//         const c = 10; //* Block scope
//         console.log(b)
//         console.log(c)

//     }

//     console.log(greet)
//     console.log(x)
    
// }
// greet1();


//* a'ya en son verdiğimiz değer geçerlidir
// var a = 5;
// var a = 10;
// console.log(a);


//* bize let'e 2 değer veremessin diyor 1 tane oluşturduğun için daha oluşturamassın diyor
//* bu const içinde geçerlidir (cons -- constant(sabit)'ten geliyor)
// if(true){
//     let a = 5;
//     let a = 10;
// console.log(a);
// }


//* let ve const arasındaki fark 

// const a = 5;   //* constta böyle değiştirmene izin vermez. değiştirilemez. (isim veya şifre gibi şeyleri saklmak için kullanılır)
// a = 5;
// console.log(a)

// let b = 5;  //* let'te böyle değiştirmene izin verir
// b= 5;
// console.log(b)

// const user = {
//     username : "Mahmut ",
//     password : "123"
// }

// user.username = "Mahmut Esat"; //* böyle yaptığımızda constu değiştiremeyiz ama objelerinin aldığı değerleri değiştirebiliriz

// console.log(user)




//*#############################################

//? Veri tipleri

/*
*1-String
*2-Number
*3-Boolean
*4-Null
*5-Undefined
*6-Object
*7-Function
*/


//* 1-) string (çift tırnak içinde yazdığımız herşey string ifadelere girer)
// let isim = "Mahmut Esat";
// console.log(isim);
// console.log(typeof isim);

//* 2-) number ()
// let number1 = 10;
// console.log(number1);
// console.log(typeof number1);

// string string le toplanır number number ile  eğer ikisini toplamaya kalkarsak birleştirir

//* 3-) boolean : true  and  false
// console.log(5<2);
// console.log(5<8);

//* 4-) null : (boş) yani içerisinde herhangi bir şey yok
// let a = null;
// console.log(a);

//* 5-) undefined : tanımlanmamış
// let a;
// console.log(typeof a);

//* 6-) object 
// let human = {
//     name : "Mahmut Esat",
//     age  : 30
//     // object veri tipi 
// }
// console.log(typeof human);

// let numbers =[1,2,3,4,5];
// console.log(typeof integeres)

//* 7-) Function
let func = function(){
    console.log("Hello");
}
func();
console.log(typeof func);