let scoreHome = document.getElementById("scoreHome")
let scoreGuest = document.getElementById("scoreGuest")
let scoreH = 0
let scoreG = 0


function addOneHome() {
    scoreH += 1
    scoreHome.innerText = scoreH
}

function addTwoHome() {
    scoreH += 2
    scoreHome.innerText = scoreH
}

function addThreeHome() {
    scoreH += 3
    scoreHome.innerText = scoreH
}

function addOneGuest() {
    scoreG += 1
    scoreGuest.innerText = scoreG
}

function addTwoGuest() {
    scoreG += 2
    scoreGuest.innerText = scoreG
}

function addThreeGuest() {
    scoreG += 3
    scoreGuest.innerText = scoreG
}