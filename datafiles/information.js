PAGE=[
    
    {
        place:"Home",
        npc:"",
        isGame: false,
        background_change:3,
        background:"intro_npc.png",
        background2:"intro_stone.png",
        isStone: false,
        isQuestion:false,
        dialogue:["Hello player! You must be wondering where this is.", "This is the Mind Galaxy, inside your subconscious mind."
    , "Please follow me on a journey to recollect the memories from your past week.", "Your mission is to collect magical stones from the different planets, by interacting with different creatures, and answering questions about how last week went for you.", "Let's first head to the Planet of Botanical Garden."],
        nextpage:null
    },
    {
        place:"Planet of Botanical Garden",
        npc:"",
        isGame: false,
        background:"tree.png",
        isStone: false,
        isQuestion:false,
        dialogue: ["Welcome to the Planet of Botanical Garden. I am Pinar the pine tree!", "It feels good to finally get to talk to someone. You see, it gets lonely here in the winter.", "I am the only creature left in this garden. All the flowers and leaves withered due to the cold weather.", "What about you, did you feel lonely last week?"],
        //if isQuestion is true, 
        //we are accessing the questions from questions.js
        nextpage:2
    },
    {
        place:"Planet of Botaincal Garden",
        npc:"",
        isGame: false,
        background:"tree.png",
        isStone: false,
        isQuestion:true,
        dialogue: questions[0],
        nextpage:3
    },
    {
        place:"Planet of Botanical Garden",
        npc:"",
        isGame: false,
        background:"tree.png",
        isStone: false,
        isQuestion:true,
        dialogue: questions[1],
        nextpage:4
    },
    {
        place:"Planet of Botanical Garden",
        npc:"",
        isGame: false,
        background:"tree.png",
        isStone: false,
        isQuestion:true,
        dialogue: questions[2],
        nextpage:5
    },

    {
        place:"Planet of Botanical Garden",
        npc:"",
        isGame: false,
        background:"tree.png",
        isStone: false,
        isQuestion:true,
        dialogue: questions[3],
        nextpage:6
    },
    {
        place:"Planet of Botanical Garden",
        npc:"",
        isGame: false,
        background:"tree.png",
        isStone: false,
        isQuestion:false,
        dialogue: ["I know that I can get through this loneliness as long as I stand strong and firm. I just have to wait until Spring comes and flowers bloom again.", "Hey friend, could you help me plant these seeds of flowers for me?"],
        nextpage:7
    },
    {
        place:"Planet of Botanical Garden",
        npc:"",
        isGame: true,
        gameComponent:['seed1.PNG','seed2.PNG','seed3.PNG'],
        background:"tree_game.png", //background without seeds
        isStone: false,
        isQuestion:false,
        dialogue:"Click on the seeds to plant!",
        nextpage:8
    },
    {
        place:"Planet of Botanical Garden",
        npc:"",
        isGame: false,
        background:"1_stone.png",
        isStone: true,
        isQuestion:false,
        dialogue:["Here is your stone… and it looks like the guiding fairy has come to get you.", "By the way, I heard Moody Moon was having a moody day. Maybe you should go check on him?"],
        nextpage:null
    },
    {
        place:"Moody Moon",
        npc:"",
        isGame: false,
        background:"moon.png",
        isStone: false,
        isQuestion:false,
        dialogue:["Hey friend. I'm having a moody day. I heard you came to cheer me on.","People like the day more than the night. My whole night has been a failure.", "Last week, how often do you ever think that your life has been a failure?"],
        nextpage:10
    }
,
    {
        place:"Moody Moon",
        npc:"",
        isGame: false,
        background:"moon_with_fairy.png", //make it with north fairy
        isStone: false,
        isQuestion:true,
        dialogue:questions[4],
        nextpage:11
    },
    {
        place:"Moody Moon",
        npc:"",
        isGame: false,
        background:"moon.png",
        isStone: false,
        isQuestion:false,
        dialogue:["Moon: Thank you North Fairy. That made me feel better. Now, I feel just as good as the sun."],
        nextpage:12
    },
    {
        place:"Moody Moon",
        npc:"",
        isGame: false,
        background:"moon_2.png",
        isStone: false,
        isQuestion:true,
        dialogue:questions[5],
        nextpage:13
    },
    {
        place:"Moody Moon",
        npc:"",
        isGame: false,
        background:"moon.png",
        isStone: false,
        isQuestion:true,
        dialogue:questions[6],
        nextpage:14
    },
    {
        place:"Moody Moon",
        npc:"",
        isGame: false,
        background:"moon_2.png",
        isStone: false,
        isQuestion:true,
        dialogue:questions[7],
        nextpage:15
    },
    {
        place:"Moody Moon",
        npc:"",
        isGame: false,
        background:"moon.png",
        isStone: false,
        isQuestion:true,
        dialogue:questions[8],
        nextpage:16
    },
    {
        place:"Moody Moon",
        npc:"",
        isGame: false,
        background:"moon_2.png",
        isStone: false,
        isQuestion:true,
        dialogue:questions[9],
        nextpage:17
    },
    {
        place:"Moody Moon",
        npc:"",
        isGame: false,
        background:"moon.png",
        isStone: false,
        isQuestion:true,
        dialogue:questions[10],
        nextpage:18
    },
    {
        place:"Moody Moon",
        npc:"",
        isGame: false,
        background:"moon_2.png",
        isStone: false,
        isQuestion:true,
        dialogue:questions[11],
        nextpage:19
    },
    {
        place:"Moody Moon",
        npc:"",
        isGame: false,
        background:"moon.png",
        isStone: false,
        isQuestion:true,
        dialogue:questions[12],
        nextpage:20
    },
    {
        place:"Moody Moon",
        npc:"",
        isGame: true,
        background:"moon.png", // TODO to be implemented
        isStone: false,
        isQuestion:false,
        gameComponent:['star.PNG','star.PNG','star.PNG'],
        dialogue:["I should make the night brighter for people that admire me. Help me collect some sparkle dust so that I illuminate brighter!"],
        nextpage:21
    },
    {
        place:"Moody Moon",
        npc:"",
        isGame: false,
        background:"moon_2.png",
        isStone: false,
        isQuestion:false,
        dialogue:["Thank you friend! I feel hopeful about my future now. Do you?"],
        nextpage:22
    },
    {
        place:"Moody Moon",
        npc:"",
        isGame: false,
        background:"moon.png",
        isStone: false,
        isQuestion:true,
        dialogue:questions[13],
        nextpage:23
    }
,
    {
        place:"Moody Moon",
        npc:"",
        isGame: false,
        background:"2_stone.png",
        isStone: true,
        isQuestion:false,
        dialogue:["Now to the Planet of Time!"],
        nextpage:null
    },
    {
        place:"Planet of Time",
        npc:"",
        isGame: false,
        background:"hour_glass.png",
        isStone: false,
        isQuestion:false,
        dialogue:["Hello there. Welcome to the planet of time!", "I am Tick-Tock, the master of time. I've recently been feeling distracted.", "It feels like time is moving so quickly these days!", "Sometimes a whole day would pass by without being productive. What about you?"],
        nextpage:25
    },
    {
        place:"Planet of Time",
        npc:"",
        isGame: false,
        background:"hour_glass.png",
        isStone: false,
        isQuestion:true,
        dialogue:questions[14],
        nextpage:26
    },
    {
        place:"Planet of Time",
        npc:"",
        isGame: false,
        background:"hour_glass.png",
        isStone: false,
        isQuestion:true,
        dialogue:questions[15],
        nextpage:27
    },
    {
        place:"Planet of Time",
        npc:"",
        isGame: false,
        background:"hour_glass.png",
        isStone: false,
        isQuestion:true,
        dialogue:questions[16],
        nextpage:28
    },
    {
        place:"Planet of Time",
        npc:"",
        isGame: false,
        background:"hour_glass.png",
        isStone: false,
        isQuestion:true,
        dialogue:questions[17],
        nextpage:29
    },
    {
        place:"Planet of Time",
        npc:"",
        isGame: false,
        background_change:2,
        background:"hour_glass.png",
        background2:"3_stone.png",
        isStone: true,
        isQuestion:false,
        dialogue:["Well, I better head back quick before time runs out!","You should go check out the Well of Wellness next.","Here is your stone."],
        nextpage:null
    }
    ,
    {
        place:"Well of Wellness",
        npc:"",
        isGame: false,
        background:"well.png",
        isStone: false,
        isQuestion:false,
        dialogue:["Hello, you must be the human everyone's been talking about.", "I am the Well of Wellness. I make sure everyone is doing well. Let's see...", "Are you maintaining your wellness!"],
        nextpage:31
    },
    {
        place:"Well of Wellness",
        npc:"",
        isGame: false,
        background:"well.png",
        isStone: false,
        isQuestion:true,
        dialogue:questions[18],
        nextpage:32
    },
    {
        place:"Well of Wellness",
        npc:"",
        isGame: false,
        background:"well.png",
        isStone: false,
        isQuestion:true,
        dialogue:questions[19],
        nextpage:33
    },
    {
        place:"Well of Wellness",
        npc:"",
        isGame: false,
        background:"well.png",
        isStone: false,
        isQuestion:false,
        dialogue: ["Well, you've come a long way. It's probably been a tough journey.", "The final stone is inside the well. Pull up the bucket from the well to find the final stone."],
        nextpage:33
    },
    {
        place:"Well of Wellness",
        npc:"",
        isGame: true,
        background:"well.png",
        gameComponent:[],
        isStone: false,
        isQuestion:false,
        dialogue: ["Click on the rope to pull up the bucket."],
        nextpage:34
    },
    {
        place:"Well of Wellness",
        npc:"",
        isGame: false,
        background:"well_water.png",
        isStone: true,
        isQuestion:false,
        dialogue: ["The journey is complete! Let's head back."],
        nextpage:36
    },
    {
        place:"Home",
        npc:"",
        isGame: false,
        background:"intro.jpg",
        isStone: true,
        isQuestion:false,
        dialogue: ["Thank you for collecting all the stones."],
        nextpage:null
    }
]
