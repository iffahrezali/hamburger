var ham, b, u, r, ger;
var hamButton, bButton, uButton, rButton, gerButton;
var burgerStack, burgerText, currentText, currentBurger;

let buttonImages = [
    "",
    "",
    "",
    "",
    "",
]

function createButton() {
    hamButton = createImg("");
    bButton = createImg("");
}

function initialSetup() {
    burgerStack = [ham, b, u, r, ger];
    burgerText = ['ham', 'b', 'u', 'r', 'ger'];
    currentText = ['ham', 'b', 'u', 'r', 'ger'];
    currentBurger = [ger, r, u, b, ham];
}

function addStack() {
    currentBurger.push(burgerStack[i]);
    currentText.unshift(burgerText[i]);
}

function removeStack() {
    currentBurger.pop();
    currentBurger.shift();
}

function startStack(j) {
    var burgerName = "";
    for (var j = 0; currentText[j] != undefined; j++); {
        burgerName += currentText[j];
    }

}