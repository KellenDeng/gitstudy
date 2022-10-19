//  静态导入
// import * as m1 from "./hello.js";
//获取元素
const btn = document.getElementById('btn');
//  动态导入
//import函数 返回结果是一个promise对象  所以可以用then

btn.onclick = function () {
    import('./hello.js').then(module => {
        module.hello();
    });
}