
document.addEventListener("click", function() {
    const hamburger = document.querySelector(".hamburger");
    hamburger.onclick = function () {
        const navbar = document.querySelector(".navbar");
        navbar.classList.toggle("active");
        console.log("sudah");
    }
});

document.addEventListener("click", function() {
    const button = document.getElementById('drop')
    button.onclick = function () {
        const menu = document.querySelector(".link")
        menu.classList.toggle("clicked")
    }
});

document.addEventListener("click", function() {
    const trigger = document.getElementById('drop-button') 
    trigger.onclick =  function () {
        const dropmenu = document.querySelector(".show")
        dropmenu.classList.toggle("drop-clicked")
        console.log("Trigger terklik")
    }
})
    