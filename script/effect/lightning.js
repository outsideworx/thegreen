let lightningTimer = null;
let pointerX = 0;
let pointerY = 0;

const lightningImages = [
    "../img/lightning_1.png",
    "../img/lightning_2.png",
    "../img/lightning_3.png"
];

function randomLightning() {
    return lightningImages[Math.floor(Math.random() * lightningImages.length)];
}

function createLightning(x, y) {
    const lightning = document.createElement("img");
    lightning.src = randomLightning();
    lightning.className = "lightning";
    lightning.style.left = x + "px";
    lightning.style.top = y + "px";
    document.body.appendChild(lightning);
    setTimeout(() => lightning.remove(), 200);
}

function updatePointer(e) {
    pointerX = e.clientX;
    pointerY = e.clientY;
}

function startStorm(e) {
    updatePointer(e);
    if (lightningTimer) {
        return;
    }

    createLightning(pointerX, pointerY);
    lightningTimer = setInterval(() => {
        createLightning(pointerX, pointerY);
    }, 200);
}

function stopStorm() {
    clearInterval(lightningTimer);
    lightningTimer = null;
}

document.body.addEventListener("pointerdown", (e) => {
    document.body.setPointerCapture(e.pointerId);
    startStorm(e);
});
document.body.addEventListener("pointermove", updatePointer);
document.body.addEventListener("pointerup", (e) => {
    stopStorm();
    const element = document.elementFromPoint(e.clientX, e.clientY);
    if (element && element.closest("a")) {
        element.closest("a").click();
    }
});
document.body.addEventListener("pointercancel", stopStorm);
document.body.addEventListener("pointerleave", stopStorm);