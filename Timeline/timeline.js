// Stores a dictionary of all text to be displayed
const dict = {
    timelineTitle: {
        en: `The Timeline of RL Ireland`,
        ga: `Amlíne de RL Ireland`
    },
    pageContent: {
        en: `<h2>Origins</h2>
        <p>RLI was created in somewhat controversial circumstances, naturally. This is the story <strong>as far as we know</strong>.<br>
        Two lads from Donegal called Joseph and Darcy (you may have heard of them) were in 3rd year of secondary school and didn’t know many people around them who played Rocket League. 
        So Darcy had the idea to create RL Ireland, a place where all Irish Rocket League players can come together and play together, 
        a place where they could find teammates and hold tournaments. He told Joseph about this, and when Joseph got home, he made the Facebook page.<br>
        And that is how RLI began.</p>
        <h2>2015</h2>
        <p>The RL Ireland Facebook page was created on the 28th of December, and new members started trickling in.</p>
        <h2>2016</h2>
        <p>2016 was a fairly quiet year overall, and it's difficult to find out things about this time, but here's a bit of what we know:<br>
        Enwrong (along with one of his friends, sasm8) made an RL Ireland website, completely unrelated to the Facebook page, specifically for one tournament
        aimed at Irish Rocket League players. It didn't have much success, but through the process of making it, Enwrong found the Facebook page and joined it.<br>
        Enwrong, Darcy and XtremeNolaner all organised tournaments in a fairly random manner, which kept a steady stream of new people joining and kept the page active.
        Enwrong attempted a league system which unfortunately didn't catch on after the first season, however he did win the top division with Daithí, which is still the only
        RLI tournament he has won (lmao washed). Many a spontaneous 1v1 tournament was also organised.
        Around July 2016, XtremeNolaner made the Discord server for RLI.
        </p>
        <h2>2017</h2>
        <p>The first RLI LAN took place in The Convention Center in Dublin, called GamerCon, on the 18th and 19th of March. Dave Forehead, Daithi and Tully won, with Luke, Dormer and 1Junior1 (LivingLazerHD at the time)
        coming second. Lynxi, Airside, LTXSam and Warfare also played, Enwrong adminned the event, and Pandaa didn't play but showed up anyway.<br>
        After an argument between Darcy and Enwrong, Enwrong left the server in June. XtremeNolaner also left around this time after he sold his computer. This left Darcy
        on his own to run tournaments, and since he couldn't run tournaments as often as before by himself, RLI became a lot quieter than before. This is considered by some to be the beginning of the "dark ages" of RLI,
        however in reality tournaments were still being organised and the Discord server received an overhaul, with new text channels and roles being introduced.<br>
        Walshy should also get a small mention here for willingly donating in-game items for the prize pools of the occasional tournament that was organised.<br>
        
        </p>`,
        ga: `<h2>Bunús</h2>
        <p>Bhí RLI crúthaithe i gcúinsí conspóideach, dar ndóigh. Is é seo an scéal <strong>go bhfios dúinn</strong>.<br>
        Bhí dhá leaid ó Tír Chonaill darbh ainm Joseph agus Darcy (tá seans ann gur chuala tú faofa) sa tríú bhliain ar scoil. Ní raibh a fhios acu ar mórann daoine thart orthu a d'imir Rocket League.
        Mar sin, bhí an smaoineamh ag Darcy "Rocket League Ireland" a chrúthú, áit a dtiocfadh le imreoirí Éireannach a theacht le chéile agus imirt le chéile,
        áit a dtiocfadh leo cairde a dhéanamh agus comórtais a chrúthú. D'inis Darcy seo do Joseph, agus chomh luath agus a bhí Joseph sa bhaile, chruthaigh sé an leatheanach Facebook.<br>
        Agus is é sin an dóigh gur thoisigh Rocket League Ireland.</p>`
    },
    langChangeText: {
        en: `Tá an leitheanach seo ar fáil i <button type="button" onclick="langChange()" class="text-button"><strong>nGaeilge</strong></button>.`,
        ga: `This page is available in <button type="button" onclick="langChange()" class="text-button"><strong>English</strong></button>.`
    },
    headerBanner: {
        en: `<li><a href="../index.html">Home</a></li>
        <li><a href="timeline.html">Timeline</a></li>
        <li><a href="../Running-Jokes/running-jokes.html">Running Jokes</a></li>
        <li><a href="../Copypastas/copypastas.html">Copypastas</a></li>
        <li><a href="../Personalities/personalities.html">Personalities</a></li>`,
        ga: `<li><a href="../index.html">Baile</a></li>
        <li><a href="timeline.html">Amlíne</a></li>
        <li><a href="../Running-Jokes/running-jokes.html">Ábhair Grinn</a></li>
        <li><a href="../Copypastas/copypastas.html">Turscar</a></li>
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