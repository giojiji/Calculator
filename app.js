let screen = document.getElementById("screen")
let x;
let text = "";
let result;
let arrtext = [];




function getvalue(event) {
    x = event.target
    if (x.value != undefined && x.tagName == "INPUT") {
        if(text.length > 0 || arrtext.length > 0 || x.value != "+" && x.value != "/" && x.value != "*" && x.value != ".") {
        text += x.value
        // console.log(text.indexOf("."))
        // console.log(text.substring(1, text.indexOf(".")+1))
        console.log(!text.includes("."))
    }
        if (
            (text[text.length - 2] == "+" && (x.value == "+" || x.value == "-" || x.value == "/" || x.value == "*" || x.value == ".")) ||
            (text[text.length - 2] == "-" && (x.value == "+" || x.value == "-" || x.value == "/" || x.value == "*" || x.value == ".")) ||
            (text[text.length - 2] == "*" && (x.value == "+" || x.value == "-" || x.value == "/" || x.value == "*" || x.value == ".")) ||
            (text[text.length - 2] == "/" && (x.value == "+" || x.value == "-" || x.value == "/" || x.value == "*" || x.value == ".")) ||
            (text[text.length - 2] == "." && (x.value == "+" || x.value == "-" || x.value == "/" || x.value == "*" || x.value == "."))
        ) {

            text = Array.from(text)
            text.pop()
            if (text[text.length - 2] == ".") {
                text.pop()
            }
            text.toString()
            text = text.join("")
        }
        screen.innerHTML = text
    }
}


function calculate() {
    arrtext = Array.from(text)
    if (arrtext[arrtext.length - 1] != "*" &&
        arrtext[arrtext.length - 1] != "+" &&
        arrtext[arrtext.length - 1] != "-" &&
        arrtext[arrtext.length - 1] != "/" &&
        text.length > 0
    ) {
        result = eval(text);
        if (!isNaN(result)) {
            screen.innerHTML = result
        }
        text = result
    }

}

function reset() {
    text = ""
    screen.innerHTML = text
    arrtext = []
}



function del() {
    deltext = Array.from(text)
    deltext.pop()
    deltext.toString()
    text = deltext.join("")
    screen.innerHTML = text
    arrtext = []
}

function root() {
    if(text > 0){
    screen.innerHTML = Math.sqrt(text)
}
    text = Math.sqrt(text)
}

function myFunction() {
    var element = document.getElementsByClassName("myDIvV")[0];
    var headr = document.getElementsByClassName("header")[0];
    var calc = document.getElementsByClassName("calc")[0];
    element.classList.toggle("mystylee");
    headr.classList.toggle("blueheader");
    calc.classList.toggle("calcstyle");
    console.log(calc)
}
