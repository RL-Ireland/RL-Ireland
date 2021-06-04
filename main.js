// Checks if its the first time loading the site
var firstTime = localStorage.getItem("loadedBefore");

// Stores cookie of loadedBefore if its the first time
if (!firstTime) {
    localStorage.setItem("loadedBefore", 1)
    localStorage.setItem("lang", 1);
}

// Stores a dictionary of all text to be displayed
const dict = {
    mainTitle: {
        en: `Welcome to the RL Ireland Wiki!`,
        ga: `Fáilte go dtí Wiki RL Ireland!`
    },
    mainContent: {
        en: `This is a wiki for all things RLI`,
        ga: `Is é seo wiki fa choinne RLI`
    },
    langChangeText: {
        en: `Tá an leitheanach seo ar fáil i <button type="button" onclick="langChange()" class="text-button"><strong>nGaeilge</strong></button>.`,
        ga: `This page is available in <button type="button" onclick="langChange()" class="text-button"><strong>English</strong></button>.`
    },
    headerBanner: {
        en: `<li><a href="index.html" id="current-page">Home</a></li>
        <li><a href="Timeline/timeline.html">Timeline</a></li>
        <li><a href="Quotes/quotes.html">Quotes</a></li>
        <li><a href="Tournaments/tournaments.html">Tournaments</a></li>
        <li><a href="Personalities/personalities.html">Personalities</a></li>`,
        ga: `<li><a href="index.html" id="current-page">Baile</a></li>
        <li><a href="Timeline/timeline.html">Amlíne</a></li>
        <li><a href="Quotes/quotes.html">Frásaí</a></li>
        <li><a href="Tournaments/tournaments.html">Turnaimint</a></li>
        <li><a href="Personalities/personalities.html">Pearsantachtaí</a></li>`
    }
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
if (localStorage.getItem("lang") == 1) {
    document.getElementById("title").innerHTML = dict.mainTitle.en;
    document.getElementById("innerPageContent").innerHTML = dict.mainContent.en;
    document.getElementById("langChangeText").innerHTML = dict.langChangeText.en;
    document.getElementById("headerBanner").innerHTML = dict.headerBanner.en;
} else if (localStorage.getItem("lang") == 2) {
    document.getElementById("title").innerHTML = dict.mainTitle.ga;
    document.getElementById("innerPageContent").innerHTML = dict.mainContent.ga;
    document.getElementById("langChangeText").innerHTML = dict.langChangeText.ga;
    document.getElementById("headerBanner").innerHTML = dict.headerBanner.ga;
} else {
    console.log("Error: language not loaded correctly");
}