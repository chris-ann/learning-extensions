const ulethLogo = document.getElementById("logoUleth");

const updateLogo = document.createElement("h1");
updateLogo.textContent = "University of Bestbridge";
updateLogo.style.color = "white";

// const parentElement = ulethLogo.parentNode;
// parentElement.replaceChild(updateLogo, ulethLogo);

ulethLogo.replaceWith(updateLogo);

const brandheader = document.getElementsByClassName("brand-header");
console.log(brandheader[0]);
brandheader[0].textContent = "New Media 4 Life";

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(request.message)
        document.body.style.backgroundColor = request.message;

        let newbkg = chrome.runtime.getURL("images/lookout.png")
        document.getElementsByClassName("hero-main")[0].style.backgroundImage = `url(${newbkg})`;

        const newImage = document.createElement("img");
        newImage.src = chrome.runtime.getURL("images/ilovenmed.png");
        newImage.classList = "new-image";


        var allHTML = document.body.innerHTML;
        document.body.innerHTML = ""
        document.body.appendChild(newImage);
        document.body.innerHTML += allHTML;


        sendResponse({ message: "Message received" })
    }
);