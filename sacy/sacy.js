
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

function imgMira1(){
   var img = document.getElementById('imageContentChange');
   img.setAttribute('src', 'images/crosshair/crosshair1.png')
   document.getElementById("importMira").innerHTML = "0;P;h;0;f;0;0l;4;0o;0;0a;1;0f;0;1b;0";
}
function imgMira2(){
    var img = document.getElementById('imageContentChange');
    img.setAttribute('src', 'images/crosshair/crosshair2.png')
    document.getElementById("importMira").innerHTML = "Teste 2";
}
function imgMira3(){
    var img = document.getElementById('imageContentChange');
    img.setAttribute('src', 'images/crosshair/crosshair3.png')
    document.getElementById("importMira").innerHTML = "Teste 3";
}
function imgMira4(){
    var img = document.getElementById('imageContentChange');
    img.setAttribute('src', 'images/crosshair/crosshair4.png')
    document.getElementById("importMira").innerHTML = "Teste 4";
}
function imgMira5(){
    var img = document.getElementById('imageContentChange');
    img.setAttribute('src', 'images/crosshair/crosshair5.png')
    document.getElementById("importMira").innerHTML = "Teste 5";
}
function imgMira6(){
    var img = document.getElementById('imageContentChange');
    img.setAttribute('src', 'images/crosshair/crosshair6.png')
    document.getElementById("importMira").innerHTML = "Teste 6";
}
function imgMira7(){
    var img = document.getElementById('imageContentChange');
    img.setAttribute('src', 'images/crosshair/crosshair7.png')
    document.getElementById("importMira").innerHTML = "Teste 7";
}
function imgMira8(){
    var img = document.getElementById('imageContentChange');
    img.setAttribute('src', 'images/crosshair/crosshair8.png')
    document.getElementById("importMira").innerHTML = "Teste 8";
}
function imgMira9(){
    var img = document.getElementById('imageContentChange');
    img.setAttribute('src', 'images/crosshair/crosshair9.png')
    document.getElementById("importMira").innerHTML = "Teste 9";
}
function imgMira10(){
    var img = document.getElementById('imageContentChange');
    img.setAttribute('src', 'images/crosshair/crosshair10.png')
    document.getElementById("importMira").innerHTML = "Teste 10";
}
function imgMira11(){
    var img = document.getElementById('imageContentChange');
    img.setAttribute('src', 'images/crosshair/crosshair11.png')
    document.getElementById("importMira").innerHTML = "Teste 11";
}