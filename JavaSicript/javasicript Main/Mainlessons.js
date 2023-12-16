//?------------SPREAD OPERATÖRÜ----------------
//* fonksiyonlarda kısaltmalarda işimize yarıyor

// let numbers = [10,20,30,40];

// function add(a,b,c,d){
//     console.log(a+b+c+d);
// }

// //*eski yöntem 
// add(numbers[0],numbers[1],numbers[2],numbers[3]);

// //*yeni yöntem
// add(...numbers);    //anlamları aynı

// const diller1 = ["Java","C#"];
// const diller2 = ["Php", "Python" , dillerl[0], diller1[1]]
// const diller2 = ["Php", "Python" , ...diller1];
// console.log(diller2);


// const numbers = [1,2,3,4,5,6,7,8,9];
// let [a,b,...kalanSayilar] = numbers;
// console.log(a,b,kalanSayilar);


//?------------For in --- For of Döngüleri ----------------

let names = ["Ali","Ayşe", "Ahmet","Muhammet"];

//* for in döngüsü
//* değişken tanımlama , in , dizi ismi
//* "index numaralarını verir" aklında in'den kalsın  in,index gibi
// for (let name in names){
//     console.log(name);
//     console.log(name, names[name]);  // indexin değerinede ulaşmak istiyorsak
// }


//* for of döngüsü 
//* indexin değerini verir 

// for (let name of names){
//     console.log(name);
//     console.log(name,names.indexOf(name));  // index'de ulaşmak istiyorsak
// }




//?------------ Map  ----> key(anahtar)  value(değer) ---------------- 
//* Map bir dizi türüdür

// const map1 = new Map();  // map oluşturduk ve map1'in içine koyduk

// map1.set(); // istediğmiz bir değeri atayabiliriz

//* SET    // map'in içine bir şey koyma 
// map1.set(34,"Istanbul")
// map1.set(1,"Adana")
// map1.set(6,"Ankara")
// map1.set(52.5,"Unye")

 //* GET  // map'ten bir şey alma
// console.log(map1.get(52.5));
// console.log(map1.get(34));

// const value1 = map1.get(1);
// console.log(value1);

//* SİZE  // map'in boyutu
// value = map1.size;


//* DELETE   // map'ten bir şey silme
// value = map1.delete(6)


//* HAS  // map'in içinde var mı kontrol ediyoruz
// console.log(map1.has(34));
// console.log(map1.has(15));


 //* For of map üzerinde kullanımı
// for(let [key,value] of map1){
//     console.log(key,value);
// }

// for(let value of map1){
//     console.log(value);
// }


// const keys = Array.from(map1.keys());

// keys.forEach((key)=>{
//     console.log(key, map1.get(key));
// })


//* eğer sadece deperleri almak istiyorsak

// for(let key of map1.keys()){ //* keys diyerek içindekilere keylere direk ulaşabiliyoruz
//     console.log(key);
// }

// for(let value of map1.values()){
//     console.log(value);
// }


//* Map'ten Array'e çevirmek
//* map bir array oldu ve mapin içindeki herşey de 2'li olarak bir array'e dönüştü
// const array = Array.from(map1);
// console.log(array);

//* Array'i Map'e çevirme   
//* eğer elimizde bir array varsa onu map'e çevirebiliriz
// const map2 = new Map(Array2)





//?------------ SET KULLANIMI ---------------- 
// değerlerin bir kere tutulmasını istiyorsan set kullanmalısın

// const set = new Set(); //* setimizi oluşturduk

// //* add kullanımı
// //* bir değer sadece bir kere eklenebilir

// set.add(true)
// set.add(3.14)
// set.add("Mahmut")
// set.add(7)
// set.add({username:"Esat", password: 1234});
// set.add([1,2,3,4])


//* Size 
// console.log(set.size)

//* delete
// set.delete("Mahmut")
// set.delete([1,2,3,4]) //*böyle referans tipli olanları direk silemeyiz bunları bir değişkene tanımlayıp aynı yere baktırdıktan sonra o değişken aracılığıyla silebiliriz
// console.log(set.size)


// HAS methodu
// console.log(set.has(3.14))


//* seti array'e çevirebiliriz yada tam tersini yapabiliriz
// const set = new Set(Array); //* bir array'de böyle set yapılır 


//?------------ TEMPLATE LİTERALS ---------------- 

// function write(firstName , lastName){
  // console. log("Isim : " + firstName +" " + "Soyisim :" + lastName)
  //Template Literals ile kullanmak
  // ALT GR + IKI KEZ NOKTALI VIRGÜL TUSU.
//     console.log(`Isim : ${firstName} Soyisim : ${lastName}`)
// }
// write("Enes" , "Bayram")

// function write(firstName , lastName){
    // console. log("Isim : " + firstName +" " + "Soyisim :" + lastName)
    //Template Literals ile kullanmak
    // ALT GR + IKI KEZ NOKTALI VIRGÜL TUSU.
//     console.log(`
//     Isim : ${firstName} 
//     Soyisim : ${lastName}
//     `)}
// write("Enes" , "Bayram")





//?------------ OOP Giriş Object Orianted Programming---------------- 
//* debugger çok önemli koddaki hatayı anlamanı ve işleyişi anlamanı kolaylaştırır


// class Human{ //* sınıf

    /*
    * 1- Özellikler
    * 2- Yapıcı metot
    * 3- function
    */

//     constructor(name,age,job,salary){  //* yapıcı method //* consructor yardımıyla aşağıdaki değerler doluyor //* bir şeyi inşa ediyoruz
//         this.name = name;           //* let gibi bir değişken tanımlamadır
//         this.age = age;             //* sağ taraf yukarıdan gelen parametreler
//         this.job = job;             //* sol taraftakiler değşken ismidir
//         this.salary = salary;
//     }//* fonksiyon yazıcaksan constructor'dan sonra yazıcaksın
//     showInformation(){
//         console.log(
//         `Name: ${this.name}
//         Age: ${this.age}
//         Job: ${this.job}
//         Salary: ${this.salary}`
//         )
//     }
// }

// const human1 = new Human("Mahmut", 25,"software" , 100000); //* bu olaya nesne oluşturmak diyoruz
// //* oluşturduğumuz nesneyi "human1" değişkenine atıyoruz
// //* command tuşuna basıp herhangiyi birşeye basarsan nereden geldiğini anlayabilirsin

// human1.showInformation();

// console.log(human1.name) //* diyerek ayrı ayrı da ulaşabiliriz



//?------------ STATİC NEDİR?---------------- 
//* bir  sınıfın içindeki metot veya özellik static olarak tanımlandıysa bu değere nesne üzerinden ulaşamayız
//* static olarak tanımlandıysa buna sınıf ismi üzerinden erişebiliriz
//* static olarak tanımlanmadıysadıysa buna nesne üzerinden erişebiliriz

// class Mathematic{

//     static collect(a,b){
//         console.log(a+b)
//     }

//     substract(a,b){
//         console.log(a-b)
//     }

//     multiplication(a,b){
//         console.log(a*b)
//     }

//     divide(a,b){
//         console.log(a/b)
//     }


// } //* nesne türetmek istiyorsan "class" ın dışıına yazman gerekiyor


// const math = new Mathematic(); //* biz constructor tanımlamasakta derleyici bizim yerimize bir tane tnaımlıyor

// math.collect(10,15); //* bize hata verir
// Mathematic.collect(10,15);




//?------------ INHERITANCE (MİRAS ALMA KALITIM) ---------------- 
//* kod tekrarını engellemek için kullanıyoruz sınıflar arası
//* eğer kod tekrarlaması var sa  kodu iyi yazamamışsındır düşün git çay kahve iç ve düşün

//! this kullanımı ayrıntılı bakarsın
// console.log(this);

//* super : başka "class" lardaki methodlara felan ulaşmak için anahtar kelimedir
//* super() methodu  


// class Person {
    // console.log(this);

//     firstname = "Enes";
    
//     write(){
//     console.log("Person Write.",this.firstname);
//     }
// }

// class Student extends Person{  //* "extends(genişletme)" in anlamı ben personı miras alıyorum (örnek içindeki firstname kısmını tekrar yazmamıza gerek kalmıyor yada diper kısımları)

//     write(){
//         console.log("Student Write",this.firstname);
//         console.log(super.write)
//     }

// }

// const student1 = new Student();
// student1.write();



//* Classlar oluştuğu zaman aslında kendini "object" sınıfından "extend" yapar
//* örnek "class person extend object" gibi düşün




class Person {
    constructor (firstName, lastName, salary){
        this.firstName = firstName;
        this. lastName=lastName;
        this. salary = salary;
    }
    writeInfo(){
        console. log(this.firstName, this. lastName, this.salary)
    }
}


class Student extends Person{
    constructor(firstName , lastName, salary){
        super(firstName, lastName, salary)
    }

    writeInfo(){
        super.writeInfo()
    }
}

const student1 = new Student("Mahmut Esat", "Arslan", 10000);

student1.writeInfo();