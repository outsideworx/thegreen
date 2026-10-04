function positionLinks() {
    const img = document.getElementById("main-image");

    // Coordinates are authored in a 1920x1080 grid. The displayed image box is
    // derived from the image's actual natural dimensions (object-fit: contain),
    // so positioning stays correct for any image aspect ratio.
    const refWidth = 1920;
    const refHeight = 1080;
    const navigation = [
        {element: document.getElementById("gel"), x: 350, y: 420, width: 300},
        {element: document.getElementById("tape"), x: 651, y: 420, width: 300},
        {element: document.getElementById("snus"), x: 952, y: 420, width: 300},
        {element: document.getElementById("patch"), x: 1253, y: 420, width: 300}
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

    // Map the 1920x1080 authoring grid onto the real displayed image box.
    const gridScaleX = displayedWidth / refWidth;
    const gridScaleY = displayedHeight / refHeight;

    navigation.forEach(hs => {
        hs.element.style.left = `${offsetX + hs.x * gridScaleX}px`;
        hs.element.style.top = `${offsetY + hs.y * gridScaleY}px`;
        hs.element.style.width = `${hs.width * gridScaleX}px`;
        hs.element.style.height = `${420 * gridScaleY}px`;
    });
}

window.addEventListener("resize", positionLinks);
window.addEventListener("load", positionLinks);
