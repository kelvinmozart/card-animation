//Movement animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector(".title");
const car = document.querySelector(".car img");
const purchase = document.querySelector(".purschase");
const info = document.querySelector(".info h3");

//Moving animation event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //Popout
    title.style.transform = "translateZ(150px)";
    car.style.transform = "translateZ(200px) rotateZ(-10deg)";
});

//Animate Out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = "translateZ(0px)";
    car.style.transform = "translateZ(0px) rotateZ(0deg)";
});