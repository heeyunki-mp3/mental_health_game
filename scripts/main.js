function initialize(){
    //current states
    pageIndex = 2;
    currentProgress = 0;
    showMap = false;

    stoneCount = 0;

    //elements from the html page
    pageTitle = document.getElementById("title");
    npcDiv = document.getElementById("npc");
    infoDiv = document.getElementById("information");
    navDiv = document.getElementById("navigation");
    stoneSpan = document.getElementById("stoneCount");
    display();
}
function display(){
    stoneSpan.innerHTML = stoneCount;
    displayBody();
    if (showMap){
        displayMap();//TODO! Alayna, please implement this :DD
    }
}
function displayBody(){
    npcDiv.innerHTML = "";
    infoDiv.innerHTML = "";
    
    
    pageElement = PAGE[pageIndex];

    //create npc image
    let npcImage = document.createElement("img");
    //TODO: UNCOMMENT THIS WHEN IMAGES ARE IMPLEMENTED
    //npcImage.src = "../images/npc/"+pageElement.npc;
    npcDiv.appendChild(npcImage);

    console.log("page: "+ pageIndex);
    //create dialogue
    if (pageElement.isQuestion){ //if question
        let questionEl = document.createElement("div");
        questionEl.innerHTML = pageElement.dialogue.question;
        let formEl = document.createElement("form");
        formEl.id = "questionForm";

        questionName = "question "+pageElement.dialogue.number

        //create radio button for choices for the question
        
        for (var i=0; i<pageElement.dialogue.choices.length; i++){
            let labelEl = document.createElement("label");
            let radioEl = document.createElement("input");
            radioEl.type = "radio";
            radioEl.name = questionName;
            radioEl.value = i;
            let choiceSpan = document.createElement("span");
            choiceSpan.innerHTML = pageElement.dialogue.choices[i];
            labelEl.appendChild(radioEl);
            labelEl.appendChild(choiceSpan);
            formEl.appendChild(labelEl);
        }
        
        let submitButton = document.createElement("button");
        submitButton.innerHTML = "Submit";
        submitButton.onclick = function(){
            console.log("questionName: "+questionName);
            choicesRadios = document.getElementsByName(questionName);
            for (const choicesRadio of choicesRadios) {
                if (choicesRadio.checked) {
                    pageElement.dialogue.answer = choicesRadio.value;
                    break;
                }
            }
            //answer to the question is stored as the index of the chocies.
            console.log(pageElement.dialogue.answer);
            
            //react to the answer
            infoDiv.innerHTML=pageElement.dialogue.reaction[pageElement.dialogue.react[parseInt(pageElement.dialogue.answer)]]; 
           
            console.log(pageElement.nextpage);
            //move onto the next page
            if(!(pageElement.nextpage==null)){
                var nextButton = document.createElement("button");
                nextButton.innerHTML = "Next Page";
                nextButton.onclick =function(){
                    loadPage(pageElement.nextpage);
                }
                infoDiv.appendChild(nextButton);
                //ex: nextpage = 2 (index of the page in PAGE)
            }
            else{
                showMap = true;
                displayMap();
            }
        }
        infoDiv.appendChild(questionEl);
        infoDiv.appendChild(formEl);
        infoDiv.appendChild(submitButton);
    }
    else{ // if it's an informative page (dialogue)
        var dialogueIndex = 0;
        infoDiv.innerHTML = pageElement.dialogue[dialogueIndex];
        var nextButton = document.createElement("button");
        nextButton.innerHTML = ">";
        nextButton.onclick =function(){
            if (dialogueIndex<pageElement.dialogue.length-1){
                dialogueIndex++;
                infoDiv.innerHTML = pageElement.dialogue[dialogueIndex];
            }
            else{ //finished talking (moving on to the next page)
                if(!(pageElement.nextpage==null)){
                    loadPage(pageElement.nextpage);
                    //ex: nextpage = 2 (index of the page in PAGE)
                }
                else{
                    showMap = true;
                    displayMap();
                }
            }
            infoDiv.appendChild(nextButton);
        }
        infoDiv.appendChild(nextButton);
    }
}

function loadPage(toPage){
    pageIndex = toPage;
    display();
}