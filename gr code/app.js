let container = document.querySelector(".container");
let qrInput = document.querySelector("#text");
let genbtn = document.querySelector("#generate");
let genimage = document.querySelector("#qr-image");
let preInput = "";

genbtn.onclick = function () {
    let input = qrInput.value.trim();
    if (!input || input === preInput) {
        return;
    } else {
        preInput = input;
        genbtn.innerText = "Generating QR code...";
        genimage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(input)}`;

        genbtn.disabled = true;
genbtn.innerText = "Generating QR code...";
genimage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(input)}`;

genimage.onload = function () {
    container.classList.add("active");
    genbtn.innerText = "Generate";
    genbtn.disabled = false;
};

        genimage.onerror = function () {
            alert("Failed to load QR code. Please try again.");
            genbtn.innerText = "Generate";
        };
        
    }
    
};

