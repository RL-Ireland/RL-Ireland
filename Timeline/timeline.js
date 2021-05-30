// Stores the local language choice in a variable
var lang = localStorage.getItem(lang)

// Displays Irish or English of Origins
function displayOrigins() {
    if (lang == 1) {
        return document.getElementById("origins").innerHTML = `RLI was created in somewhat controversial circumstances, of course, we couldn’t have it any other way could we? This is the story as far as we know. Two lads from Donegal called Joseph and Darcy (you may have heard of them) were in 3rd year of secondary
        school and didn’t know many people around them who played Rocket League. So Darcy has the idea to create Rocket League Ireland, a place where all Irish Rocket League players can come together and play together, a place where they could find teammates
        and hold tournaments, he told Joseph about this…… and then Joseph got home first and made the Facebook page. And that is how RLI began.`;
    } else if (lang == 2) {
        return document.getElementById("origins").innerHTML = `Bhí RLI crúthaithe i gcúinsí conspóideach, dar ndóigh.`;
    } else {
        return console.log("Error getting language cookie.");
    }
}