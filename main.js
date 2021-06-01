// Checks if its the first time loading the site
var firstTime = localStorage.getItem("loadedBefore");

// Stores cookie of loadedBefore if its the first time
if (!firstTime) {
    localStorage.setItem("loadedBefore", 1)
    localStorage.setItem("lang", 1);
}

// Changes language and stores cookie once changed
function langChange() {
    if (localStorage.getItem("lang") == 1) {
        localStorage.setItem("lang", 2);
        return location.reload();
    } else if (localStorage.getItem("lang") == 2) {
        localStorage.setItem("lang", 1);
        location.reload();
    }
}

// Loads page with language choices for title
window.onload = function() {
    if (localStorage.getItem("lang") == 1) {
        return document.getElementById("homepageTitle").innerHTML = `Welcome to the RL Ireland Wiki!`;
    } else if (localStorage.getItem("lang") == 2) {
        return document.getElementById("homepageTitle").innerHTML = `Fáilte go dtí Wiki RL Ireland!`;
    } else {
        return console.log("Error: language not loaded correctly");
    }
}

// Loads page with language choices
window.onload = function() {
    if (localStorage.getItem("lang") == 1) {
        return document.getElementById("innerPageContent").innerHTML = `This is a wiki for all things RLI`;
    } else if (localStorage.getItem("lang") == 2) {
        return document.getElementById("innerPageContent").innerHTML = `Fáilte go dtí Wiki RL Ireland!`;
    } else {
        return console.log("Error: language not loaded correctly");
    }
}

console.log(localStorage.getItem("lang"));