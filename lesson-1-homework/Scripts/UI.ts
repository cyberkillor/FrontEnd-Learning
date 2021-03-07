const button1 = document.getElementById("button1") as HTMLButtonElement;
const input1 = document.getElementById("fruit1") as HTMLInputElement;

const button2 = document.getElementById("button2") as HTMLButtonElement;
const input2 = document.getElementById("fruit2") as HTMLInputElement;

button1.addEventListener("click", function (){
    console.log(input1.value);
});

button2.addEventListener("click", function (){
    console.log(input2.value);
});