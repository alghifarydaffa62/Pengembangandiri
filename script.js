
document.addEventListener("click", function() {
    const hamburger = document.querySelector(".hamburger");
    hamburger.onclick = function () {
        const navbar = document.querySelector(".navbar");
        navbar.classList.toggle("active");
        console.log("sudah");
    }
});


    