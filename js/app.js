document.addEventListener("mousemove",function (e) {
    var rocket = document.querySelector('.rocket');
    rocket.style.left = e.offsetX + 'px';
    rocket.style.top = e.offsetY + 'px';
})


function stars(){
    let count = 50;
    let scene = document.querySelector('.scene');
    let i =0;
    while (i<count) {
        let star = document.createElement('i');
        let x = Math.floor(Math.random()*window.innerWidth);

        let duration = Math.random()*1;
        let h = Math.random()*100;

        star.style.left = x +'px';
        star.style.width = 0.5 +'px';
        star.style.height = h +'px';
        star.style.animationDuration= duration + 's';
        
        scene.appendChild(star);
        i++
    }
}

stars();

function debris(){
    let count = 15;
    let scene = document.querySelector('.scene');
    let i =0;
    while (i<count) {
        let star = document.createElement('i');
        let x = Math.floor(Math.random()*window.innerWidth);

        let duration = Math.random()*2;
        let h = Math.random()*200;

        star.style.left = x +'px';
        star.style.width = 10 +'px';
        star.style.height = h/3 +'px';
        star.style.animationDuration= duration + 's';
        
        scene.appendChild(star);
        i++
    }
}

debris();
