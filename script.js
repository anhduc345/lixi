const music = document.getElementById("music");
music.volume = 1.0;

document.addEventListener("click", () => {
    music.play();
    music.volume = 1.0;
});

// Tạo chữ rơi liên tục
function createText() {
    const text = document.createElement("div");
    text.classList.add("falling-text");
    text.innerText = "😘 Lì xì cho tôi đi 😘";

    // Vị trí ngang random
    text.style.left = Math.random() * window.innerWidth + "px";

    // Tốc độ rơi random
    text.style.animationDuration = (2 + Math.random() * 3) + "s";

    document.body.appendChild(text);

    // Xóa sau khi rơi xong
    setTimeout(() => {
        text.remove();
    }, 5000);
}

// Tạo chữ mỗi 100ms (rất nhiều chữ)
setInterval(createText, 150);
