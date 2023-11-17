let block1Ele = document.getElementById("block1");
let block2Ele = document.getElementById("block2");
let firstHalfEle = document.getElementById("firstHalf");
let secondHalfEle = document.getElementById("secondHalf");
let subDivEle = document.getElementById("subDiv");
let arrowBox1Ele = document.getElementById("arrowBox1");

let page2Ele = document.getElementById("page2");
let secondPageBlock1Ele = document.getElementById("secondPageBlock1");
let secondPageBlock2Ele = document.getElementById("secondPageBlock2");
let secondPageBlock3Ele = document.getElementById("secondPageBlock3");
let arrowBox2Ele = document.getElementById("arrowBox2");
let arrowBox3Ele = document.getElementById("arrowBox3");

let thirdPageEle = document.getElementById("page3");
let arrowBox4Ele = document.getElementById("arrowBox4");
let arrowBox5Ele = document.getElementById("arrowBox5");

let fourthPageEle = document.getElementById("page4");
let arrowBox6Ele = document.getElementById("arrowBox6");
let arrowBox7Ele = document.getElementById("arrowBox7");

let fifthPageEle = document.getElementById("page5");
let arrowBox8Ele = document.getElementById("arrowBox8");
let arrowBox9Ele = document.getElementById("arrowBox9");

let sixthPageEle = document.getElementById("page6");
let arrowBox10Ele = document.getElementById("arrowBox10");

setTimeout(() => {
    block1Ele.style.marginLeft = "-15vw";
    block2Ele.style.marginRight = "-15vw";
}, 1000);

setTimeout(() => {
    subDivEle.style.borderRadius = "500px";
    firstHalfEle.style.marginTop = "-30vw";
    secondHalfEle.style.marginBottom = "-30vw";
}, 2000);

setTimeout(() => {
    arrowBox1Ele.style.visibility = "visible";
}, 3000);

arrowBox1Ele.onclick = function() {
    page2Ele.style.left = "0vw";
    setTimeout(() => {
        secondPageBlock1Ele.style.visibility = "visible";
        secondPageBlock1Ele.style.marginTop = "100px";
        secondPageBlock2Ele.style.visibility = "visible";
        secondPageBlock2Ele.style.marginTop = "100px";
        secondPageBlock3Ele.style.visibility = "visible";
        secondPageBlock3Ele.style.marginTop = "100px";

        arrowBox2Ele.style.visibility = "visible";
    }, 1000);
}

arrowBox2Ele.onclick = function() {
    page2Ele.style.left = "-100vw";
}

arrowBox3Ele.onclick = function() {
    thirdPageEle.style.left = "0vw";
}

arrowBox4Ele.onclick = function() {
    thirdPageEle.style.left = "-100vw";
}

arrowBox5Ele.onclick = function() {
    fourthPageEle.style.left = "0vw";
}

arrowBox6Ele.onclick = function() {
    fourthPageEle.style.left = "-100vw";
}

arrowBox7Ele.onclick = function() {
    fifthPageEle.style.left = "0vw";
}

arrowBox8Ele.onclick = function() {
    fifthPageEle.style.left = "-100vw";
}

arrowBox9Ele.onclick = function() {
    sixthPageEle.style.left = "0vw";
}

arrowBox10Ele.onclick = function() {
    sixthPageEle.style.left = "-100vw";
}