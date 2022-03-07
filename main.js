// defines lang buttons
const langENButton = document.getElementsByClassName('lang-en');
const langGAButton = document.getElementsByClassName('lang-ga');

// Checks if its the first time loading the site
var firstTime = localStorage.getItem("loadedBefore");

// Stores cookie of loadedBefore if its the first time
if (!firstTime) {
    localStorage.setItem("loadedBefore", "true")

    localStorage.setItem("lang", "en");
}

// Sets the language
let currentLang = () => {
    return localStorage.getItem("lang");
}

document.addEventListener("DOMContentLoaded", (event) => {
    if (localStorage.getItem("lang") == "ga") {
        // change language
        currentLang = "ga";
        localStorage.setItem("lang", "ga");
        getJSON();

        // sets lang button styles
        langGAButton.style.backgroundColor = "#E19226";
    }
})

function langChangeEN() {

    if (localStorage.getItem("lang") == "ga") {

        // change language
        currentLang = "en";
        localStorage.setItem("lang", "en");
        getJSON();

        // changes style of buttons
        langENButton.style.backgroundColor = "#E19226";

    } else {
        return console.log("ERROR: tried to change to current language selection (EN).")
    }

}

function langChangeGA() {

    if (localStorage.getItem("lang") == "en") {

        // change language
        currentLang = "ga";
        localStorage.setItem("lang", "ga");

        getJSON();

        // changes style of buttons
        langGAButton.style.backgroundColor = "#E19226";

    } else {
        return console.log("ERROR: tried to change to current language selection (GA).")
    }

}

// Long ass way to get the name of the page but hey it works
let url = window.location.pathname;
let currentPage = url.substring(url.lastIndexOf("/") + 1);
currentPage = currentPage.split(".", 1);
currentPage = currentPage[0];

// Gets all elements in DOM that are translatable
var elements = document.querySelectorAll("[data-text]");
var headerElements = document.querySelectorAll("[data-header]");

var dict;

const getJSON = async function() {

    // gets the file of text based on current language selection
    return fetch("/text.json")
        // store text in "data"
        .then((response) => response.json())
        .then((data) => {
            // injects text based on current language selection
            fireInjection(data);
        });
}

function injectLanguage(key) {

    // construct the dataAttribute search term ie 'data-title'
    var dataAttribute = "data-" + key; // data = title

    // find the html element using the dataAttribute key
    var el = document.querySelectorAll('[' + dataAttribute + ']');

    // check if you have the element to work on?
    if (el.length > 0) {
        // set the text of the element to be the text found for current key and current lang
        el[0].innerHTML = dict[key][localStorage.getItem("lang")];
    }
}

function fireInjection(res) {
    dict = res;
    // Iterate through each key in your dictionary
    Object.keys(dict).forEach(function(key) {
        injectLanguage(key);
    });
}


// QUOTES JS

// ! Checks if the page is called "quotes". Could stop working if page is renamed
if (currentPage == "quotes") {
    const quotesList = document.getElementById('quotesList');
    const searchBar = document.getElementById('searchBar');

    // Checks if there is a searchbar in the page
    if (searchBar) {
        let quotes = [];

        // Searchbar JS (taken from yt tutorial)
        searchBar.addEventListener('keyup', (e) => {
            const searchString = e.target.value.toLowerCase();

            const filteredQuotes = quotes.filter((quote) => {
                return (
                    quote.text.toLowerCase().includes(searchString) ||
                    quote.author.toLowerCase().includes(searchString) ||
                    quote.date.toLowerCase().includes(searchString)
                );
            });
            displayQuotes(filteredQuotes);
        });

        // Fetches quotes and inserts them into DOM
        const loadQuotes = async() => {
            try {
                const res = await fetch('/quotes.json');
                quotes = await res.json();
                displayQuotes(quotes);
            } catch (err) {
                console.error(err);
            }
        };

        const displayQuotes = (quotesToBeDisplayed) => {
            const htmlString = quotesToBeDisplayed
                .map((quote) => {
                    return `
            <li class="quote">
                <p class="quote-text">${quote.text}</p>
                <p class="quote-author"> - ${quote.author}</p>
                <p class="quote-date">${quote.date}</p>
            </li>
        `;
                })
                .join('');
            quotesList.innerHTML = htmlString;
        };

        loadQuotes();
    }
}
// END QUOTES JS


// START PERSONALITES JS
if (currentPage == "personalities") {
    const personalitiesList = document.getElementById('personalitiesList');
    const searchBar = document.getElementById('searchBar');

    // Checks if there is a searchbar in the page
    if (searchBar) {
        let personalities = [];

        // Searchbar JS (taken from yt tutorial)
        searchBar.addEventListener('keyup', (e) => {
            const searchString = e.target.value.toLowerCase();

            const filteredPersonalities = personalities.filter((personality) => {
                return (
                    personality.name.toLowerCase().includes(searchString) ||
                    personality.reason.toLowerCase().includes(searchString) ||
                    personality.bio.toLowerCase().includes(searchString)
                );
            });
            displayPersonalities(filteredPersonalities);
        });

        // Fetches personalities and inserts them into DOM
        const loadPersonalities = async() => {
            try {
                const res = await fetch('/persons.json');
                personalities = await res.json();
                displayPersonalities(personalities);
            } catch (err) {
                console.error(err);
            }
        };

        const displayPersonalities = (personalitiesToBeDisplayed) => {
            const htmlString = personalitiesToBeDisplayed
                .map((personality) => {
                    return `
            <li class="personality">
                <h3 class="personality-name" id="${personality.name}">${personality.name}</h3>
                <p class="personality-reason"> Biggest Achievement: ${personality.reason}</p>
                <p class="personality-bio">${personality.bio}</p>
            </li>
        `;
                })
                .join('');
            personalitiesList.innerHTML = htmlString;
        };

        loadPersonalities();
    }
}

// START TOURNAMENTS JS
if (currentPage == "tournaments") {
    const tournamentsList = document.getElementById('tournamentsList');
    const searchBar = document.getElementById('searchBar');

    // Checks if there is a searchbar in the page
    if (searchBar) {
        let tournaments = [];

        // Searchbar JS (taken from yt tutorial)
        searchBar.addEventListener('keyup', (e) => {
            const searchString = e.target.value.toLowerCase();

            const filteredtournaments = tournaments.filter((tournament) => {
                return (
                    tournament.name.toLowerCase().includes(searchString) ||
                    tournament.description.toLowerCase().includes(searchString) ||
                    tournament.date.toLowerCase().includes(searchString)
                );
            });
            displayTournaments(filteredtournaments);
        });

        // Fetches tournaments and inserts them into DOM
        const loadTournaments = async() => {
            try {
                const res = await fetch('/tournaments.json');
                tournaments = await res.json();
                displayTournaments(tournaments);
            } catch (err) {
                console.error(err);
            }
        };

        const displayTournaments = (tournamentsToBeDisplayed) => {
            const htmlString = tournamentsToBeDisplayed
                .map((tournament) => {
                    return `
            <li class="tournament">
                <h3 class="tournament-name"><a href="${tournament.link}">${tournament.name}</a></h3>
                <p class="tournament-date">${tournament.date}</p>
                <p class="tournament-description">${tournament.description}</p>
            </li>
        `;
                })
                .join('');
            tournamentsList.innerHTML = htmlString;
        };

        loadTournaments();
    }
}