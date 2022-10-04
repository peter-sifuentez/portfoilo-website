const 

navbar = document.querySelector("label"),
links = document.querySelectorAll(".menu-link");
console.log(links);

navbar.addEventListener("click", function(e) {
    this.classList.toggle("is-open");
    navbar.classList.toggle("is-open");
});

links.forEach(el => el.addEventListener("click", function (e) {
    navbar.classList.toggle("is-open");
   
}));
