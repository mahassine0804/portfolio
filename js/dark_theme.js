const icon = document.getElementById('icon')

let logo = document.getElementById('logo');

let darkImageURL = "img/logo/1.png";
let lightImageURL = "img/logo/2.png";



icon.addEventListener('click', () => {
    document.body.classList.toggle('dark')

    if (document.body.classList.contains('dark')) {
        icon.src = "img/logo/sun.png";

    } else {
        icon.src = "img/logo/moon.png";
    }



})


