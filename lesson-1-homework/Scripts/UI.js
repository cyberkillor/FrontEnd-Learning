"use strict";
var button = document.querySelector("button");
var input1 = document.getElementById("fruit1");
button.addEventListener("click", function () {
    console.log(input1.value);
});
