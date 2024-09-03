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

// FUNCTION CARA 1
const sum1 = new Function('x', 'y', 'console.log(x+y)')
sum1(35, 65)

// FUNCTION CARA 2
const sum2 = function tambah(x, y) {
    console.log(x+y)
}
sum2(23, 87)

// FUNCTION CARA 3 ARROW FUNCTION
const sum3 = (x, y) => {
    console.log(x + y)
}
sum3(10, 25)

function randomize() {
    const randomnum = ~~(Math.random() * 1000)
    if(randomnum > 300) {
        console.log('Angka lebih dari 300')
    } else {
        console.log(randomnum)
    }
}
randomize()

// TUGAS DEA AFRIZAL
// 1. membuat perhitungan luas lingkaran, segitiga, persegi panjang, jajar genjang
// 2. total gaji karyawan dalam 1 bulan, input: nama, gaji perhari, hari bekerja

function lingkaran(r) {
    const PHI = 3.14
    let luas1 = PHI * r * r
    console.log(`Luas lingkaran adalah ${luas1}`)
}
function segitiga(alas, tinggi) {
    let luas2 = 1/2*alas*tinggi
    console.log(`Luas segitiga adalah ${luas2}`)
}
function persegi_panjang(p, l) {
    let luas3 = p*l
    console.log(`Luas persegi panjang adalah ${luas3}`)
}
function jajar_genjang(a, t) {
    let luas4 = a*t
    console.log(`Luas jajar genjang adalah ${luas4}`)
}
lingkaran(14)
segitiga(8, 12)
persegi_panjang(15, 10)
jajar_genjang(4, 5)

// let nama = prompt('Masukkan nama karyawan')
// let gaji_perhari = Number(prompt('Masukkan gaji perhari'))
// let jumlah_hari = Number(prompt('Masukkan jumlah hari bekerja'))

// function total_gaji() {
//     let total = gaji_perhari * jumlah_hari
//     alert(`Karyawan ${nama} memiliki total gaji sebesar Rp. ${total}`)
// }

// total_gaji()


// ASYNCHRONUS
// function satu() {
//     console.log("satu");
// }
// function dua() {
//     setTimeout(() => {
//         console.log("dua");
//     }, 3000)
// }
// function tiga() {
//     console.log("tiga");
// }

// satu()
// dua()
// tiga()

const token = ~~[Math.random() * 12345678]
const gambar = ['monalisa', 'betofen', 'raden salah']

function login(username) {
    return new Promise((success, failed) => {
        setTimeout(() => {
            console.log("loginnn... loading")
            if(username != "Daffa Al Ghifary") failed("Username salah!")
                success({token})
        }, 200);
    })
}

function getcode(token) {
    return new Promise((success, failed) => {
        if(!token) failed("No Token!")
            setTimeout(() => {
                console.log("Processing Codekey!")
                success ({codeKey: "abd1222"})
            }, 500)
    })
    
}

function lukisan(codeKey) {
    return new Promise((success, failed) => {
        if (!codeKey) failed("No Codekey ? No pass!")
            setTimeout(() => {
                console.log("Processing Image..")
                success ({gambar})
            }, 1500)
    })
    
}
async function userDisplay() {
    try {
        const {token} = await login("Daffa Al Ghifary")
    const {codeKey} = await getcode(token)
    const {gambar} = await lukisan(codeKey)

    console.log(`
        Token user adalah ${token}
        Key user adalah ${codeKey}
        Gambar user adalah ${gambar}    
    `)
    } catch(err) {
        console.log(err)
    }
    
}
userDisplay()
// user.then(function(response) {
//     const {token} = response
//     getcode(token).then(function(response) {
//         const {codeKey} = response
//         console.log(codeKey)

//         lukisan(codeKey).then(function(response) {
//             const {gambar} = response
//             console.log(gambar)
//         }).catch(err => console.log(err))
//     }).catch(err => console.log(err))
// }).catch(err => console.log(err))