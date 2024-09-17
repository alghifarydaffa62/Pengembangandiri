
document.addEventListener("click", function() {
    const hamburger = document.querySelector(".hamburger")
    hamburger.onclick = function() {
        const dropdown = document.querySelector(".menu")
        dropdown.classList.toggle("clicked")
        console.log("Sudah diklik")
    }
})

const target = new Date("September 15, 2024 23:59:59").getTime()

const countdownInterval = setInterval(() => {
    const now = new Date().getTime()
    const selisih = target - now

    if(selisih <= 0) {
        clearInterval(countdownInterval)
        document.getElementById("day").innerHTML = "0"
        document.getElementById("hour").innerHTML = "0"
        document.getElementById("minute").innerHTML = "00"
        document.getElementById("second").innerHTML = "00"
    }

    let day = Math.floor(selisih / (1000 * 60 * 60 * 24))
    let hour = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minute = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60))
    let second = Math.floor((selisih % (1000 * 60)) / 1000)

    day = String(day).padStart(2, '0')
    hour = String(hour).padStart(2, '0')
    minute = String(minute).padStart(2, '0')
    second = String(second).padStart(2, '0')

    // document.getElementById("day").innerHTML = day
    // document.getElementById("hour").innerHTML = hour
    // document.getElementById("minute").innerHTML = minute
    // document.getElementById("second").innerHTML = second
}, 1000)

document.addEventListener("click", function() {
    const trigger = document.getElementById("link1") 
    trigger.onclick = function () {
        const content = document.querySelector(".dropdown")
        content.classList.toggle("drop")
        console.log("accordion sudah di klik")
    }
})

document.addEventListener("click", function() {
    const trigger = document.getElementById("link2") 
    trigger.onclick = function () {
        const content = document.querySelector(".dropdown2")
        content.classList.toggle("drop")
        console.log("accordion sudah di klik")
    }
})
document.addEventListener("click", function() {
    const trigger = document.getElementById("link3") 
    trigger.onclick = function () {
        const content = document.querySelector(".dropdown3")
        content.classList.toggle("drop")
    }
})

document.addEventListener("click", function () {
    const button = document.getElementById("button")
    button.onclick = function () {
        const modalbox = document.querySelector(".modalpop")
        modalbox.classList.toggle("modalshow")
    }
})

document.addEventListener("DOMContentLoaded", function() {
    const remove = document.getElementById("delete")
    remove.onclick = function () {
        const comment = document.querySelector(".person-box")
        comment.classList.toggle("deleted")
    }
})
document.addEventListener("DOMContentLoaded", function() {
    const remove = document.getElementById("delete2")
    remove.onclick = function () {
        const comment = document.querySelector(".person-box2")
        comment.classList.add("deleted")
    }
})
document.addEventListener("DOMContentLoaded", function() {
    const remove = document.getElementById("delete3")
    remove.onclick = function () {
        const comment = document.querySelector(".person-box3")
        comment.classList.add("deleted")
    }
})


// function saveToLocalStorage(matkul, dl, description) {
//     const data = { matkul, dl, description };
//     const remove = document.createElement('button')
//     remove.textContent = "Delete"

//     let savedData = JSON.parse(localStorage.getItem('data')) || [];
//     savedData.push(data);
//     localStorage.setItem('data', JSON.stringify(savedData));
// }

function createbox(matkul, dl, description) {
    const contain = document.querySelector(".tugas")
    const box = document.createElement('div')
    box.classList.add("boxpop")

    // const remove = document.createElement('button')
    // remove.textContent = "Delete"
    // remove.classList.add("remove")

       const judul = document.createElement('h1')
       judul.textContent = "Matkul: " + matkul

       const tenggat = document.createElement('h3')
       tenggat.style.marginTop = '1rem'
       tenggat.textContent = "Deadline: " + dl

       const keterangan = document.createElement('p')
       keterangan.style.marginTop = '1rem'
       keterangan.textContent = description

        const buttonremove = document.getElementById("hapus")

        box.appendChild(judul)
        box.appendChild(tenggat)
        box.appendChild(keterangan)
        box.appendChild(buttonremove)

        contain.appendChild(box)
}

// function loadFromLocalStorage() {
//     const savedData = JSON.parse(localStorage.getItem('data')) || [];
//     savedData.forEach(data => {
//         createbox(data.matkul, data.dl, data.description);
//     });
    
// }


function buat () {
       const matkul = prompt("Masukkan Matkul: ")
       const dl = prompt("Masukkan Deadline: ")
       const description = prompt("Berikan deskripsi: ")

       createbox(matkul, dl, description)
    //    saveToLocalStorage(matkul, dl, description)
}

// window.onload = function() {
//     loadFromLocalStorage();
// };
