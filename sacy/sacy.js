
const optionMenu = document.querySelector(".contentRowRightFullsize"), 
dropdownSelect = optionMenu.querySelector(".dropdownSelect"), 
options = optionMenu.querySelectorAll(".dropdownListItems"), 
btnText = optionMenu.querySelector(".btnText");

dropdownSelect.addEventListener("click", () => optionMenu.classList.toggle("active"))

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".optionText").innerText;
        btnText.innerText = selectedOption;

        optionMenu.classList.remove("active");
    })
})