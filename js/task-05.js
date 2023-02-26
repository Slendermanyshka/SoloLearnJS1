const nameEl = document.getElementById('name-output');
const inputEl = document.getElementById('name-input');

inputEl.addEventListener("keyup",event=>{
if(inputEl.value === ""){    
    nameEl.textContent="Anonymous";  

}
else{
    nameEl.textContent=inputEl.value;  

}

});