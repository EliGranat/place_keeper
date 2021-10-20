'use strict'
var gUser;
const userStorageName = 'user'

function createUser(username, date, color, colorTxt, email, age) {
    gUser = {
        username,
        date,
        color,
        colorTxt,
        email,
        age
    }
    saveToStorage(userStorageName, gUser)
    loadDifaultUser()
}
console.log();

function loadDifaultUser() {
    var user = loadFromStorage(userStorageName)
    ceangeColor(user.color, user.colorTxt)
}