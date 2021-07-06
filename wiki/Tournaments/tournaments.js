// Checks if its the first time loading the site
var firstTime = localStorage.getItem("loadedBefore");

// Stores cookie of loadedBefore if its the first time
if (!firstTime) {
    localStorage.setItem("loadedBefore", 1)
    localStorage.setItem("lang", 1);
}

// Stores a dictionary of all text to be displayed
const dict = {
    title: {
        en: `RLI Tournaments`,
        ga: `Na Turnaimintí atá rite ag RLI`
    },
    pageContent: {
        en: `The tournaments will be here eventually.`,
        ga: `Beidh na turnaimintí le feiceail anseo i gceann tamall.`
    },
    langChangeText: {
        en: `Tá an leatheanach seo ar fáil i <button type="button" onclick="langChange()" class="text-button"><strong>nGaeilge</strong></button>.`,
        ga: `This page is available in <button type="button" onclick="langChange()" class="text-button"><strong>English</strong></button>.`
    },
    headerBanner: {
        en: `<li><a href="../wiki-index.html">Home</a></li>
        <li><a href="../Timeline/timeline.html">Timeline</a></li>
        <li><a href="../Quotes/quotes.html">Quotes</a></li>
        <li><a href="tournaments.html" id="current-page">Tournaments</a></li>
        <li><a href="../Personalities/personalities.html">Personalities</a></li>`,
        ga: `<li><a href="../wiki-index.html">Baile</a></li>
        <li><a href="../Timeline/timeline.html">Amlíne</a></li>
        <li><a href="../Quotes/quotes.html">Frásaí</a></li>
        <li><a href="tournaments.html" id="current-page">Turnaimint</a></li>
        <li><a href="../Personalities/personalities.html">Pearsantachtaí</a></li>`
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
    document.getElementById("title").innerHTML = dict.title.en;
    document.getElementById("innerPageContent").innerHTML = dict.pageContent.en;
    document.getElementById("langChangeText").innerHTML = dict.langChangeText.en;
    document.getElementById("headerBanner").innerHTML = dict.headerBanner.en;
} else if (localStorage.getItem("lang") == 2) {
    document.getElementById("title").innerHTML = dict.title.ga;
    document.getElementById("innerPageContent").innerHTML = dict.pageContent.ga;
    document.getElementById("langChangeText").innerHTML = dict.langChangeText.ga;
    document.getElementById("headerBanner").innerHTML = dict.headerBanner.ga;
} else {
    console.log("Error: language not loaded correctly");
}