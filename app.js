function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.background = color;
            resolve();
        }, delay);   
    });
}

changeColor('teal', 1000);