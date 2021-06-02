// Stores a dictionary of all text to be displayed
const dict = {
    timelineTitle: {
        en: `The Timeline of RL Ireland`,
        ga: `Amlíne de RL Ireland`
    },
    pageContent: {
        en: `<h2>Origins</h2>
        <p>RLI was created in somewhat controversial circumstances, naturally. This is the story <strong>as far as we know</strong>.\n
        Two lads from Donegal called Joseph and Darcy (you may have heard of them) were in 3rd year of secondary school and didn’t know many people around them who played Rocket League. 
        So Darcy had the idea to create Rocket League Ireland, a place where all Irish Rocket League players can come together and play together, 
        a place where they could find teammates and hold tournaments. He told Joseph about this, and when Joseph got home, he made the Facebook page. 
        And that is how RLI began.
        </p>`,
        ga: `Is é seo wiki fa choinne RLI`
    },
    langChangeText: {
        en: `Tá an leitheanach seo ar fáil i <button type="button" onclick="langChange()" class="text-button"><strong>nGaeilge</strong></button>.`,
        ga: `This page is available in <button type="button" onclick="langChange()" class="text-button"><strong>English</strong></button>.`
    },
    headerBanner: {
        en: `<li><a href="index.html">Home</a></li>
        <li><a href="Timeline/timeline.html">Timeline</a></li>
        <li><a href="Running-Jokes/running-jokes.html">Running Jokes</a></li>
        <li><a href="Copypastas/copypastas.html">Copypastas</a></li>
        <li><a href="Personalities/personalities.html">Personalities</a></li>`,
        ga: `<li><a href="index.html">Baile</a></li>
        <li><a href="Timeline/timeline.html">Amlíne</a></li>
        <li><a href="Running-Jokes/running-jokes.html">Ábhair Grinn</a></li>
        <li><a href="Copypastas/copypastas.html">Turscar</a></li>
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
    document.getElementById("timelineTitle").innerHTML = dict.timeTitle.en;
    document.getElementById("innerPageContent").innerHTML = dict.pageContent.en;
    document.getElementById("langChangeText").innerHTML = dict.langChangeText.en;
    document.getElementById("headerBanner").innerHTML = dict.headerBanner.en;
} else if (localStorage.getItem("lang") == 2) {
    document.getElementById("timelineTitle").innerHTML = dict.mainTitle.ga;
    document.getElementById("innerPageContent").innerHTML = dict.pageContent.ga;
    document.getElementById("langChangeText").innerHTML = dict.langChangeText.ga;
    document.getElementById("headerBanner").innerHTML = dict.headerBanner.ga;
} else {
    console.log("Error: language not loaded correctly");
}