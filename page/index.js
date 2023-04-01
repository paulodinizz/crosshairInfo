const sidebars = document.querySelector(".myContainer");

const optionMenu = document.querySelector(".contentRowRightFullsize");
const dropdownSelect = optionMenu.querySelector(".dropdownSelect");
const options = optionMenu.querySelectorAll(".dropdownListItems");
const btnText = optionMenu.querySelector(".btnText");

dropdownSelect.addEventListener("click", () => {
optionMenu.classList.toggle("active");
});

const urlParams = new URLSearchParams(window.location.search);
const nickname = urlParams.get('nickname')

fetch("../../assets/json/players.json")
.then((response) => response.json())
.then((data) => {
    const player = data.find((e) => e.nickname == nickname);
    if(!player) return;
    const sidebar = document.createElement("div");
    sidebar.classList.add("sideBar");

    sidebars.appendChild(sidebar);

    sidebar.innerHTML = `
        <img src="../assets/images/players/${player.crosshairPage.profilePic}.png" alt="" class="image">
        <h2>${player.crosshairPage.namenick}</h2>
        <div class="social">
        <a target="_blank" href="https://www.instagram.com/${player.crosshairPage.instagram}/"><i class="icon ion-social-instagram"></i></a>
        <a target="_blank" href="https://twitter.com/${player.crosshairPage.twitter}"><i class="icon ion-social-twitter"></i></a>
        <a target="_blank" href="https://www.twitch.tv/${player.crosshairPage.twitch}"><i class="icon ion-social-twitch"></i></a>
        </div>
        <div class="buttonDiv">
        <a href="/main.html">
            <button class="btn">
            <span class="btn__inner">
                <span class="btn__slide"></span>
                <span class="btn__content">back to main page</span>
            </span>
            </button>
        </a>
        </div>
    `;
    player.crosshair.forEach((crosshair, i) => {
        const div = document.createElement("div");
        div.classList.add("dropdownListItems");
        div.onclick = () => {
            const dynamicImg = document.getElementById("imageContentChange");
            dynamicImg.src = crosshair.image;
            btnText.innerText = `Crosshair ${i + 1}`;
            optionMenu.classList.remove("active");
            const dynamicText = document.getElementById("importMira");
            dynamicText.innerHTML = crosshair.codes;
        };
        div.innerText = `Crosshair ${i + 1}`;
        document.getElementById("dropdown-crosshairs").appendChild(div);
    });
});
