PAGE=[
    
    {
        place:"Home",
        npc:"",
        background:"",
        isQuestion:false,
        dialogue:["Hello player! You must be wondering where this is.", "This is the Mental Galaxy, inside your subconscious mind."
    , "Please follow me on a journey to recollect the memories from your past week.", "Your mission is to collect magical stones from the different planets, by interacting with different creatures, and answering questions about how last week went for you.", "Let's first head to the Planet of Botanical Garden."],
        nextpage:null
    },
    {
        place:"Planet of Botanical Garden",
        npc:"",
        background:"",
        isQuestion:false,
        
        dialogue: ["Welcome to the Planet of Botanical Garden. I am Pinar the pine tree!", "It feels good to finally get to talk to someone. You see, it gets lonely here in the winter.", "I am the only creature left in this garden. All the flowers and leaves withered due to the cold weather.", "What about you, did you feel lonely last week?"],
        //if isQuestion is true, 
        //we are accessing the questions from questions.js
        nextpage:2
    },
    {
        place:"Planet of Botaincal Garden",
        npc:"",
        background:"",
        isQuestion:true,
        dialogue: questions[0],
        nextpage:3
    },
    {
        place:"Planet of Botanical Garden",
        npc:"",
        background:"",
        isQuestion:true,
        dialogue: questions[1],
        nextpage:4
    },
    {
        place:"Planet of Botanical Garden",
        npc:"",
        background:"",
        isQuestion:true,
        dialogue: questions[2],
        nextpage:5
    },

    {
        place:"Home",
        npc:"",
        background:"",
        isQuestion:false,
        dialogue:""
    },
    {
        place:"Home",
        npc:"",
        background:"",
        isQuestion:false,
        dialogue:""
    },
    {
        place:"Home",
        npc:"",
        background:"",
        isQuestion:false,
        dialogue:""
    },
    {
        place:"Home",
        npc:"",
        background:"",
        isQuestion:false,
        dialogue:""
    },
    {
        place:"Home",
        npc:"",
        background:"",
        isQuestion:false,
        dialogue:""
    }
,
    {
        place:"Home",
        npc:"",
        background:"",
        isQuestion:false,
        dialogue:""
    },
    {
        place:"Home",
        npc:"",
        background:"",
        isQuestion:false,
        dialogue:""
    },
    {
        place:"Home",
        npc:"",
        background:"",
        isQuestion:false,
        dialogue:""
    },
    {
        place:"Home",
        npc:"",
        background:"",
        isQuestion:false,
        dialogue:""
    },
    {
        place:"Home",
        npc:"",
        background:"",
        isQuestion:false,
        dialogue:""
    }
,
    {
        place:"Home",
        npc:"",
        background:"",
        isQuestion:false,
        dialogue:""
    },
    {
        place:"Home",
        npc:"",
        background:"",
        isQuestion:false,
        dialogue:""
    },
    {
        place:"Home",
        npc:"",
        background:"",
        isQuestion:false,
        dialogue:""
    },
    {
        place:"Home",
        npc:"",
        background:"",
        isQuestion:false,
        dialogue:""
    },
    {
        place:"Home",
        npc:"",
        background:"",
        isQuestion:false,
        dialogue:""
    }
]
