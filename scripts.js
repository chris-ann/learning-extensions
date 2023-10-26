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
        sendResponse({ message: "Message received" })
    }
);