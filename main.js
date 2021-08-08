// Checks if its the first time loading the site
var firstTime = localStorage.getItem("loadedBefore");

// Stores cookie of loadedBefore if its the first time
if (!firstTime) {
    localStorage.setItem("loadedBefore", "true")

    localStorage.setItem("lang", "en");
}

// Sets the language
let currentLang = (language) => {
    return localStorage.getItem("lang");
}

// Changes language and stores cookie once changed
function langChange() {

    if (localStorage.getItem("lang") == "en") {

        // change language
        currentLang = "ga";
        localStorage.setItem("lang", "ga");
        console.log("changing language...");
        getJSON();


    } else if (localStorage.getItem("lang") == "ga") {

        // change language
        currentLang = "en";
        localStorage.setItem("lang", "en");
        console.log("changing language...");
        getJSON();

    } else {
        console.log("Error: language isn't set");
    }
}

// Long ass way to get the name of the page but hey it works
let url = window.location.pathname;
let currentPage = url.substring(url.lastIndexOf("/") + 1);
currentPage = currentPage.split(".", 1);
currentPage = currentPage[0];

// -------------------------------- RLI TIMES JS ------------------------------

// -------------------------------- END RLI TIMES JS ------------------------------

// Gets all elements in DOM that are translatable
var elements = document.querySelectorAll("[text]");
var headerElements = document.querySelectorAll("[header]");

// testing
// TODO console.log(elements);

// Creates a request for the JSON
/* TODO const jsonRequest = new Request(`/${localStorage.getItem("lang")}-text.json`);

console.log(jsonRequest);

const getJSON = function() {
    fetch(jsonRequest)
        .then((response) => response.json())
        .then((data) => {
            inject(data)
        });
}

// Variable for just the page.
var currentPageText;

const inject = (res) => {
    console.log(res.header);


    var i = 0;
    headerElements.forEach(el => {
        el.innerText = res.header[i];
        console.log("changing things");
        i++;
    });
    i = 0;

    // find the json variable that corresponds to the page
    for (let [key, value] of Object.entries(res)) {

        if (key === currentPage) {
            currentPageText = key[value];
        }
    }

    //inject json into html
    const replaceText = (el) => {
        const key = el.innerText;
        el.innerText = res[key] || key;
        // TODO console.log("success!\n", el);
    }
    elements.forEach(el => replaceText(el));

};*/