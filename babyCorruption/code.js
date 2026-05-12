setInterval(function() {
var baby = document.createElement("img");
baby.src = "https://raw.githubusercontent.com/ianCVu/inn/refs/heads/main/babyCorruption/image.png";
baby.width = "500";
baby.height = "250";
baby.style.position = "fixed";
baby.style.zIndex = 9999999;
baby.style.top = Math.floor(Math.random() * 10000 - 1000) + "px";
baby.style.left = Math.floor(Math.random() * 10000 - 1000) + "px";
document.body.appendChild(baby);
}, 16);
