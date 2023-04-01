let manageProfileButton = document.querySelector("#manageProfileButton");

manageProfileButton.addEventListener("click", clickManage);
function clickManage(event) {
    console.log(event);
    if (event.target.classList.contains("done")) {
        event.target.innerText = "프로필을 누르세요";
    } else {
        event.target.innerText = "프로필 관리";
    }
    event.target.classList.toggle("done");
}

let profiles = document.querySelectorAll(".profile>img");
profiles.forEach((item) => {
    item.addEventListener("click", clickProfile);
});

function clickProfile(event) {
    if (manageProfileButton.classList.contains("done")) {
        location.href = "../main/main.html";
        return;
    }

    event.target.src = "https://picsum.photos/180/180";
}
