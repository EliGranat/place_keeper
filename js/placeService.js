'use strict'

var locationSave = []
const nameStorageLocation = 'locationUser'
let map;

function initMap() {
    locationSave = loadFromStorage(nameStorageLocation)
    if (!locationSave) {
        locationSave = []
    }
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 29.6276518, lng: 35.094155311 },

        zoom: 12,
    });
    var loc
    map.addListener("click", (mapsMouseEvent) => {
        let infoWindow = new google.maps.InfoWindow({
            position: mapsMouseEvent.latLng,
        });
        infoWindow.setContent(
            loc = JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
        );
        infoWindow.open(map);
        saveLocation(loc)
    });
}

function onMyLocation() {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };
            console.log(pos.lng, pos.lng);
            map.setCenter(pos);
        },
        () => {
            handleLocationError(true, infoWindow, map.getCenter());
        }
    );
}

function saveLocation(loc) {
    var location = JSON.parse(loc)
    locationSave.push({ lat: location.lat, lng: location.lng, name: onSaveLocation() })
    saveToStorage(nameStorageLocation, locationSave)
    console.log(
        location.lat,
        location.lng
    );
    console.log(locationSave);
}

function onSaveLocation() {

    if (confirm('do you want to save?')) {

        return prompt('Please enter name')
    }

}

///option 
var user = loadFromStorage('user')
ceangeColor(user.color, user.colorTxt)

function ceangeColor(colorBgc, colorTxt) {
    const elBgcUser = document.querySelector('body')
    elBgcUser.style.backgroundColor = colorBgc
    elBgcUser.style.color = colorTxt

}