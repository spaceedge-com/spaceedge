//websearch.js
   $( 'option[value="#"]' ).prop( 'selected', 'selected' ); //jQuery reselect #
	
function dosearch() {

var si = (web_search_form.search_engines.value);
var term = (web_search_form.searchterms.value);

if (si=="ask") {  var seng = "https://ask.com/web?q=";  } 
if (si === "bing") {  var seng = "https://www.bing.com/search?q=";  } 
if (si === "dogpile") {  var seng = "https://www.dogpile.com/info.dogpl/search/web?q=";  } 
if (si === "duckduckgo") {  var seng = "https://duckduckgo.com/?q=";  }
if (si === "ecosia") {  var seng = "https://www.ecosia.org/search?q=";  }
if (si === "gitHub") {  var seng = "https://github.com/search?q={searchTerms}&ref=opensearch";  }
if (si === "lilo") {  var seng = "https://search.lilo.org/searchweb.php?q=";  }
if (si === "onelook") {  var seng = "https://onelook.com/?w=";  }
if (si === "qwant") {  var seng = "https://www.qwant.com/?q=";  }
if (si === "stackexchange") {  var seng = "https://stackexchange.com/search?q=";  }
if (si === "stackoverflow") {  var seng = "https://stackoverflow.com/search?q={searchTerms}";  }
if (si === "startpage") {  var seng = "https://www.startpage.com/do/search?query=";  }
if (si === "swisscows") {  var seng = "https://swisscows.ch/?query=";  }
if (si === "wikipedia") {  var seng = "https://en.wikipedia.org/wiki/wiki.html?search=";  }
if (si === "wolframalpha") {  var seng = "https://www.wolframalpha.com/input/?i=";  }
if (si === "yahoo") {  var seng = "https://search.yahoo.com/search?p=";  } 

var submit = seng + term;
//alert ("After selection (submit): >>>> : " + submit);
window.location.href = submit;

}
