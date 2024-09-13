
document.addEventListener("click", function() {
    const hamburger = document.querySelector(".hamburger")
    hamburger.onclick = function() {
        const dropdown = document.querySelector('ul')
        dropdown.classList.toggle("clicked")
        console.log("Sudah diklik")
    }
})