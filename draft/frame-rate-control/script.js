console.log(window.innerWidth);
console.log(window.innerHeight);

/*
控制动画的帧率
通过设置交错帧控制动画的速度 比如每五次调用更新一下坐标
*/

// 使用dom拿到canvas
const canvas = document.getElementById("canvas");
// 获取canvas的上下文
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;


const playImage = new Image();
playImage.src = "shadow_dog.png";

// 图片为6870x5230像素 通过十行12列来计算某一个图像
const spriteWidth = 575
const spriteHeight = 523

// 二维数组中的坐标
let framex = 0;
let framey = 0;

let gameFrame = 0; // 游戏帧

// 游戏帧率太快了，我们可以通过一个变量来控制帧率 (比如每五帧切换一次图片)，这样就可以让动画看起来更流畅了。
let staggerFrames = 5;  // 每五帧切换一次图片


function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    ctx.drawImage(playImage, framex, framey, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);


    let postion = Math.floor(gameFrame / staggerFrames) % 7;
    framex = spriteWidth * postion;
    // 动画速度太快了 通过staggerFrames来控制动画的速度
    // if (gameFrame % staggerFrames === 0) {
    //     // 通过更改framex和framey切换二维数组中的图像
    //     if (framex < 6) framex++;
    //     else framex = 0;     // 重置实现循环效果
    // }

    gameFrame++;
    requestAnimationFrame(animate);
}

animate();