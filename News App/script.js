
const api_key="22438641a57b43ac8d15c75678fac734";
const url="https://newsapi.org/v2/everything?q=";

window.addEventListener('load',()=>fetchNews("India"));

async function fetchNews(query) {
    try{
    const res=await fetch(`${url}${query}&apiKey=${api_key}`);
    if (!res.ok) throw new Error(`Error: ${res.status}`);
    const data=await res.json();
    bindData(data.articles);
    }
    catch(error){
        console.error("Failed to fetch news:", error.message);
    }
}

function bindData(articles){
    const cardsContainer=document.getElementById('cards-container');
    const newsCardTemplate=document.getElementById('template-news-card');
    cardsContainer.innerHTML="";

    articles.forEach(article => {
         if(!article.urlToImage) return; // if a article is not containing image we will show that article
         const cardClone=newsCardTemplate.content.cloneNode(true);
         fillDataInCard(cardClone,article);
         cardsContainer.appendChild(cardClone);
    })
}

function fillDataInCard(cardClone,article)
{
    const newsImg=cardClone.querySelector('#news-img')
    const newsTitle=cardClone.querySelector('#news-title');
    const newsSource=cardClone.querySelector('#news-source');
    const newsDesc=cardClone.querySelector('#news-desc');

    newsImg.src=article.urlToImage;
    newsTitle.innerHTML=article.title;
    newsDesc.innerHTML=article.description;

    const date=new Date(article.publishedAt).toLocaleString("en-US",{
        timeZone:"Asia/Jakarta"
    });

    newsSource.innerHTML=`${article.source.name} ${date}`

    cardClone.firstElementChild.addEventListener('click',()=>{
        window.open(article.url,"_blank")
    })
}

let curSelectNav=null;
function onNavItemClick(id)
{
    fetchNews(id);
    const navItem=document.getElementById(id);
    curSelectNav?.classList.remove('active');
    curSelectNav=navItem;
    curSelectNav.classList.add('active')
}

const searchButton=document.getElementById('search-button')
const searchText=document.getElementById('news-text');
searchButton.addEventListener('click',()=>{
    const query=searchText.value;
    if(!query) return;
    fetchNews(query);
    curSelectNav?.classList.remove('active');
    curSelectNav=null;
})

const inputField = document.getElementById("news-text");
const clearBtn = document.querySelector(".clear-btn");

// Show/Hide "X" when typing
inputField.addEventListener("input", function () {
    clearBtn.style.display = inputField.value ? "block" : "none";
});

// Clear input when "X" is clicked
function clearInput() {
    inputField.value = "";
    clearBtn.style.display = "none";
}

const themeToggleBtn = document.getElementById("toggle-btn");
// Function to toggle theme
themeToggleBtn.addEventListener('click',()=>{
    const themeStyle=document.getElementById('theme-style')
    if(themeStyle.getAttribute("href")==="light.css")
    {
        themeStyle.setAttribute("href","Dark.css");
        localStorage.setItem("theme","dark");
    }
    else{
        themeStyle.setAttribute("href","light.css");
        localStorage.setItem("theme","light");
    }
})

window.addEventListener("DOMContentLoaded",()=>{
    let savedTheme=localStorage.getItem("theme");
    if(savedTheme==="dark")
    {
        document.getElementById("theme-style").setAttribute("href","Dark.css")
    }
})