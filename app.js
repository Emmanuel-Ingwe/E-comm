// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.background = color;
//             resolve();
//         }, delay);   
//     });
// }

// changeColor('teal', 1000);

const menuItems = document.querySelector('.menu-items');

menuItems.style.maxHeight = '0px';

function menutoggle() {
    if (menuItems.style.maxHeight === "0px") {
        menuItems.style.maxHeight = "200px";
    } else {
        menuItems.style.maxHeight = '0px';
    }
}