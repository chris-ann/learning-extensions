document.getElementById("blue").addEventListener("click", changeColor)
document.getElementById("green").addEventListener("click", changeColor)

function changeColor() {
    var color = this.getAttribute("id");

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        console.log(tabs[0].id)
        chrome.tabs.sendMessage(tabs[0].id, { message: color },
            function (response) {
                // put some text as the last child in body
                var newElement = document.createElement("span");
                newElement.textContent = response.message;
                document.body.appendChild(newElement);
            })
    })
}