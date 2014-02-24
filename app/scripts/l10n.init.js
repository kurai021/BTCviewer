if (location.hash) {
    String.locale = location.hash.substr(1);	
}

var localize = function (string, fallback) {
    var localized = string.toLocaleString();
    if (localized !== string) {
        return localized;
    } else {
        return fallback;
    }
};

var charts = document.getElementById("%charts").firstChild;
var input = document.getElementById("%input").firstChild;
var amountinput = document.getElementById("%amount-input").firstChild;
var currencyinput = document.getElementById("%currency-input").firstChild;
var output = document.getElementById("%output").firstChild;
var amountoutput = document.getElementById("%amount-output").firstChild;
var currencyoutput = document.getElementById("%currency-output").firstChild;
var converter = document.getElementById("%converter").firstChild;
var paragraphabout = document.getElementById("%paragraph-about").firstChild;
var spanabout = document.getElementById("%span-about").firstChild;
var emabout = document.getElementById("%em-about").firstChild;
var news = document.getElementById("news").firstChild;
var news2 = document.getElementById("news2").firstChild;
var okabout = document.getElementById("ok_about").firstChild;
var quit = document.getElementById("quit").firstChild;

charts.nodeValue = localize("%charts", charts.nodeValue);
input.nodeValue = localize("%input", input.nodeValue);
amountinput.nodeValue = localize("%amount-input", amountinput.nodeValue);
currencyinput.nodeValue = localize("%currency-input", currencyinput.nodeValue);
output.nodeValue = localize("%output", output.nodeValue);
amountoutput.nodeValue = localize("%amount-output", amountoutput.nodeValue);
currencyoutput.nodeValue = localize("%currency-output", currencyoutput.nodeValue);
converter.nodeValue = localize("%converter", converter.nodeValue);
paragraphabout.nodeValue = localize("%paragraph-about", paragraphabout.nodeValue);
spanabout.nodeValue = localize("%span-about", spanabout.nodeValue);
emabout.nodeValue = localize("%em-about", emabout.nodeValue);
news.nodeValue = localize("news", news.nodeValue);
news2.nodeValue = localize("news2", news2.nodeValue);
okabout.nodeValue = localize("ok_about", okabout.nodeValue);
quit.nodeValue = localize("quit", quit.nodeValue);

document.documentElement.dir = localize("%locale.dir", document.documentElement.dir);
document.documentElement.lang = String.locale || document.documentElement.lang;