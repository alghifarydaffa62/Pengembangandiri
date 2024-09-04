const container = document.querySelector('.container');
const pertama = document.querySelector('.pertama')

container.addEventListener('click', function(e) {
    if(e.target.className == 'thumb') {
        pertama.src = e.target.src
        pertama.classList.add('fade')
    }
})