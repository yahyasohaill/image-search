const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const imagesDisplay = document.getElementById("images-display");
const moreBtn = document.getElementById("more-btn");
const accessKey = "ekDCjVB8nx80ARszzQpBqfKRrDu4OissJkBl51ddBJQ";
searchForm.addEventListener("submit",e=>{
    e.preventDefault();
    page=1;
    searchImg();
})
let search = "";
let page = 1;
async function searchImg(){
   search = searchBox.value;
   const url = `https://api.unsplash.com/search/collections?page=${page}&query=${search}&client_id=${accessKey}&per_page=18`;

   const response = await fetch(url);
   const data = await response.json();
   const results = data.results;
   if(page==1){
       imagesDisplay.innerHTML = "";
   }
   results.map(results =>{
       const image = document.createElement("img");
       image.src = results.cover_photo.urls.small;
       image.setAttribute('data-aos','fade-up');
       image.setAttribute('loading','lazy');

       const imageLink = document.createElement("a");
       imageLink.href = results.links.html;
       imageLink.target = "_blank";
       
       //    imageLink.setAttribute=('data-aos','fade-up');
       
       imageLink.appendChild(image);
       
       
    //    imagesDisplay.appendChild(imageLink);
        imagesDisplay.appendChild(imageLink);
    })
    moreBtn.style.display = "block"
}

moreBtn.addEventListener("click",e=>{
    e.preventDefault();
    page++;
    searchImg();
})
