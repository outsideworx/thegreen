function positionLinks() {
    const img = document.getElementById("main-image");

    const refWidth = 2852;
    const refHeight = 2000;
    const navigation = [
        {element: document.getElementById("home"), x: 2150, y: 1350},
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
        hs.element.style.width = `${260 * gridScaleX}px`;
        hs.element.style.height = `${260 * gridScaleY}px`;
    });
}

window.addEventListener("resize", positionLinks);
window.addEventListener("load", positionLinks);
