const images = [
    "flowers-2300523.jpg",
    "plants-4572694.jpg",
    "still-life-3126536.jpg",
    "flowers-3655451.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.className = "background";
bgImage.src = `img/${chosenImage}`;

 const bgCover = document.createElement("div");

bgCover.className = "background-cover";

document.body.appendChild(bgCover);
document.body.appendChild(bgImage);
/* //img태그를 생성시켜서 변수로
const bgImage = `url('img/${chosenImage}')`;

document.body.style.backgroundImage = bgImage;
//appendChild는 body에 html을 추가하는 것이다. */
