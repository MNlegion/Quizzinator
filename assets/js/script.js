var s=59
var m=1
var q
    
function quizStart() {
    document.getElementById('timer').value=m+":"+s+" remaining"
    s=s-1
    q=setTimeout("quizStart()", 1000)
    if (s<1)
    { m=m-1; s=59;}
    
    if (m<0)
    {
    quizStop();
    }
    }
    function quizStop()
    {
    clearTimeout(q)
    document.getElementById('timer').value="Time's Up!"
    }

    const Questions = [{
        id: 0,
        q: "Inside which HTML element do we put the JavaScript?",
        a: [{ text: "<scripting>", isCorrect: false },
            { text: "<javascript>", isCorrect: false },
            { text: "<script>", isCorrect: true },
            { text: "<js>", isCorrect: false }
        ]
  
    },
    {
        id: 1,
        q: "Where is the correct place to insert a JavaScript file?",
        a: [{ text: "The <head> section", isCorrect: false, isSelected: false },
            { text: "The <body> section", isCorrect: false },
            { text: "Both the <head> and <body> section", isCorrect: true },
            { text: "Outside the <body> section", isCorrect: false }
        ]
  
    },
    {
        id: 2,
        q: "Which is the correct way to write an IF statement in JavaScript?",
        a: [{ text: "if i = 5", isCorrect: false },
            { text: "if (i == 5)", isCorrect: true },
            { text: "if i == 5 then", isCorrect: false },
            { text: "if i = 5 then", isCorrect: false }
        ]
  
    },
    {
        id: 3,
        q: "How can you add a comment within JavaScript?",
        a: [{ text: "<!-- This is a comment -->", isCorrect: false, isSelected: false },
            { text: "//This is a comment", isCorrect: true },
            { text: "'This is a comment", isCorrect: false },
            { text: "*This is a comment*", isCorrect: false }
        ]
  
    },
    {
        id: 4,
        q: "How do you round the number 7.25, to the nearest integer?",
        a: [{ text: "round(7.25)", isCorrect: false, isSelected: false },
            { text: "rnd(7.25)", isCorrect: false },
            { text: "Math.round(7.25)", isCorrect: true },
            { text: "Math.rnd(7.25)", isCorrect: false }
        ]
  
    },
    {
        id: 5,
        q: "Which event occurs when the user clicks on an HTML element?",
        a: [{ text: "onclick", isCorrect: true, isSelected: false },
            { text: "onmouseclick", isCorrect: false },
            { text: "onmouseover", isCorrect: false },
            { text: "onchange", isCorrect: false }
        ]
    },
]

