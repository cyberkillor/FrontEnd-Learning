const button = document.querySelector("button")! as HTMLButtonElement;
const input1 = document.getElementById("fruit1") as HTMLInputElement;

button.addEventListener("click", function (){
    console.log(input1.value);
});