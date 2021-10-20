'use strict'

function saveToStorage(kay, val) {
    localStorage.setItem(kay, JSON.stringify(val))

}

function loadFromStorage(kay) {
    var val = localStorage.getItem(kay)
    return JSON.parse(val)
}