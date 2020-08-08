//Update Code to JQuery

//Shows Day on header
var day = new Date();

var currentDay = document.getElementById("current_day");

currentDay.innerHTML = moment().format("ddd MMM Do YY");

//Text-block Color Change
//change text block color - past/current/future - if/else statements ?

// var textBlockHours = [
//     textBlock = day.getHours(8,0,0)
// ]

// var textBlock = document.querySelector(".col-10");

// var hour = day.getHours();

// function colorBlock() {
//     if (hour == 8) {
//         $("col-10").addClass(".present");
//     } else if (hour > 8) {
//         $("col-10").css(".future");
//     } else if (hour < 8) {
//         $("col-10").addClass(".past");
//     }
// };


//Stores "Task" into local storage / find easier/'shorter' way to code / Use Jquery
//Using arrays to store task??

//8 AM
var contentArea = document.getElementById("content_area");
var saveButton = document.getElementById("save_button");

saveButton.addEventListener("click", saveText);

contentArea.value = localStorage.getItem("8am");

function saveText() {
    localStorage.setItem("8am", contentArea.value);
}

//9 AM
var contentArea1 = document.getElementById("content_area1");
var saveButton1 = document.getElementById("save_button1");

saveButton1.addEventListener("click", saveText1);

contentArea1.value = localStorage.getItem("9am");

function saveText1() {
    localStorage.setItem("9am", contentArea1.value);
}

//10 AM
var contentArea2 = document.getElementById("content_area2");
var saveButton2 = document.getElementById("save_button2");

saveButton2.addEventListener("click", saveText2);

contentArea2.value = localStorage.getItem("10am");

function saveText2() {
    localStorage.setItem("10am", contentArea2.value);
}

//11 AM
var contentArea3 = document.getElementById("content_area3");
var saveButton3 = document.getElementById("save_button3");

saveButton3.addEventListener("click", saveText3);

contentArea3.value = localStorage.getItem("11am");

function saveText3() {
    localStorage.setItem("11am", contentArea3.value);
}

//12 AM
var contentArea4 = document.getElementById("content_area4");
var saveButton4 = document.getElementById("save_button4");

saveButton4.addEventListener("click", saveText4);

contentArea4.value = localStorage.getItem("12am");

function saveText4() {
    localStorage.setItem("12am", contentArea4.value);
}

//1 PM
var contentArea5 = document.getElementById("content_area5");
var saveButton5 = document.getElementById("save_button");

saveButton5.addEventListener("click", saveText5);

contentArea5.value = localStorage.getItem("1pm");

function saveText5() {
    localStorage.setItem("1pm", contentArea5.value);
}

//2 PM
var contentArea6 = document.getElementById("content_area6");
var saveButton6 = document.getElementById("save_button6");

saveButton6.addEventListener("click", saveText6);

contentArea6.value = localStorage.getItem("2pm");

function saveText6() {
    localStorage.setItem("2pm", contentArea6.value);
}

//3 PM
var contentArea7 = document.getElementById("content_area7");
var saveButton7 = document.getElementById("save_button7");

saveButton7.addEventListener("click", saveText7);

contentArea7.value = localStorage.getItem("3pm");

function saveText7() {
    localStorage.setItem("3pm", contentArea7.value);
}

//4 PM
var contentArea8 = document.getElementById("content_area8");
var saveButton8 = document.getElementById("save_button8");

saveButton8.addEventListener("click", saveText8);

contentArea8.value = localStorage.getItem("4pm");

function saveText8() {
    localStorage.setItem("4pm", contentArea8.value);
}


//5 PM
var contentArea9 = document.getElementById("content_area9");
var saveButton9 = document.getElementById("save_button9");

saveButton9.addEventListener("click", saveText9);

contentArea9.value = localStorage.getItem("5pm");

function saveText9() {
    localStorage.setItem("5pm", contentArea9.value);
}





