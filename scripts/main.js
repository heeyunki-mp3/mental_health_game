function initialize(){
    //current states
    pageIndex = 0;
    currentProgress = 0;
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
    npcDiv.innerHTML = "";
    infoDiv.innerHTML = "";
    
    pageElement = PAGE[pageIndex[0]][pageIndex[1]];

    //create npc image
    let npcImage = document.createElement("img");
    npcImage.src = "../images/npc/"+pageElement.npc;
    npcDiv.appendChild(npcImage);

    //create dialogue
    if (pageElement.isQuestion){ //if question
        let questionEl = document.createElement("div");
        questionEl.innerHTML = pageElement.dialogue.question;
        let formEl = document.createElement("form");
        formEl.id = "questionForm";

        var questionName = "question "+pageElement.dialogue.number

        //create radio button for choices for the question
        for (var i; i<pageElement.dialogue.choices.length; i++){
            let labelEl = document.createElement("label");
            let radioEl = document.createElement("input");
            radioEl.type = "radio";
            radioEl.name = questionName;
            value = i;
            let choiceSpan = document.createElement("span");
            choiceSpan.innerHTML = pageElement.dialogue.choices[i];
            labelEl.appendChild(radioEl);
            labelEl.appendChild(choiceSpan);
            formEl.appendChild(lableEl);
        }
        
        let submitButton = document.createElement("button");
        submitButton.innerHTML = "Submit";
        submitButton.onclick = function(){
            pageElement.dialogue.answer = formEl.questionName;
            reactToTheResponse();
        }
    }
    else{ // if it's an informative page (dialogue)
        var dialogueIndex = 0;
        infoDiv.innerHTML = pageElement.dialogue[dialogueIndex];
        let nextButton = document.createElement("button");
        nextButton.onclick =function(){
            if (dialogueIndex<pageElement.dialogue.length-1){
                dialogueIndex++;
                infoDiv.innerHTML = pageElement.dialogue[dialogueIndex];
            }
            else{ //finished talking (moving on to the next page)
                if(pageElement.nextPage!=NULL){
                    loadPage(pageElement.nextPage);
                    //nextpage = 2
                }
            }
        }
    }
}
function reactToTheResponse(){

}
function loadPage(toPage){
    pageIndex = toPage;
    display();
}