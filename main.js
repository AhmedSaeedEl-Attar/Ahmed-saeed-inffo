window.addEventListener('load' , function () {
    const ele = document.querySelector('.container');
    const imageEle = document.querySelector('.container-image');
    
    ele.classList.add('container--isActive');
    imageEle.addEventListener('mousemove' , function (event) {
        const xPosition = event.layerX;
        const yPosition = event.layerY;

        imageEle.style.transform = `rotateY(${xPosition/50}deg) rotateX(${-yPosition/50}deg) `;

    });
});