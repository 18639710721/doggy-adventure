console.log(window.innerWidth);
console.log(window.innerHeight);


// dom操作 获得canvas元素
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
// 默认是300*150
console.log(canvas.width);
console.log(canvas.height);

// 这里面的参数都是根据canvas自带的宽高定义的 即像素值
const CAVANS_WIDTH = canvas.width = 600;
const CAVANS_HEIGHT = canvas.height = 600;

// 通过修改x和y方向的变量来实现移动效果
let x = 0;
let y = 0;

function animate() {
    ctx.clearRect(0, 0, CAVANS_WIDTH, CAVANS_HEIGHT);

    ctx.fillStyle = "red";
    ctx.fillRect(x, 0, 10, 10);

    ctx.fillStyle = "blue";
    ctx.fillRect(0, y, 10, 10);

    // 两个方向分量的叠加 相当于合成新的向量 即斜向右下移动
    ctx.fillStyle = "green";
    ctx.fillRect(x, y, 10, 10);

    // 通过beginPath来开始一个新的路径 之前的路径就会被清除掉
    ctx.beginPath();
    ctx.arc(20 +x, 20 + y, 10, 0, 2 * Math.PI);
    ctx.strokeStyle = "red";
    
    ctx.fillStyle = "red";
    ctx.fill(); 
    ctx.stroke();

    // 如果不用clearRect来清除之前的绘制内容 就会在画布上留下之前的痕迹 形成拖尾效果
    if (x < CAVANS_WIDTH) x++;
      // 这里的x % 600 是为了让小方块在画布上循环移动，如果没有这个操作，x会一直增加，最终超出画布范围，无法看到小方块了。通过取模运算，当x达到600时，会重新从0开始，这样小方块就会在画布上不断循环移动。
    // 600是像素单位，表示画布的宽度。通过取模运算，x % 600 的结果会在0到599之间循环，这样小方块就会在画布上不断循环移动。
    else x = x % CAVANS_WIDTH;  

    if (y < CAVANS_HEIGHT) y++;
    else y = y % CAVANS_HEIGHT;

    // 通过requestAnimationFrame实现动画效果
    // requestAnimationFrame会在浏览器下一次重绘之前调用指定的函数来更新动画
    // 通过递归调用animate函数来实现连续的动画效果
    requestAnimationFrame(animate);    
}

animate();