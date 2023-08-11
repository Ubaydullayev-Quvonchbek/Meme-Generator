const memeData = [
    "./img/img.jpeg",
    "./img/img.jpg",
    "./img/img1.jpg",
    "./img/img2.jpg",
    "./img/img3.jpg",
    "./img/img4.jpg",
    "./img/img5.png",
    "./img/img6.jpg",
    "./img/img7.png",
    "./img/img8.jpeg",
    "./img/img9.jfif",
    "./img/img11.jpg",
    "./img/img12.webp",
    "./img/img13.jpg",
    "./img/img14.jfif",
    "./img/img14.jpg",
    "./img/jirk.jpg",
    "./img/kzak.jpg",
    "./img/m.jfif",
    "./img/mfa.jfif",
    "./img/mrain.webp",
    "./img/mrbean.jpeg",
    "./img/rdj.jpg",
    "./img/rick.webp",
    "./img/sigma.jpg",
    "./img/sim.jpg",
]
function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}
let img = document.querySelector("img")
img.src = getRandomItem(memeData);
function btnClick() {
    img.src = getRandomItem(memeData);
}