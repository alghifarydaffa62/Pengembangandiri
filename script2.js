// Tugas bang dea afrizal

// 1. Prompt saldo akhir dari apa yang diinputkan dari user
// let umur = Number(prompt('masukkan saldo awal kalian'))
// let umur_ayah = Number(prompt('masukkan gaji kalian'))
// let saldo_akhir = umur + umur_ayah
// console.log('umur total adala: ' + saldo_akhir)

// 2. menentukan hari
// let hari = new Date().getDay()
// switch(hari) {
//     case 1:
//         hari = "Senin"
//         break
//     case 2:
//         hari = "selasa"
//         break
//     case 3:
//         hari = "Rabu"
//         break
//     case 4:
//         hari = "Kamis"
//         break
//     case 5:
//         hari = "Jumat"
//         break
//     case 6:
//         hari = "Sabtu"
//         break
//     case 7:
//         hari = "Minggu"
//         break
//     default:
//         hari = "Tidak ada"
//         break
// }

// console.log(`Hari ini adalah hari: ${hari}`)
// document.title = 'Daffa al gihifary'
const body = document.body
// body.append('Ini DOM broo')

// const judul = document.createElement('h1')
// judul.innerHTML = '<marquee>JAVASCRIPT DOM</marquee>'
// body.append(judul)

// const paragraf = document.createElement('p')
// paragraf.textContent = 'Ini adalah paragraf mengenai DOM. aku baru belajar, belajarnya enak liat yutup'
// body.append(paragraf)

const head = document.getElementById('head')
head.style.textAlign = "center"
head.style.color = "blue"

const btn1 = document.getElementById('btn1')
btn1.style.color = "blue"
btn1.style.border = 'none'
btn1.style.padding = '10px'
btn1.style.borderRadius = '5px'

const btn2 = document.getElementById('btn2')
btn2.style.color = "red"
btn2.style.border = 'none'
btn2.style.padding = '8px'
btn2.style.borderRadius = '4px'

function gantiwarna() {
    btn2.style.background = "navy"
}

function gantiTeks() {
    btn1.innerHTML = 'Button berubahh'
}

function tekskembali() {
    btn1.innerHTML = 'Know More'
}

// Tugas Dea Afrizal 2

const newline = document.createElement('h3')
newline.innerHTML = 'Muhammad Daffa Al Ghifary'

function munculTeks() {
    body.append(newline)
}

function warna() {
    newline.style.color = 'cyan'
}