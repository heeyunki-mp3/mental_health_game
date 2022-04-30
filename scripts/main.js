function initialize(){
    //current states
    pageIndex = [0,0];
    showMap = false;


    //elements from the html page
    pageTitle = document.getElementById("title");
    npcDiv = document.getElementById("npc");
    infoDiv = document.getElementById("information");
    navDiv = document.getElementById("navigation");
}
function display(){
    displayBody();
    if (showMap){
        displayMap();//TODO! Alayna, please implement this :DD
    }
    
}
function displayBody(){
    document.createElement()
}