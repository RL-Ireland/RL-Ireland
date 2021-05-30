// Declares variable for storing language cookie, 1 is english, 2 is irish
var lang = 1;

// Stores cookie of language setting
localStorage.setItem(lang, lang);

// Changes language and stores cookie once changed
function langChange() {
    if (lang == 1) {
        lang = 2;
        localStorage.setItem(lang, lang);
        location.reload();
    } else {
        lang = 1;
        localStorage.setItem(lang, lang);
        location.reload();
    }
}