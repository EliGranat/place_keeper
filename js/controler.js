'use strict'

window.onload = init

function init() {
    loadDifaultUser()
}

function onShowAge(value) {
    // changeAge(value)
    const elShowAge = document.querySelector('.sAge')
    elShowAge.innerText = value
}

function onRegister(ev) {
    ev.preventDefault()
    const inputs = document.querySelectorAll('input')
    var input = []
    inputs.forEach(inp => {
        input.push(inp.value)
        if (inp.type === 'color') {
            inp.value = '#ff0000'
        } else {
            inp.value = ''
        }
    })
    createUser(input[0], input[1], input[2], input[3], input[4])
}


function ceangeColor(colorBgc, colorTxt) {
    const elBgcUser = document.querySelector('body')
    elBgcUser.style.backgroundColor = colorBgc
    elBgcUser.style.color = colorTxt

}