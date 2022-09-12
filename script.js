
const alertButton = document.getElementById("mybutton");
console.log(alertButton)
alertButton.addEventListener("click", function () {
   alert("button clicked!");
});

const changeBackgroundButton = document.getElementById("change-background-button");
changeBackgroundButton.addEventListener("click", function () {
   const bodyElement = document.body
   bodyElement.classList.toggle("red-background");

})














