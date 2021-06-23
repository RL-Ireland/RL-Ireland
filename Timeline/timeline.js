// Checks if its the first time loading the site
var firstTime = localStorage.getItem("loadedBefore");

// Stores cookie of loadedBefore if its the first time
if (!firstTime) {
    localStorage.setItem("loadedBefore", 1)
    localStorage.setItem("lang", 1);
}

// Stores a dictionary of all text to be displayed
const dict = {
    timelineTitle: {
        en: `The Timeline of RL Ireland`,
        ga: `Amlíne de RL Ireland`
    },
    pageContent: {
        en: `<h2>Origins</h2>
        <p>RLI was created in somewhat controversial circumstances, naturally. This is the story <strong>as far as we know</strong>.<br><br>
        Two lads from Donegal called Joseph and Darcy (you may have heard of them) were in 3rd year of secondary school and didn’t know many people around them who played Rocket League. 
        So Darcy had the idea to create RL Ireland, a place where all Irish Rocket League players can come together and play together, 
        a place where they could find teammates and hold tournaments. He told Joseph about this, and when Joseph got home, he made the Facebook page.<br><br>
        And that is how RLI began.</p>
        <h2>2015</h2>
        <p>The RL Ireland Facebook page was created on the 28th of December, and new members started trickling in.</p>
        <h2>2016</h2>
        <p>2016 was a fairly quiet year overall, and it's difficult to find out things about this time, but here's a bit of what we know:<br><br>
        Enwrong (along with one of his friends, sasm8) made an RL Ireland website, completely unrelated to the Facebook page, specifically for one tournament
        aimed at Irish Rocket League players. It didn't have much success, but through the process of making it, Enwrong found the Facebook page and joined it.<br><br>
        Enwrong, Darcy and XtremeNolaner all organised tournaments in a fairly random manner, which kept a steady stream of new people joining and kept the page active.
        Enwrong attempted a league system which unfortunately didn't catch on after the first season, however he did win the top division with Daithí, which is only the second
        RLI tournament he has ever won (lmao washed). Many a spontaneous 1v1 tournament was also organised.
        Around July 2016, XtremeNolaner made the Discord server for RLI.
        </p>
        <h2>2017</h2>
        <p>The first RLI LAN took place in The Convention Center in Dublin, called GamerCon, on the 18th and 19th of March. Dave Forehead, Daithi and Tully won, with Luke, Dormer and 1Junior1 (LivingLazerHD at the time)
        coming second. Lynxi, Airside, LTXSam and Warfare also played, Enwrong adminned the event, and Pandaa didn't play but showed up anyway.<br><br>
        After an argument between Darcy and Enwrong, Enwrong left the server in June. XtremeNolaner also left around this time after he sold his computer. This left Darcy
        on his own to run tournaments, and since he couldn't run tournaments as often as before by himself, RLI became a lot quieter than before. This is considered by some to be the beginning of the "dark ages" of RLI,
        however in reality tournaments were still being organised and the Discord server received an overhaul, with new text channels and roles being introduced.<br><br>
        Walshy should also get a small mention here for willingly donating in-game items for the prize pools of the occasional tournament that was organised.<br><br>
        The Games eXpo Ireland LAN took place in the RDS in Dublin on the 26th of November, with Daithi and XDarkArcticX winning, LTXSam and Warfare coming second and Dave Forehead and
        Enwrong commentating. Dave Forehead later posted to Facebook about the GXI LAN that kickstarted the revival of RLI.
        <br><br><img src="../assets/Dave-Forehead-FB-post.png" alt="A picture of Dave Forehead's post on Facebook."><br><br>
        On the 28th of November, Dave Forehead was promoted to admin of the Facebook page by Darcy and XtremeNolaner gave him ownership of the discord server. Enwrong was also made admin on both platforms.
        The first staff meeting happened a day later between the four admins and the newest staff members, who were offered a place based on how long they'd been in the community and how active they'd been.
        They were Tully, Walshy and Daithi. The RLI twitter account was made on the 30th of November.<br><br>
        The first tournament RLI ever streamed was a 2v2 christmas event on the 3rd of December, won by Dry and Fusure. Back then we had tiered tournaments.
        <br><br><img src="../assets/RLI-christmas-2v2-tournament-results.jpg" alt="A spreadsheet of the tournament results."><br><br>
        The Dry vs McCluvin 1v1 showmatch helped bring RLI to the attention of people outside of Ireland for probably the first time, with help from DigitalBacon.
        Dry was constantly in the top 10 on the 1s leaderboard in the world at the time, and appeared on JohnnyBoi's stream.</p>
        <h2>2018</h2>
        <p>
        RLI became very active in 2018 as tournament after tournament was organised, nearly all of which were streamed, leading to faster growth for the community.
        RLI held a 6mans invitational tournament on the 19th of January, featuring the likes of Redeyes, Lawlurr, Mugg, Barzey, Mayday and Fusure (with blah coming in as a sub in the last match).
        This was also the first time an RLI event was won by a console player.<br><br>
        Barzey and Mayday became Operators on the 20th of January, but Mayday left shortly afterwards.<br><br>
        Team RLI (captained by Redeyes) took on Nixus' competitive team on the 24th of January, however the RLI team had barely played together and unfortunately lost.<br><br>
        RLI opened staff applications on the 13th of February, after which Pandaa, CaptainQwark and ItsJustAbe became Moderators. bNy became a graphic designer for RLI and 1Junior1 became a streamer.<br><br>
        RLI uploaded to their YouTube channel for the first time on the 25th of February with highlights of it's first ever 12 Titans tournament. They continued to post highlight videos and a couple of podcasts for a brief
        amount of time afterwards.<br><br>
        The RLI-Helper bot was introduced to the Discord server on the 10th of March, as Dave Forehead had gotten fed up with having to give people new roles in the server on a constant basis.<br><br>
        bNy made the RLI logo on the 26th of May, and the community was formally renamed from Rocket League Ireland to RL Ireland.<br><br>
        On the 24th of June, the Q-Con 2v2 LAN took place in Belfast, which was considered a massive success. Mugg and Fusure won with Dry and Crungus came second. Dave Forehead and Tully did most of the commentating on
        the day with the occasional interview and guest caster throughout the day. Darcy adminned the event, with help from Dannyboy. RLI merchandise was available for the first time at this point, with black and white hoodies
        and t-shirts on offer.
        <br><img src="../assets/RLI-belfast-lan-picture.jpg" alt="A picture of everyone from the Q-Con LAN together."><br><br>
        Redeyes won the Seasonal Elite Championship on the 13th of July. The concept of the tournament (attributed to Enwrong) was that a player's performance in the tournament was converted to points, and the top 6 played a 6mans tournament to
        decide a winner.<br><br>
        The Dublin Games Festival (DGF) LAN took place on the 24th of November, with The Dubliners, consisting of ItsPureLogic, Mugg and Fusure, winning and Aviators, made up of Enwrong, Pandaa and Durkan, coming second in a final that finished a minute before the internet would be turned off.
        Dave Forehead adminned the event, and ran a last minute stream off of his computer.<br><br>
        <img src="../assets/picture-of-dgf-lan.jpg" alt="A picture of the DGF LAN with people at the computers playing."><br><br>
        On the 7th of December, Redeyes became our Seasonal Elite Champion for the second time in a row.</p>
        <h2>2019</h2>
        <p>
        Enwrong started the 6mans league again on the 8th of January, which turned out to be much more successful than his previous attempt back in 2016, with over 30 participants and 4 divisions. Demoqz won it the first month.<br><br>
        RLI-Times was introduced on the 7th of February, a text channel within the Discord server run by Ghost and Blah that posted about what was going on in the RLI server from time to time.<br><br>
        RLI announced on the 8th of March that it planned to host it’s own LAN event for the first time ever in a gaming bar down in Cork.<br><br>
        On the 13th of March, Tully got demoted from Operator while Pandaa was promoted to Operator. On the 16th, carrickdan and John_Aka_Alwayz got promoted to Moderator, and RLI opened its Moderator applications for the second time. Captain Qwark left the staff team on the 6th of April to focus on exams<br><br>
        On the 7th of April, RLI was officially announced as European Games Week's Rocket League partner for their LAN event in June.<br><br>
        Daithí and Barzey left the staff team to focus on exams on the 8th of April.<br><br>
        RLI held it's first ever self-run LAN event on the 20th of April. Suitably called the RLI LAN, it took place in the 365itHub in Cork. It was a 3v3 LAN with 12 teams entering. Joseph (with help from Walshy) ran the event. Lynxi took a lot of photos for himself and for RLI. Dave Forehead and NuaLaoch casted the event with people coming in for casual interviews now and again. Most importantly, the event was won by FML, consisting of Fusure, Mugg and ItsPureLogic, with Yurt (Walshy, Adzer and Demoqz) coming second and Nuclear Storm Gaming (Enwrong, Arctic and Pandaa) coming third. Adzer was named MVP of the tournament and Pat. was given the Redeyes Redemption award, for playing the most above expectations, funded by JToPrey (who won a giveaway on Redeyes' stream, hence the name).<br><br>
        Carrickdan and John_aka_Alwayz got promoted to Operator on the day as well. Shortly after, LovelyCans, Demoqz and LTXSam were made Moderators.<br><br>
        <img src="../assets/rli-lan.jpeg" alt="A picture of the RLI LAN"><br><br>
        Mugg was announced as the 6mans Season 2 winner on the 25th of April. Walshy left the staff team on the same day after being with them for over a year.<br><br>
        On the 3rd of May, the Discord server reached the 500 member mark.<br><br>
        Redeyes became the third 6mans winner on the 5th of June.<br><br>
        Enwrong started a new 2v2 league that ran alongside the 6mans league on the 10th of June. The 4th season of 6mans started on the 13th, with Dave Forehead and John_aka_Alwayz in charge of it this time, instead of the usual Enwrong. A group of 6mans moderators helped them run it as before.<br><br>On the 14th of June, Dave Forehead updated the RLI Helper Bot so that it wouldn’t drop offline randomly.<br><br>On the 18th of June, Dave Forehead announced that RLI would enter ERLS (later renamed to IEL – Imperial Esports League).<br><br>On the 19th of June, Carrickdan decided to leave the RLI staff team.<br><br>On the 30th of June, RLI announced that it’d be helping run the RL tournament at Q-con XXVI.<br><br>On the 9th of July, Walshy and Redeyes were announced as the first of RLIs 2v2 league winners.<br><br>
        Signups for Season 2 of the 2v2 league were announced on the 13th of July, along with the major news that NSG would sponsor the top tier of the league, meaning the winners of Season 2 would be taking €50 as a prize.<br><br>JKee became the sole member of RLI’s media team on the 17th of July.<br><br>Jxffa became the 6mans Season 4 champion on the 27th of July.<br><br>RLI announced on the 29th of July that they would be helping Insomnia run a LAN.<br><br>
        On the 2nd of August, Enwrong and John_aka_Alwayz realised that Dave Forehead was onto something with the whole “preserving history” thing and made Liquipedia pages for <a href=”https://liquipedia.net/rocketleague/RL_Ireland/Q-CON/2018”>Q-Con 2018</a>, <a href=”https://liquipedia.net/rocketleague/RL_Ireland/DGF”>DGF 2018</a> and <a href=”https://liquipedia.net/rocketleague/RL_Ireland/LAN_Cork/2019”>RLI LAN 2019</a>.<br><br>
        On the 5th of August, Dave Forehead added the RLI logo as an emote to the Discord server.<br><br>On the 7th of August, LovelyCans was promoted to Operator and Jxffa was promoted to Moderator.<br><br>On the 21st of August, Insomnia Dubin confirmed they were having a Rocket League tournament at their event.<br><br>On the 1st of September, <a href=”https://liquipedia.net/rocketleague/RL_Ireland/Q-CON/2019”>Q-Con 2019</a> took place. Mugg & Fusure won the competition, with Redeyes and late sub Enwrong coming second. Enwrong adminned the event with help from Dave Forehead and a host of other members of the RLI staff team.<br><br><img src=”../assets/q-con-2019.jpg” alt=”A picture of Q-Con 2019”><br><br>A server rules channel was officially introduced into the Discord server on the 7th of September.<br><br>
        Demoqz left the staff team on the 9th of September.<br><br>EGW was cancelled on the 13th of September. It was a massive moment for esports in Ireland and Europe that year, sending shockwaves not just through RLI but through esports across the country. No-one was quite sure what would happen.<br><br>However, class acts, full time legends and absolute heroes Enwrong and Dave Forehead ensured that the Rocket league event from EGW wasn’t cancelled and instead took place in a gaming cafe that was owned by the EGW event organisers, meaning that those who paid for accommodation, travel and tickets still had something to look forward to.<br><br>The 5th season of RLI 6mans came to an end on the 19th of September with Mugg becoming the first and only two-time Premier champion. <br><br>Later that day, Barzey returned to the staff team as Moderator, along with Luachra.
        </p>
        `,
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
        <li><a href="timeline.html" id="current-page">Timeline</a></li>
        <li><a href="../Quotes/quotes.html">Quotes</a></li>
        <li><a href="../Tournaments/tournaments.html">Tournaments</a></li>
        <li><a href="../Personalities/personalities.html">Personalities</a></li>`,
        ga: `<li><a href="../index.html">Baile</a></li>
        <li><a href="timeline.html" id="current-page">Amlíne</a></li>
        <li><a href="../Quotes/quotes.html">Frásaí</a></li>
        <li><a href="../Tournaments/tournaments.html">Turnaimint</a></li>
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
    document.getElementById("title").innerHTML = dict.timelineTitle.en;
    document.getElementById("innerPageContent").innerHTML = dict.pageContent.en;
    document.getElementById("langChangeText").innerHTML = dict.langChangeText.en;
    document.getElementById("headerBanner").innerHTML = dict.headerBanner.en;
} else if (localStorage.getItem("lang") == 2) {
    document.getElementById("title").innerHTML = dict.timelineTitle.ga;
    document.getElementById("innerPageContent").innerHTML = dict.pageContent.ga;
    document.getElementById("langChangeText").innerHTML = dict.langChangeText.ga;
    document.getElementById("headerBanner").innerHTML = dict.headerBanner.ga;
} else {
    console.log("Error: language not loaded correctly");
}