// When the User tries to click checkbox, display a message, I TOLD YOU NOT TO CLICK THIS!!!
document.querySelector("#checkBox").addEventListener("click", function (e) {
    alert("I TOLD YOU NOT TO CLICK THIS, WITCHA HARD HEADED SELF !!!!");
    e.preventDefault();
});
// hidden message with the text Start typing, and a button that says Allow Typing. When the page initially displays, the textarea should be disabled, and the message hidden. .-->
let canType = false;
var textArea = document.getElementById("tArea");
var btn = document.getElementById("btn");

// btn.setAttribute("disabled");

btn.addEventListener("click",function (e) {
    console.log("something");
    e.preventDefault();
    if(canType)
    {
        textArea.removeAttribute("disabled","");
        console.log('canType');
        canType= false;
        textArea.innerText="Start typing"
    }
    else if (!canType)
    {
        textArea.setAttribute("disabled","");
        console.log('cantType');
        canType = true;
        textArea.innerText= ""
    }
});
textArea.addEventListener("keypress", function (e) {
    textArea.innerText=""
});
<!-- When the User clicks the button,. Display each number during the countdown, the the word LIFTOFF.-->
var number = 10;
var button = document.getElementById('h1');
var btn2 = document.getElementById("btn2");
function countdown () {
    var intervalID = window.setInterval(myCallback, 500);
    var x = 1;

    function myCallback() {

        button.innerHTML = number;
        x++;
        if (x === 12) {
            button.innerHTML = "LIFT OFF!!!";
            clearInterval(intervalID)
        }
        number--;
    }
}

btn2.addEventListener('click', countdown);




