const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

function startCamera() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
        })
        .catch(error => {
            alert("Camera access denied");
        });
}

function takePhoto() {
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
}

function downloadPhoto() {
    const link = document.createElement("a");
    link.download = "photo.png";
    link.href = canvas.toDataURL();
    link.click();
}
