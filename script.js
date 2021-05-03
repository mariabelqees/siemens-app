var button = document.getElementById("search-button");
var query = document.getElementById("Ssearch-text");
var sterm="";

button.addEventListener("click",afterbutton);
query.addEventListener("keypress",afterkeypress);


function afterbutton(){
    if (query.value.length > 0) {
        sterm = query.value;// send it to search engine 
       //query.value="";
        } }

function afterkeypress(event){
if (query.value.length > 0 && event.which ===13) {
    sterm = query.value;// send it to search engine 
    //query.value="";
    console.log(sterm);

    } }

