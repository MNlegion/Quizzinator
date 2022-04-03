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
        q: "Where is the correct place to insert a JavaScript?",
        a: [{ text: "The <head> section", isCorrect: false, isSelected: false },
            { text: "The <body> section", isCorrect: false },
            { text: "Both the <head> and <body> section", isCorrect: true },
            { text: "Outside the <body> section", isCorrect: false }
        ]
  
    },
    {
        id: 2,
        q: "How to write an IF statement in JavaScript?",
        a: [{ text: "if i = 5", isCorrect: false },
            { text: "if (i == 5)", isCorrect: true },
            { text: "if i == 5 then", isCorrect: false },
            { text: "if i = 5 then", isCorrect: false }
        ]
  
    },
    {
        id: 3,
        q: "How can you add a comment in a JavaScript?",
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
  
// Set start
var start = true;
  
function iterate(id) {
  
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";
  
    const question = document.getElementById("question");
  
    // moving through question list
    question.innerText = Questions[id].q;
  
    // showing answer choices for each question
    const ch1 = document.getElementById('ch1');
    const ch2 = document.getElementById('ch2');
    const ch3 = document.getElementById('ch3');
    const ch4 = document.getElementById('ch4');
  
  
    // providing answer choice text  
    ch1.innerText = Questions[id].a[0].text;
    ch2.innerText = Questions[id].a[1].text;
    ch3.innerText = Questions[id].a[2].text;
    ch4.innerText = Questions[id].a[3].text;
  
    // giving true/false values to answers
    ch1.value = Questions[id].a[0].isCorrect;
    ch2.value = Questions[id].a[1].isCorrect;
    ch3.value = Questions[id].a[2].isCorrect;
    ch4.value = Questions[id].a[3].isCorrect;
  
    var selected = "";
  
    // Show selection for ch1
    ch1.addEventListener("click", () => {
        ch1.style.backgroundColor = "yellow";
        ch2.style.backgroundColor = "";
        ch3.style.backgroundColor = "";
        ch4.style.backgroundColor = "";
        selected = ch1.value;
    })
  
    // Show selection for ch2
    ch2.addEventListener("click", () => {
        ch1.style.backgroundColor = "";
        ch2.style.backgroundColor = "yellow";
        ch3.style.backgroundColor = "";
        ch4.style.backgroundColor = "";
        selected = ch2.value;
    })
  
    // Show selection for ch3
    ch3.addEventListener("click", () => {
        ch1.style.backgroundColor = "";
        ch2.style.backgroundColor = "";
        ch3.style.backgroundColor = "yellow";
        ch4.style.backgroundColor = "";
        selected = ch3.value;
    })
  
    // Show selection for ch4
    ch4.addEventListener("click", () => {
        ch1.style.backgroundColor = "";
        ch2.style.backgroundColor = "";
        ch3.style.backgroundColor = "";
        ch4.style.backgroundColor = "yellow";
        selected = ch4.value;
    })
  
    // Grabbing the evaluate button
    const evaluate = document.getElementsByClassName("submit");
  
    // Evaluate method
    evaluate[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "Correct!";
            result[0].style.color = "green";
        } else {
            result[0].innerHTML = "Oops, not quite!";
            result[0].style.color = "red";
        }
    })
}
  
if (start) {
    iterate("0");
}
  
// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;
  
next.addEventListener("click", () => {
    start = false;
    if (id < 5) {
        id++;
        iterate(id);
        console.log(id);
    }
  
})