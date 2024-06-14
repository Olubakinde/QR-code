let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

// Function to generate QR code
function generateQR() {
    // Checking if input field has text
    if (qrText.value.length > 0) {
        // Generating QR code using an API and setting the image source
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img"); // Displaying the image container
    } else {
        qrText.classList.add("error"); // Adding a CSS class for error styling
        setTimeout(() => {
            qrText.classList.remove("error"); // Removing the error class after 1 second
        }, 1000);
    }
}