let imgIdx = 1;
const btn = document.querySelectorAll('.img');

const img_paths = [
    "url('./assets/images/hero-image.jpg')",
    "url('./assets/images/portfolio-blurred.png')",
    "url('./assets/images/calculator-blurred.png')",
    "url('./assets/images/coding.png')"
];

let time = setInterval(function() {
    document.body.style.backgroundImage = img_paths[imgIdx];
    if (imgIdx == img_paths.length) {
        imgIdx = 0;
    } else {
        imgIdx++;
    }
}, 5000);

for (let i=0; i < btn.length; i++) {
    btn[i].addEventListener('click', function() {
        document.body.style.backgroundImage = img_paths[i];
    });
    imgIdx = i + 1;
    if (imgIdx == img_paths.length) {
        imgIdx = 0;
    }
}