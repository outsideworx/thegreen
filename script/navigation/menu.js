function positionLinks() {
    const img = document.getElementById("main-image");

    const refWidth = 2852;
    const refHeight = 2000;
    const navigation = [
        {element: document.getElementById("gel"), x: 400, y: 820},
        {element: document.getElementById("tape"), x: 930, y: 820},
        {element: document.getElementById("snus"), x: 1500, y: 820},
        {element: document.getElementById("patch"), x: 2005, y: 820}
    ];

    const imgContainer = img.parentElement;
    const containerRect = imgContainer.getBoundingClientRect();

    const imgNaturalWidth = img.naturalWidth || refWidth;
    const imgNaturalHeight = img.naturalHeight || refHeight;

    const scale = Math.min(containerRect.width / imgNaturalWidth, containerRect.height / imgNaturalHeight);

    const displayedWidth = imgNaturalWidth * scale;
    const displayedHeight = imgNaturalHeight * scale;

    const offsetX = (containerRect.width - displayedWidth) / 2;
    const offsetY = (containerRect.height - displayedHeight) / 2;

    const gridScaleX = displayedWidth / refWidth;
    const gridScaleY = displayedHeight / refHeight;

    navigation.forEach(hs => {
        hs.element.style.left = `${offsetX + hs.x * gridScaleX}px`;
        hs.element.style.top = `${offsetY + hs.y * gridScaleY}px`;
        hs.element.style.width = `${420 * gridScaleX}px`;
        hs.element.style.height = `${720 * gridScaleY}px`;
    });
}

window.addEventListener("resize", positionLinks);
window.addEventListener("load", positionLinks);
