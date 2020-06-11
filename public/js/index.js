const body = document.querySelector('body')
const modal = document.querySelector('#searchPointer')
const buttonSearch = document.querySelector('#pageHome div.content a')
const close = document.querySelector('#searchPointer form a')

buttonSearch.addEventListener('click', () =>{
    modal.classList.remove('hide')
    body.style.overflow = 'hidden'
    return false
})

close.addEventListener('click', () =>{
    modal.classList.add('hide')
    body.style.overflow = 'auto'
    return false
})

const titulo = document.querySelector('.content h1')

function typeWriter(elemen){
    const txtArray = elemen.innerHTML.split('')
    elemen.innerHTML = ''
    txtArray.forEach((letra, i) => {
        setTimeout(() => {
            elemen.innerHTML += letra
        }, 75 * i)
    });
    
}

typeWriter(titulo)

