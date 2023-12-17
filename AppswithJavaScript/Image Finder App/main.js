const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput");
const buttonWrapper = document.querySelector(".button-wrapper");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const imageListWrapper = document.querySelector(".imageList-wrapper");


runEventListener();


function runEventListener(){
    form.addEventListener("submit", search);      //? biri submit'e bastığı anda search methoduna git demek
    clearButton.addEventListener("click",clear);     

}

function clear(){
    searchInput.value ="";
    // Array.from(imageListWrapper.children).forEach((div)=>div.remove());   //? teker teker divlere gittik ve forEach ile üzerlerinde dönüp teker teker sildik
    imageListWrapper.innerHTML = "";

}

function search(e){

    const value = searchInput.value.trim();       //? trim sağından solundan boşlukları alır

    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{     //? burada isteğimizi attık ve "then" ile datamızı  çektik
        method : "GET",
        headers : {
            authorization : "Client-ID KfLxoJwZVFH0ttI1iRhk7NKT5bBSW6IxoZjRtfb0uv4"
        }
    })
    .then((res)=>res.json())
    .then((data)=> {
        Array.from(data.results).forEach((image)=>{        //? eğer array değilse forEach ile dönmez
            // console.log(image.urls.small);                 //?  ezber yok data-results-image-urls-small olarak sıra sıra aşağı inip resimlere ulaştık
            addImageToUI(image.urls.small);
        })
    })
    .catch((err)=> console.log(err));

    // console.log("Mahmut");
    e.preventDefault();        //? bunu kullanarak sayfanın yenilenmesini engelliyoruz ve çıktıyı görüyoruz

}



function addImageToUI(url){
            //*  <div class="card">
            //*             <img src="" alt="">
            //*         </div>
    const div = document.createElement("div");
    div.className = "card";

    const img = document.createElement("img");
    img.setAttribute("src",url);
    img.height = '400';    //? px kullandığımızda hiçbi çıktı almadık (bilgilendirme)
    img.width = '400';

    div.appendChild(img);
    imageListWrapper.appendChild(div);

}