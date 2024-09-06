const container = document.querySelector('.container');
const pertama = document.querySelector('.pertama')
const thumbs = document.querySelectorAll('.thumb')


container.addEventListener('click', function(e) {
    if(e.target.className == 'thumb') {
        pertama.src = e.target.src
        pertama.classList.add('fade')
    }
    setTimeout(function() {
        pertama.classList.remove('fade')
    }, 500)
    thumbs.forEach(function(thumb) {
        if(thumb.classList.contains('active')) {
            thumb.classList.remove('active')
        }
    })
    e.target.classList.add('active')
})
