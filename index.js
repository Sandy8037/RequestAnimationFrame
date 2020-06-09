function moveBoxForwardOnePixel() {
    const box = document.getElementsByClassName('box')[0];
    const left = +window.getComputedStyle(box).left.slice(0, -2);
    box.style.left = `${left + 1}px`;
   if (left + 1 > 900) {
       return 0;
   }
   else {
       return 1;
   }
}

function callback() {
    const state = moveBoxForwardOnePixel();
    if (state) {
        requestAnimationFrame(callback);
    }
}

callback();

function moveBoxForwardOnePixel2() {
    const box2 = document.getElementsByClassName('box2')[0];
    const left = +window.getComputedStyle(box2).left.slice(0, -2);
    box2.style.left = `${left + 1}px`;
   if (left + 1 > 900) {
       return 0;
   }
   else {
       return 1;
   }
}

function callback2() {
    const state = moveBoxForwardOnePixel2();
    if (state) {
        setTimeout(callback2);
    }
}

callback2();