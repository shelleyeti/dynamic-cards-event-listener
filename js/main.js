//select delete buttons
const delete1 = document.querySelector("#delete--1")
const delete2 = document.querySelector("#delete--2")

//OUTPUT select containers where to print to HTML
const container1 = document.querySelector("#firstContent");
const container2 = document.querySelector("#secondContent");


//select the input element
const inputText1 = document.querySelector("#firstText");
const inputText2 = document.querySelector("#secondText");

//add event listner using output location
inputText1.addEventListener("keyup", event => {
    firstContent.innerHTML = event.target.value;
    });
inputText2.addEventListener("keyup", event => {
    secondContent.innerHTML = event.target.value;
    });

//clears out text and content when delete button1 pressed
delete1.addEventListener("click", () => {
    document.querySelector("#firstText").value = "";
    document.querySelector("#firstContent").innerHTML = "";
})

//clears out text and content when delete button2 pressed
delete2.addEventListener("click", () => {
    document.querySelector("#secondText").value = "";
    document.querySelector("#secondContent").innerHTML = "";
})
