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
        ga: `<h2>Bunús</h2>
        <p>Bhí RLI crúthaithe i gcúinsí conspóideach, dar ndóigh. Is é seo an scéal <strong>go bhfios dúinn</strong>.\n
        Bhí dhá leaid ó Tír Chonaill darbh ainm Joseph agus Darcy (tá seans ann gur chuala tú faofa) sa tríú bhliain ar scoil. Ní raibh a fhios acu ar mórann daoine thart orthu a d'imir Rocket League.
        Mar sin, bhí an smaoineamh ag Darcy "Rocket League Ireland" a chrúthú, áit a dtiocfadh le imreoirí Éireannach a theacht le chéile agus imirt le chéile,
        áit a dtiocfadh leo cairde a dhéanamh agus comórtais a chrúthú. D'inis Darcy seo do Joseph, agus chomh luath agus a bhí Joseph sa bhaile, chruthaigh sé an leatheanach Facebook.
        Agus is é sin an dóigh gur thoisigh Rocket League Ireland.</p>`
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
    document.getElementById("timelineTitle").innerHTML = dict.timelineTitle.en;
    document.getElementById("innerPageContent").innerHTML = dict.pageContent.en;
    document.getElementById("langChangeText").innerHTML = dict.langChangeText.en;
    document.getElementById("headerBanner").innerHTML = dict.headerBanner.en;
} else if (localStorage.getItem("lang") == 2) {
    document.getElementById("timelineTitle").innerHTML = dict.timelineTitle.ga;
    document.getElementById("innerPageContent").innerHTML = dict.pageContent.ga;
    document.getElementById("langChangeText").innerHTML = dict.langChangeText.ga;
    document.getElementById("headerBanner").innerHTML = dict.headerBanner.ga;
} else {
    console.log("Error: language not loaded correctly");
}