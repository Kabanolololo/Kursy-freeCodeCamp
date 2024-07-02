const inputText = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

checkButton.addEventListener("click", () => {
    const replace = inputText.value.toLowerCase().replace(/[^a-z0-9]/g,"");
    if (inputText.value === ""){
        alert("Please input a value");
    } else if (inputText.value.length === 1){
        result.innerText = `${inputText.value} is a palindrome`
    } else if (replace === replace.split('').reverse().join("")){
        result.innerText = `${inputText.value} is a palindrome`;
    } else {
        result.innerText = `${inputText.value} is not a palindrome`;    
    }
});