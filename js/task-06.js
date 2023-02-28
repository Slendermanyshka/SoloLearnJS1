const inputEl = document.getElementById('validation-input');
inputEl.addEventListener("blur",handleColorChange);

function handleColorChange(event){
    let inputLength = inputEl.value.length;
    if(inputLength<=inputEl.dataset.length){
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
        console.log("GOOD");
    }
    else{
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid");
        console.log("BAD");
    }
};