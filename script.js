var button = document.getElementById("search-button");
var query = document.getElementById("Ssearch-text");
var sterm ="";


function afterbutton(){
        if (query.value.length > 0) {
            sterm = query.value;// send it to search engine 
            query.value="";
            } }

function afterkeypress(Event){
    if (query.value.length > 0 && Event.keycode ===13) {
        sterm = query.value;// send it to search engine 
        query.value="";
        } }

button.addEventListner("click",afterbutton);
query.addEventListner("keypress",afterkeypress);