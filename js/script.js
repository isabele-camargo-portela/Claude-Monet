//carrocel home

const cards = document.getElementById("cards");
const left = document.getElementById("left");
const right = document.getElementById("right");

right.addEventListener("click", function() {
    cards.scrollBy({
        left: 320,
        behavior: "smooth"
    });
});

left.addEventListener("click", function() {
    cards.scrollBy({
        left: -320,
        behavior: "smooth"
    });
});