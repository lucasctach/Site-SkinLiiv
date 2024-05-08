document.addEventListener('DOMContentLoaded', function() {

    abrir = document.querySelector('.abrir')

    janela = document.querySelector('.janela')

    fechar = document.querySelector('.fechar')

    fechar2 = document.querySelector('.fechar2')

    abrir.addEventListener('click', function(event) {
        janela.style.display = 'block'
    })

    fechar.addEventListener('click', function(event) {
        janela.style.display = 'none'
    })
    
    fechar2.addEventListener('click', function(event) {
        janela.style.display = 'none'
    })

})