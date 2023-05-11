let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

const obj = {
    x: 50,
    y: 100,
    width: 50,
    height: 50,

    draw() {
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    obj.draw();

    requestAnimationFrame(loop);
}

loop();