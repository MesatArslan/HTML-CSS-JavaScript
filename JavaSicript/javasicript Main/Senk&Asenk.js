//? ---------------     SENKRON AND ASENKRON PROGRAMLAMA    --------------------

//* Senkron Programlama => bir işi bitirir daha sonra diğer işe geçer //örnek  birinci iş = 12 Saniye sürüyor   ikinci iş = 4 saniye sürüyor    toplam iş = 12+4 = 16 saniye sürer

//* Asenkron Programlama => bütün işler aynanda çalışmaya başlar  // örnek birinci iş = 12 Saniye sürüyor   ikinci iş = 4 saniye sürüyor  toplam iş = 12 saniye sürer(ikisinide aynanda başlattığı için 2. iş 4.saniyede biter 1.işte 12.saniyede biter)

//*1-) Javascript "Senkron" Çalışan bir Yazılım dilidir
//*2-) Javascript bazı durumlarda "Asenkron" çalışır
/* 
* -------------------Asenkron Çalışmasına neden olan sebebler---------------------
* 1- Timing
* 2- Event(olay)
* 3- HTTP isteklerinde (çok önemli)
*  --> Web Api tarafında çalışan herşey "asenkron" çalışır
*/



//* Example 
// console.log("Mahmut");

// setTimeout(() => {
//     console.log("Time is up and it worked.");
// }, 1000);

// setTimeout(() => {
//     console.log("It waited 500ms and worked.");
// }, 500);

// setTimeout(() => {
//     console.log("It waited 750ms and worked.");
// }, 750);

// console.log("Esat");





//?-------------- Asenkron Problemi ----------------
//* HTTP istekleri


// const users = [
//     {
//         userId : 5,
//         post :  "Mahmut post 1"
//     },
//     {
//         userId : 5,
//         post :  "Mahmut post 2"
//     },
//     {
//         userId : 5,
//         post :  "Mahmut post 3"
//     },
//     {
//         userId : 6,
//         post :  "Betül post 1"
//     },
//     {
//         userId : 7,
//         post :  "Ali post 1"
//     },
//     {
//         userId : 6,
//         post :  "Betül post 2"
//     },
// ]

// function getUserById(){
//     //*servise gittik ve cevabı aldık
//     setTimeout(() => {
//         return 5;
//     }, 1000);
// }


// function getPostByUserId(userId){
//     //*Gerçek bir rest api adresine istek yollıcaksın.
//     setTimeout(() => {
//         users.forEach((user)=>{
//             if(user.userId === userId){
//                 console.log(user.post);
//             }

//         })
//     }, 500);

// }

// //* ikiside asenkron çalıştığı için 2'side aynanda çalışıyor bu nedenle userId undefined olarak kalıyor
// //* bunun çözümü için asenkron yapıyı senkron yapıya çevireceğiz
// let userId = getUserById();
// getPostByUserId(userId);



//?-------------- Asenkron Problemi Çözümü----------------
//* birbirine bağımlı kısımları senkron bağımsız kısımları asenkron olarak bağlamak gerekir
// function getUserById(callback){
//     //*servise gittik ve cevabı aldık
//     setTimeout(() => {
//         // return 5;
//         let userId = 5;
//         callback(userId);
//     }, 1000);
// }


// function getPostByUserId(userId){
//     //*Gerçek bir rest api adresine istek yollıcaksın.
//     setTimeout(() => {
//         users.forEach((user)=>{
//             if(user.userId === userId){
//                 console.log(user.post);
//             }

//         })
//     }, 500);

// }

// getUserById(getPostByUserId);


//*  --------------- CALLBACK       Nedir?---------------

//* callback - promise -async await


// function getName(callback){
//     setTimeout(() => {
//         console.log("Mahmut Esat");
//         callback();
           // callback("Mahmut");
//     }, 1000);
// }


// function getSurname(){
//     setTimeout(() => {
//         console.log("Arslan");
//     }, 500);
// }


// getName(getSurname);  //* bir fonksiyona bir fonksiyon geçmeye callback deniyor




//?-------------- AJAX Nedir? ----------------(artık kullanılmıyor)
//* Bir serverdan veri çekmek için kullanırız aradaki bir köprü gibi düşün 

// const xhr = new XMLHttpRequest();
// console.log(xhr);

//* "readystate ve state" in sırasıyla 4 ve 200 kodlarını vermesi bize olumlu sonuç aldığımızı gösterir

//* id 'nin boşmu dolumu olduğu duruma göre dizayn ettik

// function prepare(url,id){
//     if(id === null){
//         return url;
//     }else{
//         return `${url}?postId=${id}`
//     }
// }

// function getComments(url,id){
//     let newUrl = prepare(url,id);
//     const xhr = new XMLHttpRequest();
//     xhr.addEventListener("readystatechange", ()=>{
//         if(xhr.readyState=== 4 && xhr.status ===200){
//             // console.log(xhr.responseText);
//             console.log(JSON.parse(xhr.responseText));
//         }
//     })
//     xhr.open("Get",newUrl);   
//     xhr.send();
// }

// function getData (url){
//     const xhr = new XMLHttpRequest();
//     xhr.addEventListener("readystatechange",()=>{
//         if(xhr.readyState === 4 && xhr.status ===200){
//         console.log(JSON.parse(xhr.response));
//         }
//     });

//     xhr.open("GET",url);
//     xhr.send();

// }


// //* getComments("https://jsonplaceholder.typicode.com/comments",null);
// getComments("https://jsonplaceholder.typicode.com/comments",1);

//?--------------PROMİSE----------------
//* Callbacklerin alternatifi büyük projelerde kullanıldığını görürsün
//* Asenkronları senkrona çevirmek için kullanılır

// let check = true;

// const promise1 = new Promise((resolve,reject)=>{
//     if(check){
//         resolve("Promise succeed...")
//     }else{
//         reject("Promise not succeed...")
//     }
// });

// console.log(promise1);


//* bu halde bize sadece promise döndü yani hazırlandı

// let check = true;
// function createPromise(){
//     return new Promise((resolve,reject)=>{
//         if(check){
//             resolve("There is no problem...");
//         }else{
//             reject("Problem is reaallllyyyy big!!!");
//         }
//     })

// }

// createPromise()
// .then((response)=>{         //* resolvun içindeki kısmı response ile aldık
//     console.log(response);
// })
// .catch((error)=>{           //* rejectin içindeki kısmı error ile aldıkk
//     console.log(error);
// })
// .finally(()=> console.log("It work everytime...")) //* eğer tek satırda arrow func yazıyorsak "{}" süslü parantez açmamıza gerek kalmaz


//? PROMİSE + XMLHTTPREQUEST


// function readStudent(url){
//     return new Promise((resolve,reject)=>{
//         const xhr = new XMLHttpRequest();
//         try {       //* hata yönetimi içini
//             xhr.addEventListener("readystatechange",()=>{
//                 if(xhr.readyState===4 && xhr.status===200){
//                     try {
//                         const students = JSON.parse(xhr.responseText);
//                         resolve(students);

//                     } catch (error) {
//                         console.log("JSON has a problem")
                        
//                     }
//                 }
//             })
//         } catch (error) {
//             reject(error);
//         }

//         xhr.open("GET",url);
//         xhr.send();
//     })
// }

// readStudent("students.json")
// .then((data)=> console.log(data))
// .catch((err)=> console.log(err))


//*************** */



// function getUsers(url){
//     return new Promise((resolve,reject)=>{
//         const xhr = new XMLHttpRequest();
//             xhr.addEventListener("readystatechange",()=>{
//                 if(xhr.readyState===4 && xhr.status===200){
//                     try {
//                         resolve(JSON.parse(xhr.responseText));

//                     } catch (error) {
//                         reject(error);
                        
//                     }
//                 }
//             })

//         xhr.open("GET",url);
//         xhr.send();
//     })
// }

// // getUsers("https://jsonplaceholder.typicode.com/users")
// getUsers("https://jsonplaceholder.typicode.com/users/3")
// .then((data) => {
//     data.forEach((user)=>{
//         console.log(user.name);
//     })
//     console.log("Then we can run different asynchronous codes.")
// })
// .catch((err)=> console.log(err))
// .finally(()=>{
//     //* Mail atma kodlarin
// })

// function getUsers(url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.addEventListener("readystatechange", () => {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     try {
//                         resolve(JSON.parse(xhr.responseText));
//                     } catch (error) {
//                         reject(error);
//                     }
//                 } else {
//                     reject("Error: " + xhr.status);
//                 }
//             }
//         });

//         xhr.open("GET", url);
//         xhr.send();
//     });
// }

// getUsers("https://jsonplaceholder.typicode.com/users/3")
//     .then((data) => {
//         console.log("User list:", data); // Alınan verileri kontrol etmek için loglama yapabiliriz
//         data.forEach((user) => {
//             console.log(user.name);
//         });
//         console.log("Then we can run different asynchronous codes.");
//     })
//     .catch((err) => console.log(err))
//     .finally(() => {
//         // Mail atma kodlarını burada çalıştırabilirsiniz
//     });

//* işin düşerse daha ayrıntılı bir şekilde tekrar öğren( ve bulabildiğin en yeni dökümanlara ulaş)





//?-------------- FETCH API ----------------
//* ajax yerine kullanılan bir method

//* callback - promise
//* ajax(xmlhttprequest)  -  fetch api


// fetch("/javasicript Main/students.json")


// function getStudents(url) {
//     fetch(url)  //* burda bize bir promise dönüyor
//         .then((response) =>{
//             return response.json();
//         })
//         .then((data) => console.log(data))
//         .catch((err) => console.log(err))
// }
// getStudents("students.json"); //? burda oluşturduğum json'ın içinden birşey çekemiyorum onu araştır


//* istersek methodun dışında da yapabiliriz ama içerde yapmak en iyisi
// getData("https://jsonplaceholder.typicode.com/albums")
// .then((response)=> response. json)
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err))




//?-------------- ASYNC AWAIT ----------------
//* http istekleri asenkron çalışır bu nedenle JS'in senkron çalışmasına entegre etmemiz gerekir
//* "PROMISE THEN ZİNCİR"'İNDEN BİZİ KURTARIR

// async function hello(){   //* bir function async ile işaretlenirse geriye promise döner bizi luzumsuz kodlardan kurtarır
//     return "Hello World";
// }

// console.log(hello()); //* hello üzerine gela async anahtarıyla çağırdımız için promise dönüyor

// hello()
// .then((res)=>console.log(res));

//* "Async Await" kullanımı
// document.querySelector("#button").addEventListener("click",async()=>{
//     const responsePost = await fetch("https://jsonplaceholder.typicode.com/comments?postId=1");
//     const post = await responsePost.json(); //*awaitle bekletmemizin amacı senkron çalışması gereken yerler için kullanıyoruz
//     //* await kullandığımız da  önceki kodun bitmesini bekliyor ve yoluna devam ediyor
    // console.log(responsePost);

//     const responseComments = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const comments = await responseComments.json();
//     console.log(comments);
// })


//********* kısa hali  */
// document.querySelector("#button").addEventListener("click",async()=>{
//     const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
//     const comments = await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json();
//     console.log(post,comments);
// })







//?-------------- ASYNC AWAIT  ÖZETİ ----------------

//* Senkron: Strayla çalisan islem parçaciklari
//* Asenkron: Es zamanli birden fazla is yapmak için kullanilir.
//* 1. function
//* 2. function
//* 3. function
//* Javascript SENKRON çalisan bir programlama dilidir...
//* ASENKRON ÇALISMASINA SEBEP OLAN DURUMLAR
//* 1-Timing(Zaman)
//* 2-Event (Olay)
//* 3-HTTP ISTEKLERI
//* ASENKRONU YÖNETMEK IÇIN;
//* 1-CALLBACK
//* 2-PROMISE
//* 3-ASYNC AWAIT