questions=[
    {
        reverse:true,
        number:1,
        question:"I felt lonely.", 
        choices:["Rarely or none of the time (less than 1 day)","Some or a little of the time (1-2 days)", "Occasionally or a moderate amount of time (3-4 days)", "Most or all of the time (5-7 days)"],
        answer:"",
        reaction:["That must be nice! Hopefully, I will feel better when spring comes around too. I usually feel better when I can talk to the neighboring plants you see. Did you talk any less than usual this week?","I wonder why that might be so. Did you talk less than usual this week?"],
        react: [0, 1, 1, 1]
    },
    {
        reverse:false,
        number:2,
        question:"I talked less than usual.", 
        choices:["Rarely or none of the time (less than 1 day)","Some or a little of the time (1-2 days)", "Occasionally or a moderate amount of time (3-4 days)", "Most or all of the time (5-7 days)"],
        answer:"",
        reaction:["I see. How did you feel about your interaction with other people?"],
        react: [0, 0, 0, 0]
    },
    {
        reverse:false,
        number:3,
        question:"I felt that people dislike me.", 
        choices:["Rarely or none of the time (less than 1 day)","Some or a little of the time (1-2 days)", "Occasionally or a moderate amount of time (3-4 days)", "Most or all of the time (5-7 days)"],
        answer:"",
        reaction:["What did you think about the way people treated you?"],
        react: [0, 0, 0, 0]
    },
    {
        reverse:false,
        number:4,
        question:"People were unfriendly.", 
        choices:["Rarely or none of the time (less than 1 day)","Some or a little of the time (1-2 days)", "Occasionally or a moderate amount of time (3-4 days)", "Most or all of the time (5-7 days)"],
        answer:"",
        reaction:["Well… it was nice talking to you, human. Your visit certainly brightened up my day."],
        react: [0, 0, 0, 0]
    },
    {
        reverse:false,
        number:5,
        question:"I thought my life had been a failure.", 
        choices:["Rarely or none of the time (less than 1 day)","Some or a little of the time (1-2 days)", "Occasionally or a moderate amount of time (3-4 days)", "Most or all of the time (5-7 days)"],
        answer:"",
        reaction:["North Fairy: I don't think you're a failure, Moody Moon. During the night when everything is dark, you are the one who shines the brightest."],
        react: [0, 0, 0, 0]
    },
    {
        reverse:true,
        number:6,//this
        question:"I felt I was just as good as other people.", 
        choices:["Rarely or none of the time (less than 1 day)","Some or a little of the time (1-2 days)", "Occasionally or a moderate amount of time (3-4 days)", "Most or all of the time (5-7 days)"],
        answer:"",
        reaction:["Hmmm.. I want to know more about how you feel. Last week, how often did you feel sad?"],
        react: [0, 0, 0, 0]
    },
    {
        reverse:false,
        number:7,
        question:"I felt sad.", 
        choices:["Rarely or none of the time (less than 1 day)","Some or a little of the time (1-2 days)", "Occasionally or a moderate amount of time (3-4 days)", "Most or all of the time (5-7 days)"],
        answer:"",
        reaction:["Tell me more. How often did you feel depressed last week?"],
        react: [0, 0, 0, 0]
    },
    {
        reverse:false,
        number:8,
        question:"I felt depressed", 
        choices:["Rarely or none of the time (less than 1 day)","Some or a little of the time (1-2 days)", "Occasionally or a moderate amount of time (3-4 days)", "Most or all of the time (5-7 days)"],
        answer:"",
        reaction:["How often did you feel happy last week?"],
        react: [0, 0, 0, 0]
    },
    {
        reverse:true,
        number:9,//this
        question:"I was happy.", 
        choices:["Rarely or none of the time (less than 1 day)","Some or a little of the time (1-2 days)", "Occasionally or a moderate amount of time (3-4 days)", "Most or all of the time (5-7 days)"],
        answer:"",
        reaction:["I wonder how you did around family and friends. Did you feel better around them?"],
        react: [0, 0, 0, 0]
    },
    {
        reverse:false,
        number:10,
        question:"I felt that I could not shake off the blues even with help from my family or friends.", 
        choices:["Rarely or none of the time (less than 1 day)","Some or a little of the time (1-2 days)", "Occasionally or a moderate amount of time (3-4 days)", "Most or all of the time (5-7 days)"],
        answer:"",
        reaction:["Tell me more about your emotions."],
        react: [0, 0, 0, 0]
    },
    {
        reverse:false,
        number:11,
        question:"I felt fearful.", 
        choices:["Rarely or none of the time (less than 1 day)","Some or a little of the time (1-2 days)", "Occasionally or a moderate amount of time (3-4 days)", "Most or all of the time (5-7 days)"],
        answer:"",
        reaction:["I see."],
        react: [0, 0, 0, 0]
    },
    {        
        reverse:true,
        number:12,//this
        question:"I enjoyed life.", 
        choices:["Rarely or none of the time (less than 1 day)","Some or a little of the time (1-2 days)", "Occasionally or a moderate amount of time (3-4 days)", "Most or all of the time (5-7 days)"],
        answer:"",
        reaction:["I see."],
        react: [0, 0, 0, 0]
    },
    {
        reverse:false,
        number:13,
        question:"I had crying spells.", 
        choices:["Rarely or none of the time (less than 1 day)","Some or a little of the time (1-2 days)", "Occasionally or a moderate amount of time (3-4 days)", "Most or all of the time (5-7 days)"],
        answer:"",
        reaction:["I see. You've certainly made me day better by talking to me."],
        react: [0, 0, 0, 0]
    },
    {
        reverse:true,
        number:14,//this
        question:"I feel hopeful about my future.", 
        choices:["Rarely or none of the time (less than 1 day)","Some or a little of the time (1-2 days)", "Occasionally or a moderate amount of time (3-4 days)", "Most or all of the time (5-7 days)"],
        answer:"",
        reaction:["Here are your stones. Goodbye friend."],
        react: [0, 0, 0, 0]
    },
    {
        reverse:false,
        number:15,
        question:"I could not get 'going.'", 
        choices:["Rarely or none of the time (less than 1 day)","Some or a little of the time (1-2 days)", "Occasionally or a moderate amount of time (3-4 days)", "Most or all of the time (5-7 days)"],
        answer:"",
        reaction:["Are you able to focus?"],
        react: [0, 0, 0, 0]
    },
    {
        reverse:false,
        number:16,
        question:"I had trouble keeping my mind on what I was doing.", 
        choices:["Rarely or none of the time (less than 1 day)","Some or a little of the time (1-2 days)", "Occasionally or a moderate amount of time (3-4 days)", "Most or all of the time (5-7 days)"],
        answer:"",
        reaction:["Anything else?"],
        react: [0, 0, 0, 0]
    },
    {
        reverse:false,
        number:17,
        question:"I was bothered by things that usually don’t bother me.", 
        choices:["Rarely or none of the time (less than 1 day)","Some or a little of the time (1-2 days)", "Occasionally or a moderate amount of time (3-4 days)", "Most or all of the time (5-7 days)"],
        answer:"",
        reaction:["Tell me more."],
        react: [0, 0, 0, 0]
    },
    {
        reverse:false,
        number:18,
        question:"I felt that everything I did was an effort.", 
        choices:["Rarely or none of the time (less than 1 day)","Some or a little of the time (1-2 days)", "Occasionally or a moderate amount of time (3-4 days)", "Most or all of the time (5-7 days)"],
        answer:"",
        reaction:["I see."],
        react: [0, 0, 0, 0]
    },
    {
        reverse:false,
        number:19,
        question:"My sleep was restless.", 
        choices:["Rarely or none of the time (less than 1 day)","Some or a little of the time (1-2 days)", "Occasionally or a moderate amount of time (3-4 days)", "Most or all of the time (5-7 days)"],
        answer:"",
        reaction:["Great Job!","I see. What about your eating?"],
        react: [0, 1, 1, 1]
    },
    {
        reverse:false,
        number:20,
        question:"I did not feel like eating; my appetite was poor.", 
        choices:["Rarely or none of the time (less than 1 day)","Some or a little of the time (1-2 days)", "Occasionally or a moderate amount of time (3-4 days)", "Most or all of the time (5-7 days)"],
        answer:"",
        reaction:["Way to go!","I see."],
        react: [0, 1, 1, 1]
    },
]