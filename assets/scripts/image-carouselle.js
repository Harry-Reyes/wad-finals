let selectedImg = '1';
const btn1 = document.querySelector('#img1');
const btn2 = document.querySelector('#img2');
const btn3 = document.querySelector('#img3');
const btn4 = document.querySelector('#img4');

function selected(imgNum) {
    if (imgNum == selectedImg) {
        return true;
    } else {
        return false;
    }
}

btn1.addEventListener('click', function() {
    if (!selected('1')) {
        selectedImg = '1';
        document.body.style.backgroundImage = "url('../assets/images/hero-image.jpg')";
    }
});
btn2.addEventListener('click', function() {
    if (!selected('2')) {
        selectedImg = '2';
        document.body.style.backgroundImage = "url('../assets/images/portfolio-blurred.png')";
    }
});
btn3.addEventListener('click', function() {
    if (!selected('3')) {
        selectedImg = '3';
        document.body.style.backgroundImage = "url('../assets/images/calculator-blurred.png')";
    }
});
btn4.addEventListener('click', function() {
    if (!selected('4')) {
        selectedImg = '4';
        document.body.style.backgroundImage = "url('../assets/images/coding.png')";
    }
});