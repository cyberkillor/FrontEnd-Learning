"use strict";
var button1 = document.getElementById("button1");
var input1 = document.getElementById("fruit1");
var button2 = document.getElementById("button2");
var input2 = document.getElementById("fruit2");
button1.addEventListener("click", function () {
    console.log(input1.value);
});
button2.addEventListener("click", function () {
    console.log(input2.value);
});
