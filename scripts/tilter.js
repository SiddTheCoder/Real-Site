
const card = document.getElementById("card");
const gloss = document.getElementById("gloss");

card.addEventListener("mousemove", (e) => {
const pointerX = e.clientX; // x-coordinate of mouse cursor relative to the left edge of the browser;
const pointerY = e.clientY; // y-coordinate of mouse cursor relative to the top edge of the browser;

const cardRect = card.getBoundingClientRect(); // it returns a DOMRect object representing the size of an element and its position relative to the viewport;

const halfWidth = cardRect.width / 2;
const halfHeight = cardRect.height / 2;

const cardCenterX = cardRect.left + halfWidth; // x-coordinate of the card center relative to the left edge;
const cardCenterY = cardRect.top + halfHeight; // y-coordinate of the card center relative to the left edge;

const deltaX = pointerX - cardCenterX; // x value relative to the card center;
const deltaY = pointerY - cardCenterY; // y value relative to the card center;

const distanceToCenter = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2)); // from the point to the center of the card;

const maxDistance = Math.max(halfWidth, halfHeight); // the maximum distance from the corner to the center of the card;

const degree = (distanceToCenter * 10) / maxDistance;
const rx = deltaY / halfHeight;
const ry = deltaX / halfWidth;

card.style.transform = `perspective(400px) rotate3d(${-rx}, ${ry}, 0, ${degree}deg)`;

gloss.style.transform = `translate(${-ry * 100}%, ${-rx * 100}%) scale(3)`;
gloss.style.opacity = (distanceToCenter * 0.6) / maxDistance;
});

card.addEventListener("mouseleave", () => {
card.style = null;
gloss.style.opacity = 0;
});
