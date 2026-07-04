// ================================
// MOVIE DATA
// ================================

const movies = [

{
    title: "Avatar",
    description: "An epic science-fiction adventure on Pandora.",
    trailer: "https://www.youtube.com/results?search_query=Avatar+Official+Trailer"
},

{
    title: "Avengers Endgame",
    description: "Marvel superheroes unite for one final battle.",
    trailer: "https://www.youtube.com/results?search_query=Avengers+Endgame+Trailer"
},

{
    title: "Joker",
    description: "The origin story of Gotham's famous villain.",
    trailer: "https://www.youtube.com/results?search_query=Joker+Official+Trailer"
},

{
    title: "Interstellar",
    description: "A journey beyond the stars to save humanity.",
    trailer: "https://www.youtube.com/results?search_query=Interstellar+Trailer"
},

{
    title: "Inception",
    description: "A thief enters dreams to steal valuable secrets.",
    trailer: "https://www.youtube.com/results?search_query=Inception+Trailer"
},

{
    title: "John Wick",
    description: "A retired assassin seeks revenge.",
    trailer: "https://www.youtube.com/results?search_query=John+Wick+Trailer"
},

{
    title: "Extraction",
    description: "A fearless mercenary on a dangerous mission.",
    trailer: "https://www.youtube.com/results?search_query=Extraction+Trailer"
},

{
    title: "Mission Impossible",
    description: "Impossible missions with Ethan Hunt.",
    trailer: "https://www.youtube.com/results?search_query=Mission+Impossible+Trailer"
},

{
    title: "Fast X",
    description: "Fast cars and thrilling action.",
    trailer: "https://www.youtube.com/results?search_query=Fast+X+Trailer"
},

{
    title: "Mad Max",
    description: "Survive the post-apocalyptic wasteland.",
    trailer: "https://www.youtube.com/results?search_query=Mad+Max+Fury+Road+Trailer"
},

{
    title: "Free Guy",
    description: "A bank teller discovers he is inside a game.",
    trailer: "https://www.youtube.com/results?search_query=Free+Guy+Trailer"
},

{
    title: "Jumanji",
    description: "Adventure begins inside a magical game.",
    trailer: "https://www.youtube.com/results?search_query=Jumanji+Trailer"
},

{
    title: "The Mask",
    description: "A magical mask changes everything.",
    trailer: "https://www.youtube.com/results?search_query=The+Mask+Trailer"
},

{
    title: "Ted",
    description: "A talking teddy bear creates chaos.",
    trailer: "https://www.youtube.com/results?search_query=Ted+Trailer"
},

{
    title: "Home Alone",
    description: "A clever kid protects his home from thieves.",
    trailer: "https://www.youtube.com/results?search_query=Home+Alone+Trailer"
}

];

// ================================
// ELEMENTS
// ================================

const searchInput = document.getElementById("search");

const movieCards =
document.querySelectorAll(".movie-card");

const detailsButtons =
document.querySelectorAll(".details");

const modal =
document.getElementById("movieModal");

const closeBtn =
document.querySelector(".close");

const movieTitle =
document.getElementById("movieTitle");

const movieDescription =
document.getElementById("movieDescription");

const watchTrailer =
document.getElementById("watchTrailer");

// ================================
// SEARCH MOVIES
// ================================

searchInput.addEventListener("keyup", () => {

    const value =
    searchInput.value.toLowerCase();

    movieCards.forEach(card => {

        const name =
        card.querySelector("h3").textContent.toLowerCase();

        if(name.includes(value)){

            card.style.display = "block";

        }

        else{

            card.style.display = "none";

        }

    });

});

// ================================
// DETAILS BUTTON
// ================================

let currentTrailer = "";

detailsButtons.forEach((button,index)=>{

    button.addEventListener("click",()=>{

        movieTitle.innerHTML =
        movies[index].title;

        movieDescription.innerHTML =
        movies[index].description;

        currentTrailer =
        movies[index].trailer;

        modal.style.display="flex";

    });

});

// ================================
// CLOSE MODAL
// ================================

closeBtn.addEventListener("click",()=>{

    modal.style.display="none";

});

window.addEventListener("click",(e)=>{

    if(e.target==modal){

        modal.style.display="none";

    }

});

// ================================
// WATCH TRAILER
// ================================

watchTrailer.addEventListener("click",()=>{

    window.open(currentTrailer,"_blank");

});

// ================================
// HERO BUTTON
// ================================

const heroButton =
document.getElementById("watchBtn");

heroButton.addEventListener("click",()=>{

    window.open(
    "https://www.youtube.com/results?search_query=Latest+Movie+Trailers",
    "_blank"
    );

});

// ===================================
// FAVORITES
// ===================================

let favorites =
JSON.parse(localStorage.getItem("favorites")) || [];

movieCards.forEach((card,index)=>{

    const favBtn=document.createElement("button");

    favBtn.innerHTML="♡";

    favBtn.classList.add("favorite-btn");

    card.appendChild(favBtn);

    if(favorites.includes(index)){

        favBtn.innerHTML="❤️";

    }

    favBtn.addEventListener("click",(e)=>{

        e.stopPropagation();

        if(favorites.includes(index)){

            favorites=favorites.filter(id=>id!==index);

            favBtn.innerHTML="♡";

        }

        else{

            favorites.push(index);

            favBtn.innerHTML="❤️";

        }

        localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
        );

    });

});

// ===================================
// DOUBLE CLICK FAVORITE
// ===================================

movieCards.forEach((card,index)=>{

    card.addEventListener("dblclick",()=>{

        const favBtn=
        card.querySelector(".favorite-btn");

        if(favorites.includes(index)){

            favorites=favorites.filter(id=>id!==index);

            favBtn.innerHTML="♡";

        }

        else{

            favorites.push(index);

            favBtn.innerHTML="❤️";

        }

        localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
        );

    });

});

// ===================================
// KEYBOARD SHORTCUTS
// ===================================

document.addEventListener("keydown",(e)=>{

    // Focus Search

    if(e.key==="/"){

        e.preventDefault();

        searchInput.focus();

    }

    // Escape closes modal

    if(e.key==="Escape"){

        modal.style.display="none";

    }

    // Home scroll

    if(e.key==="Home"){

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

});

// ===================================
// CARD HOVER EFFECT
// ===================================

movieCards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="scale(1.05)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="scale(1)";

    });

});

// ===================================
// SCROLL TO TOP BUTTON
// ===================================

const topButton=document.createElement("button");

topButton.innerHTML="⬆";

topButton.id="topButton";

document.body.appendChild(topButton);

topButton.style.position="fixed";
topButton.style.right="25px";
topButton.style.bottom="30px";
topButton.style.width="55px";
topButton.style.height="55px";
topButton.style.borderRadius="50%";
topButton.style.border="none";
topButton.style.background="#e50914";
topButton.style.color="#fff";
topButton.style.fontSize="22px";
topButton.style.cursor="pointer";
topButton.style.display="none";
topButton.style.zIndex="1000";

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topButton.style.display="block";

    }

    else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ===================================
// SIMPLE LOADING ANIMATION
// ===================================

window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition="1s";

        document.body.style.opacity="1";

    },100);

});

// ===================================
// CONSOLE MESSAGE
// ===================================

console.log("MovieHub JavaScript Part 2 Loaded");

// ===================================
// CATEGORY FILTER
// ===================================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

        const category = link.textContent.toLowerCase();

        const sections = document.querySelectorAll(".movies");

        sections.forEach(section => {

            const title = section.querySelector("h2").textContent.toLowerCase();

            if (
                category === "home" ||
                category === "movies"
            ) {

                section.style.display = "block";

            }

            else if (title.includes(category)) {

                section.style.display = "block";

            }

            else {

                section.style.display = "none";

            }

        });

    });

});

// ===================================
// SORT MOVIES A-Z
// ===================================

function sortMovies(){

    document.querySelectorAll(".movie-container").forEach(container=>{

        const cards = [...container.children];

        cards.sort((a,b)=>{

            const first =
            a.querySelector("h3").textContent;

            const second =
            b.querySelector("h3").textContent;

            return first.localeCompare(second);

        });

        cards.forEach(card=>container.appendChild(card));

    });

}

sortMovies();

// ===================================
// RANDOM MOVIE
// ===================================

const randomButton = document.createElement("button");

randomButton.innerHTML = "🎲 Random Movie";

randomButton.style.position = "fixed";
randomButton.style.left = "20px";
randomButton.style.bottom = "30px";
randomButton.style.padding = "15px 22px";
randomButton.style.background = "#e50914";
randomButton.style.color = "#fff";
randomButton.style.border = "none";
randomButton.style.borderRadius = "30px";
randomButton.style.cursor = "pointer";
randomButton.style.zIndex = "999";

document.body.appendChild(randomButton);

randomButton.addEventListener("click",()=>{

    const random =
    Math.floor(Math.random()*movies.length);

    movieTitle.innerHTML =
    movies[random].title;

    movieDescription.innerHTML =
    movies[random].description;

    currentTrailer =
    movies[random].trailer;

    modal.style.display="flex";

});

// ===================================
// DARK / LIGHT MODE
// ===================================

const themeButton = document.createElement("button");

themeButton.innerHTML = "🌙";

themeButton.style.position = "fixed";
themeButton.style.right = "95px";
themeButton.style.bottom = "30px";
themeButton.style.width = "55px";
themeButton.style.height = "55px";
themeButton.style.borderRadius = "50%";
themeButton.style.border = "none";
themeButton.style.background = "#222";
themeButton.style.color = "#fff";
themeButton.style.fontSize = "22px";
themeButton.style.cursor = "pointer";
themeButton.style.zIndex = "999";

document.body.appendChild(themeButton);

let darkMode = true;

themeButton.addEventListener("click",()=>{

    darkMode = !darkMode;

    if(darkMode){

        document.body.style.background="#0f0f0f";
        document.body.style.color="#fff";

        themeButton.innerHTML="🌙";

    }

    else{

        document.body.style.background="#ffffff";
        document.body.style.color="#111";

        themeButton.innerHTML="☀";

    }

});

// ===================================
// SCROLL ANIMATION
// ===================================

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("fade-in");

        }

    });

});

document.querySelectorAll(".movie-card").forEach(card=>{

    observer.observe(card);

});

// ===================================
// WELCOME MESSAGE
// ===================================

setTimeout(()=>{

    console.log("🎬 Welcome to MovieHub!");

},1000);

// ===================================
// TOTAL MOVIES
// ===================================

console.log(
"Total Movies : " + movies.length
);

// ===================================
// FINISHED
// ===================================

console.log("MovieHub Ready 🚀");