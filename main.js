// Checks if its the first time loading the site
var firstTime = localStorage.getItem("loadedBefore");

// Stores cookie of loadedBefore if its the first time
if (!firstTime) {
    localStorage.setItem("loadedBefore", 1)
    localStorage.setItem("lang", 1);
}

// Stores a dictionary of all text to be displayed
var dict = {
    mainTitle = {
        en = `Welcome to the RL Ireland Wiki!`,
        ga = `Fáilte go dtí Wiki RL Ireland!`
    },
    mainContent = {
        en = `This is a wiki for all things RLI`,
        ga = `Is é seo wiki fa choinne RLI`
    },
    langChangeText = {
        en = `This page is available in <button type="button" onclick="langChange()" class="text-button"><strong>English</strong></button>.`,
        ga = `Tá an leitheanach seo ar fáil i <button type="button" onclick="langChange()" class="text-button"><strong>nGaeilge</strong></button>.`
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
    document.getElementById("homepageTitle").innerHTML = dict.mainTitle.en;
    document.getElementById("innerPageContent").innerHTML = dict.mainContent.en;
    document.getElementById("langChangeText").innerHTML = dict.langChangeText.en;
} else if (localStorage.getItem("lang") == 2) {
    document.getElementById("homepageTitle").innerHTML = dict.mainTitle.ga;
    document.getElementById("innerPageContent").innerHTML = dict.mainContent.ga;
    document.getElementById("langChangeText").innerHTML = dict.langChangeText.ga;
} else {
    console.log("Error: language not loaded correctly");
}