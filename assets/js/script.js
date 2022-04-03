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

   