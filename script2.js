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

// Array
// const emote = []
// emote[0] = 'Daffa'
// emote[1] = 'Navyz'
// emote[2] = 'Fahmi'
// emote[3] = 'Fathoni'
// console.log(emote)

// const dosen = new Array('Bu Tita', 'Pak Hero', 'Bu Desy', 'Pak Thoni')
// console.log(dosen)

const buah = ['Alpukat', 'Semangka', 'Ceri', 'Pir', 'Pisang']
const watermelon = buah.includes('Semangka')
// const salak = buah.includes('salak')
// console.log(salak)
// console.log(posisi)

if(watermelon) {
    const posisi = buah.indexOf('Semangka')
    const before_posisi = posisi - 1
    const setelah_posisi = posisi + 1
    const buah_sebelum = buah[before_posisi]
    const buah_setelah = buah[setelah_posisi]

    console.log(`buah semangka ada di posisi ${posisi}`)
    console.log(`buah sebelum semangka adalah ${buah_sebelum}`)
    console.log(`buah setelah semangka adalah ${buah_setelah}`)
} else {
    console.log('Tidak ada')
}

const jurusan = ['informatika', 'komputer', 'multimedia broadcasting', 'Game Tech', 'ELIN'] // ori
const jurusanbaru = jurusan.slice() // KW

jurusanbaru[0] = 'ELKA'
// console.log(jurusan)
// console.log(jurusanbaru)

const mergearray = buah.concat(jurusan)
// console.log(mergearray)
for (list of mergearray) console.log(list)
// for (list in mergearray) console.log(list)
// mergearray.map((value, index) => console.log(value, index))

const mahasiswa = [
    {
        name: 'Daffa',
        prodi: 'Teknik Informatika',
        umur: 17,
    },
    {
        name: 'Thoni',
        prodi: 'Teknik Informatika',
        umur: 28,
    },
    {
        name: 'Ahmad',
        prodi: 'Teknik Mekatronika',
        umur: 21,
    },
    {
        name: 'Munsif',
        prodi: 'Multimedia broadcasting',
        umur: 19,
    },
]

// mahasiswa.map((value, index) => console.log(value.name))
// mahasiswa.sort((a, b) => b.umur - a.umur).map((value => console.log(value)))
// mahasiswa.sort((a, b) => a.umur - b.umur).map((value => console.log(value)))
mahasiswa
    .sort((a, b) => b.umur - a.umur)
    .filter((x) => x.umur > 17)
    .map((value) => console.log(value))

// Tugas Dea Afrizal
const angka = [4, 6, 8, '*', 12, 14]
angka[3] = angka[2] + 2
console.log(angka[3])