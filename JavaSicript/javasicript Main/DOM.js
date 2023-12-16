//* -------Document Objesi----------
//? bilgilere ulaşmamızı sağlıyor

// console.log(window);

// let value ;

// console.log(document);

// value = document.location.href;
// value = document.location.hostname;
// value = document.location.port;
// value = document.location.pathname;


// value = document.all;
// value = document.characterSet;

// value = document.title;
// value = document.links.item(4);
// value = document.links.item(4).id;
// value = document.links.item(4).getAttribute("id");
// value = document.links.item(4).getAttribute("class");
// value = document.links.item(4).classList[3];

// value  = document.forms.item(1).children;

// value = document.domain;
// value = document.contentType;

// console.log(value);




//? ----------Selectors(Seçiçiler) - Style Özellikleri----------
//* classname , id , tag name
//* "classname'i" yüz yerde tanımlayabilirsin lakin  "id'yi" sadece bir kere kullan

//* getElementById : id'ye göre elementi yakalar
//* getElementByClassName : class ismine göre elementi yakalar
//* getElementByTagName : etiket ismine göre yakalar


// const button = document.getElementById("todoAddButton");

// console.log(button);
// console.log(button.id);
// console.log(button.className);

// const classlist = button.classList;
// classlist.forEach(function(className){
//     console.log(className);
// });
// console.log(classlist);

// console.log(button.getAttribute); //* id, class, type gibi hepsi attribute diye geçer
// console.log(button.getAttribute("class"));

// let buttonText = button.textContent;
// let buttonText2 = button.innerHTML;
// console.log(buttonText);
// console.log(buttonText2); //* burada kenarlarındaki htmlleride algıla diyoruz
// button.textContent = "<b>Todo Ekleyin</b>";
// button.innerHTML = "<b>Todo Ekleyin</b>";


// const todoList = Array.from(document.getElementsByClassName("list-group-item"));
// todoList.forEach(function(todo){
//     console.log(todo);
//     console.log(todo.className);
//     console.log(todo.textContent);
// });
// console.log(todoList);

// const forms = document.getElementsByTagName("form"); //* istersen forEach ile teker teker ulaşabilirsin
// console.log(forms);



//*  getElementById--getElementByClassName--getElementByTagName
//* hepsinin görevini aynanda yapan bir metot var
//? querySelector   --- querySelectorAll

// const clearButton = document.querySelector("#todoClearButton"); 
// const clearButton = document.querySelectorAll("#todoClearButton"); //* eğer seçtiğimiz ögeden birden fazla varsa All metodunu kullanıyoruz
// const clearButton = document.querySelectorAll("#todoClearButton")[2]; //* istediğimiz bir ögeyi getiriyoruz
// console.log(clearButton);





//? -----------Style özelliğini anlamak---------------
// const todo = document.querySelectorAll (".list-group-item") [0]; //* . koyduğumuzda "class" olduğunu belirtiriz
// const todolist = document.querySelector (".list-group");
// const clearButton = document. querySelector ("#todoClearButton"); //* # koyduğumuzda "id" olduğunu belilrtiriz

// console. log(clearButton);
// todo.style.color= "#fff";
// todo.style.backgroundColor = "purple";
// todo.style.fontWeight="bold";

// todo.style.paddingTop = "20px";
// todo.style.paddingLeft = "70px";

// todoList.style.marginTop="60px";
// todoList.style.marginLeft = "100px";

// clearButton. style.backgroundColor="red";
// clearButton.style.fontweight = "bold";
// clearButton.style.padding="10px";
// clearButton.style.marginTop="100px";
// clearButton.style.borderRadius = "50px";




//? -----------HTML elementleri üzerinde gezinmek---------------

// const todo = document.querySelector(".list-group-item");
// const todolist = document.querySelector(".list-group");
// const card = document.querySelector(".card");
// const row = document.querySelector(".row");
// console.log(card);


// let value;

//* Anneden çocuklara erişmek
// value = todolist;
// value = todolist.children;
// value = todolist.children[0];

// value = Array.from(todolist.children);

// value.forEach(function(child){
//     console.log(child);
// });



//* Çocuktan anneye erişmek

// value = todo;
// value = todo.parentElement;          
// value = todo.parentElement.parentElement; //* parçalı olaraktagezinebilirsin


//* Kardeşler arasında gezinmek

// value = todo;
// value = todo.nextElementSibling;
// value = todo.nextElementSibling.nextElementSibling;


// value = row.children[0].children[3].children[0].textContent="Todo Listesi başlığı değişti";

// console.log(value);



//? -----------Dinamik olarak element oluşturma---------------

// const cardbody = document.querySelectorAll(".card-body")[1]; //* burada karta ulaştık

// const link = document.createElement("a");
// link.id = "goBlogWebSite";
// link.className = "btn btn-dark btn-sm mt-3";
// link.href ="https://www.youtube.com/results?search_query=javascript+ile+uygulama+geli%C5%9Ftirme";
// link.target="_blank";
// link.innerHTML = "Go My Personal Website";

// cardbody.appendChild(link);     //* karta ulaştıktan sonra çocuğu(link) ekledik

// console.log(link);


//* burdan kopya çek
/* <li class="list-group-item d-flex justify-content-between">Todo 2
    <a href="#" class="delete-item">
        <i class="fa fa-remove"></i>
    </a>
</li> */

//*

// const todolist = document.querySelector(".list-group");

// const todo = document.createElement("li");
// const todolink = document.createElement("a");
// const todolinki = document.createElement("i");
// todo.className = "list-group-item d-flex justify-content-between";
// todo.innerHTML = "Todo 5";

// todolink.href = "#";
// todolink.className = "delete-item";

// todolinki.className = "fa fa-remove";

// todolink.appendChild(todolinki);
// todo.appendChild(todolink);
// todolist.appendChild(todo);

// console.log(todo);


//? -----------Element silme---------------

// const todolist = document.querySelector(".list-group");
// const todos = document.querySelectorAll(".list-group-item");

//* 1.silme yolu
// todos[0].remove();
// todos[1].remove();
// console.log(todos);

//* 2.silme yolu
// todolist.removeChild(todos[0]);
// todolist.removeChild(todolist.lastElementChild);


//? -----------Elementleri Yer değiştirme---------------

// const cardbody = document.querySelectorAll(".card-body")[1];


// {/* <h5 class="card-title">Todo Listesi</h5> */}

// const newTitle = document.createElement("h2");

// newTitle.className = "card-title";
// newTitle.textContent = "Todo Listesi - Yeni";

// console.log(cardbody.childNodes);   //* bu şekile h5'in yada diğer ögelerin childnodelarına ulaşabiliriz

// cardbody.replaceChild(newTitle,cardbody.childNodes[1]);







//? -----------Events Olaylar---------------
//* Normalde HTML içindede yazabiliriz lakin luzumsuz görüntü oluşturur
//* DOM.js'i dahil etmeyi unutma

//* 1.yol
// function changeTitle (){
//     document.querySelectorAll(".card-title")[1].textContent ="Todo Listesi Değişti..."
// }

//* 2.yol
//* addEventListener()
// const clearButton = document.querySelector("#todoClearButton");
// clearButton.addEventListener("click",function(){
//     alert("Hello user");
// });

//* 3.yol   ----(En kral yol bu şekildedir)-----
// const clearButton = document.querySelector("#todoClearButton");

// clearButton.addEventListener("click",changeTitle); //? burada parantez açmıyorsun yoksa direk tetiklenir sayfa açılır açılmaz kod çalışır

// function changeTitle (){ //? "()" böyle olan yerle değer yakalıyabilirsin fonksiyon için
//     document.querySelectorAll(".card-title")[1].textContent ="Todo Listesi Değişti..."
// }


// function changeTitle(e) {
//     console.log(e.target);
//     console.log(e.target.textContent);
//     console.log(e.target.className);
// }




//?------------MOUSE EVENTLARI----------------
//* w3school'dan ayrıntılı bir şekilde bakabilirsin
//DOMContentLoaded //* senin  sayfan yüklendiğinde çalışacak eventtır
//load
//click
//dblclick
//mouseover  
//mouseout
//mouseenter
//mouseleave



// document.addEventListener("DOMContentLoaded",run);

// function run(){
//     alert("Page Downloaded.");
// }


// window.addEventListener("load",run);

// function run(){
//     console.log("Page Downloaded.");
// }




// const cardTitle = document.querySelectorAl1(".card-title")[1];
// const cardBody = document. querySelectorAll (".card-body")[1];

// cardBody.addEventListener("mouseover", run);
// cardBody.addEventListener("mouseout", run); //* iki event'ı aynanda çalıştırabiliriz

// function run(e){
//     console.log(e.type);
// }




//?------------KLAVYE EVENTLARI----------------

//keypress : //* harf ve sayılarda tetiklenen eventtır
//keydown    //* herşeyde çalışır
//keyup     //* tuştan elini kaldırdığında çalışır

// document.addEventListener("keypress",run);
// document.addEventListener("keydown",run);

// function run(e){
//     console.log(e.key); //* klavyede bastığımız tuşları yakalar
//     console.log(e.keyCode); //* asci tablosundaki değeri verir
// }


//* example:// sayfanın tuşlarla(command + R) yenilenmesini engeller 
// document.addEventListener("keydown",run);

// function run(e){
//     console.log(e.keyCode); 
//     e.preventDefault();
// }



// const cardTitle = document.querySelectorAll(".card-title")[0];
// const input = document.querySelector ("#todoName");

// input.addEventListener("keyup",run);

// function run(e){
//     cardTitle.textContent = e.target.value;
//     // console.log(e.target.value);  //* target html etiketini kasteder value'de içindeki değeri
// }



//?------------INPUT EVENTLARI----------------

//focus         //* inputa girdiğimizde çalışır
//blur          //* inputtan çıktkığımızda çalışır
//сору          //* inputun içindeki değeri kopyalarsak çalışır
//paste         //* inputun içine değer yapıştırırsak çalışır
//cut           //* inputun içindeki değer kesersek çalışır
//select

// const todo = document.querySelector("#todoName");

// todo.addEventListener("focus",run);
// todo.addEventListener("blur",run);

// todo.addEventListener("copy",run);
// todo.addEventListener("paste",run);      //bütün eventları aynandada çalıştırabiliriz

// todo.addEventListener("cut",run);
// todo.addEventListener("select",run);

// function run(e){
//     console.log(e.type)
// }






//?------------SESSION STORAGE----------------
//* session storag'a eklediğimiz değerler sayfayı kapattığımızda, bilgisayardan çıktığımızda vb veriler silinir
//* bütün değerler string olarak kaydedilir

//* Değer Ekleme
// sessionStorage.setItem("350", "Enes");
// sessionStorage.setItem("125", "Mahmut");
// sessionStorage.setItem("216", "Yasin");
// sessionStorage.setItem(555, "Büşra");
// sessionStorage.setItem(666, 756);

//* Değer Silme
// sessionStorage.removeItem("216");

//* Değer yakalama
// let  value =sessionStorage.getItem("350"); 
// if(value == null){
//     console.log("Value can't found.");
// }else{
// console.log("Value found: " +value);
// }

//* Hepsini silme
// sessionStorage.clear();

//* Session storage - Array yazdırma


// let names = ["Ali","Enes","Kübra","Mahmut","Ayşenur"];

// sessionStorage.setItem("names", names); //* verdiğimiz kod string olarak kaydedilir
// sessionStorage.setItem("names", JSON.stringify(names)); //* verdiğimiz kod array gibi gözükür ama string olarak kaydedilir

// let value = JSON.parse(sessionStorage.getItem(names)); //* tekrar array olarak almamızı sağlar
// console.log(value);






//?------------LOCAL STORAGE----------------
//* local storag'a kaydettiğimiz veriler biz silmediğimiz müddetçe silinmez sayfayı kapatmak vb. işlemler silinmesine yol açmaz
//* herşey aynı lakin sadece "session" yerine "local" olucak







