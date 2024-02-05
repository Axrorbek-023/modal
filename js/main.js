var elModal = document.querySelector('.modal')
var elShadow = document.querySelector('.modal__shadow')
var elBody = document.querySelector('body')
function fnOpen() {
    elModal.classList.add('open__modal')
    elShadow.style.display = 'block'
    elBody.classList.add('scroll__none')
}

function fnClose() {
    elModal.classList.remove('open__modal')
    elShadow.style.display = 'none'
    // elBody.classList.remove('scroll__none')
}