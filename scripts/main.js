function initialize(){
    //current states
    pageIndex = 35; //modify this if you want to test different stages.
    currentProgress = 0;
    showMap = false;

    stoneCount = 0;
    mentalScore = 0;
    //elements from the html page
    pageTitle = document.getElementById("title");
    npcDiv = document.getElementById("npc");
    infoDiv = document.getElementById("information");
    navDiv = document.getElementById("navigation");
    stoneSpan = document.getElementById("stoneCount");
    bodyTag = document.getElementById("body");
    mapElement = document.getElementById('canvas1');
    enterButton = document.getElementById('enterButton');
    display();
}
function display(){
    pageElement = PAGE[pageIndex];
    if(pageIndex == PAGE.length-1){
        endOfGame();
        return;
    }
    displayBackground();
    displayTitle();
    displayStoneCount();
    displayBody();
    showMap = true;
    if (showMap){
        mapElement.style.visibility = 'visible';
        displayMap();//TODO! Alayna, please implement this :DD
    }
    else {
        mapElement.style.visibility = 'hidden';
        enterButton.style.visibility = 'hidden';
    }
}
function displayTitle(){
    pageTitle.innerHTML = pageElement.place;
}
function displayBackground(){
    bodyTag.style.backgroundImage = "url(images/background/"+pageElement.background+")";
}
function displayStoneCount(){
    
    if(pageElement.isStone){
        stoneCount++;
    }
    stoneSpan.innerHTML = stoneCount;
}
function displayBody(){
    npcDiv.innerHTML = "";
    infoDiv.innerHTML = "";
    
    //create npc image
    let npcImage = document.createElement("img");
    //TODO: UNCOMMENT THIS WHEN IMAGES ARE IMPLEMENTED
    //npcImage.src = "../images/npc/"+pageElement.npc;
    npcDiv.appendChild(npcImage);

    console.log("page: "+ pageIndex);
    //create dialogue
    if (pageElement.isQuestion){ //if question
        loadQuestion();
    }
    else{ 
        if (pageElement.isGame){
            loadGame(pageElement);
        }
        else{ // if it's an informative page (dialogue)
            loadDialogue();
        }
    }
}

function loadPage(toPage){
    pageIndex = toPage;
    display();
}

function loadGame(el){
    let gameStatement = document.createElement("div");
    gameStatement.innerHTML = el.dialogue;
    let gamebody = document.createElement("div");
    infoDiv.appendChild(gameStatement);
    for (var i=0; i<el.gameComponent.length;i++){
        var tmpImg = document.createElement("img");
    
        tmpImg.src = "images/minigame/"+el.gameComponent[i];
        tmpImg.className = "gameItems";
        tmpImg.onclick =function(){
            this.style.visibility = "hidden";
            if(checkEndOfGame()){
                if(!(el.nextpage==null)){
                    var nextButton = document.createElement("button");
                    nextButton.className = "nextPageButton";
                    nextButton.innerHTML = "Next Page";
                    nextButton.onclick =function(){
                        loadPage(pageElement.nextpage);
                    }
                    infoDiv.appendChild(nextButton);
                    //ex: nextpage = 2 (index of the page in PAGE)
                }
                else{
                    showMap = true;
                    mapElement.style.visibility = 'visible';
                    displayMap();
                }
            }
        }
        gamebody.appendChild(tmpImg);
    }

    infoDiv.appendChild(gameStatement);
    infoDiv.appendChild(gamebody);
}

function checkEndOfGame(){
    var gameItems = document.getElementsByClassName("gameItems");
    for (const gi of gameItems){
        if (gi.style.visibility!="hidden"){
            return false;
        }
    }
    return true;
}
function loadDialogue(){
    var dialogueIndex = 0;
    var dialogueDiv = document.createElement("div");
    dialogueDiv.className = "dialogueDiv";
    dialogueDiv.innerHTML = pageElement.dialogue[dialogueIndex];
    var nextButton = document.createElement("button");
    nextButton.className = "nextArrow";
    nextButton.innerHTML = ">";
    nextButton.onclick =function(){
        if (dialogueIndex<pageElement.dialogue.length-1){
            dialogueIndex++;
            dialogueDiv.innerHTML = pageElement.dialogue[dialogueIndex];
            if(!(pageElement.background2==null)&&pageElement.background_change==dialogueIndex){
                bodyTag.style.backgroundImage = "url(images/background/"+pageElement.background2+")";
            }
        }
        else{ //finished talking (moving on to the next page)
            if(!(pageElement.nextpage==null)){
                loadPage(pageElement.nextpage);
                //ex: nextpage = 2 (index of the page in PAGE)
            }
            else{
                showMap = true;
                mapElement.style.visibility = 'visible';
                displayMap();
            }
        }
        dialogueDiv.appendChild(nextButton);
    }
    dialogueDiv.appendChild(nextButton);
    infoDiv.appendChild(dialogueDiv);
}
function loadQuestion(){
    let questionDiv = document.createElement("div");
    questionDiv.className = "questionDiv";

    //create question
    let questionEl = document.createElement("div");
    questionEl.innerHTML = pageElement.dialogue.question;
    questionEl.className = "questionItself";
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
        radioEl.className = "rad-input";

        let choiceSpan = document.createElement("span");
        choiceSpan.innerHTML = pageElement.dialogue.choices[i];
        choiceSpan.className = "rad-text";
        let radioCheck = document.createElement("span");
        radioCheck.className = "rad-design";
        labelEl.className = "rad-label";


        labelEl.appendChild(radioEl);
        labelEl.appendChild(radioCheck);
        labelEl.appendChild(choiceSpan);
        labelEl.appendChild(document.createElement("br"));
        formEl.appendChild(labelEl);
    }
    
    let submitButton = document.createElement("button");
    submitButton.className = "questionSubmitButton";
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
        questionDiv.innerHTML=pageElement.dialogue.reaction[pageElement.dialogue.react[parseInt(pageElement.dialogue.answer)]]; 
        
        console.log(pageElement.nextpage);
        //move onto the next page
        if(!(pageElement.nextpage==null)){
            var nextButton = document.createElement("button");
            nextButton.innerHTML = ">";
            nextButton.className = "nextArrow";
            nextButton.onclick =function(){
                loadPage(pageElement.nextpage);
            }
            questionDiv.appendChild(nextButton);
            //ex: nextpage = 2 (index of the page in PAGE)
        }
        else{
            showMap = true;
            mapElement.style.visibility = 'visible';
            displayMap();
        }
    }
    questionDiv.appendChild(questionEl);
    questionDiv.appendChild(formEl);
    questionDiv.appendChild(submitButton);
    infoDiv.appendChild(questionDiv);
}

function calculateResult(){
    for (const qu of questions){
        if(reverse){
            mentalScore += -1*(parseInt(answer)-4);
        }
        else{
            mentalScore += parseInt(answer)+1;
        }
    }
}

function endOfGame(){
    displayBackground();
    displayTitle();
    displayStoneCount();
    displayBody();
    resultString = "Your score is "+mentalScore+"!!!!!\n"+ ((mentalScore>20)?"The assessment indicates that you are at risk of depression":"The assessment indicates that you are not at risk of depression ");

    resultEl = document.createElement("div");
    resultEl.innerHTML = resultString;
    resultEl.className = "resultDiv";

    disclaimerString = "You just completed the Center for Epidemiologic Studies-Depression Scale (CES-D) assessment. The CES-D assessment is a self-report to evaluate your feelings, behavior, and outlook from the past week. \
    \
    <br /><br /> <b>Disclaimer:<b> <br /> <br /> \
    The CES-D assessment is not always an accurate measure for depression. To diagnose depression, a doctor usually runs a series of assessments, such as a physical exam, lab tests, mental health history, personal history, mental evaluation, and cognitive evaluation. \n\
    Do not attempt to self-diagnose diseases or disorders, because misdiagnosing poses the risk of mistaking other serious physical diseases for depression. Please consult a doctor.\n\
    This interactive game of CES-D assessment was created to make mental health assessments more accessible to people. Mental health assessments should be taken regularly like health check-ups, but due to social stigma around depression and a lack of awareness, people with depression often do not reach out for professional help.\n\
    The purpose of the game is to make people more aware of their mental states and more comfortable with psychological assessments by making a depression assessment more fun and interactive. It is not the goal of the game to accurately detect depression. Players should use the game as an initial screening (and/or to track mental wellbeing), and consult a doctor afterwards."
    
    disclaimerEl =document.createElement("div");
    disclaimerEl.innerHTML = disclaimerString;
    disclaimerEl.className = "disclaimerDiv";
    
    infoDiv.appendChild(resultEl);
    infoDiv.appendChild(disclaimerEl);
}