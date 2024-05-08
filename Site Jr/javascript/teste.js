function alternarCorFundo(divClicada) {
    var corAtual = divClicada.style.backgroundColor;

    if (corAtual === 'white' || corAtual === '') {
        divClicada.style.backgroundColor = 'black';
    } else {
        divClicada.style.backgroundColor = 'white';
    }
}