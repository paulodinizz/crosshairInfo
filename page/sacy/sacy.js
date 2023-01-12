const optionMenu = document.querySelector(".contentRowRightFullsize"),
    dropdownSelect = optionMenu.querySelector(".dropdownSelect"),
    options = optionMenu.querySelectorAll(".dropdownListItems"),
    btnText = optionMenu.querySelector(".btnText");

dropdownSelect.addEventListener("click", () => optionMenu.classList.toggle("active"))

const crosshairs = [
    {  codes: '0;P;h;0;f;0;0l;4;0o;0;0a;1;0f;0;1b;0', images: 'images/crosshair/crosshair1.png'},
    {  codes:'0;s;1;P;h;0;0t;1;0l;4;0o;1;0a;1;0f;0;1t;3;1o;2;1a;1;1m;0;1f;0;S;c;0', images: 'images/crosshair/crosshair2.png'},
    {  codes:'0;s;1;P;o;0;0t;1;0l;4;0o;2;0a;1;0f;0;1b;0', images: 'images/crosshair/crosshair3.png'},
    {  codes:'aa', images: 'images/crosshair/crosshair4.png'},
    {  codes:'aa', images: 'images/crosshair/crosshair5.png'},
    {  codes:'aa', images: 'images/crosshair/crosshair6.png'},
    {  codes:'aa', images: 'images/crosshair/crosshair7.png'},
    {  codes:'aa', images: 'images/crosshair/crosshair8.png'},
    {  codes:'aa', images: 'images/crosshair/crosshair9.png'},
    {  codes:'aa', images: 'images/crosshair/crosshair10.png'},
    {  codes:'aa', images: 'images/crosshair/crosshair11.png'},
]

crosshairs.forEach((url, i) => {
    const div = document.createElement('div');
    div.classList.add('dropdownListItems')
    div.onclick = () =>{
        const dynamicImg = document.getElementById('imageContentChange')
        dynamicImg.src = url.images
        btnText.innerText = 'Crosshair ' + (i + 1)
        optionMenu.classList.remove("active");
        const dynamicText = document.getElementById('importMira')
        dynamicText.innerHTML = url.codes
    }
    div.innerText = 'Crosshair ' + (i + 1)

    document.getElementById('dropdown-crosshairs').append(div)
})



