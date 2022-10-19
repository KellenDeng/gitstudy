//用做自己的练习而创建的服务器
const express = require('express');
const app = express();
//使用中间件解析urlencoded编码形式的请求体参数
app.use(express.urlencoded({ extended: true }))
//使用中间件解析json编码形式的请求体参数
app.use(express.json())
//暴露静态资源
// 在这里，调用 express.static() 方法，快速的对外提供静态资源  
app.use(express.static(__dirname + '/src'));

//响应GET请求--可以接收query参数
app.get('/test_get', function (req, res,) {
    console.log('有人请求了get--携带的query参数是：', req.query)
    res.send('hello world');
})

//响应GET请求--可以接收params参数
app.get('/test_get2/:name/:age', (request, response) => {
    console.log('有人请求test_get2了--携带的params参数是：', request.params);
    response.send('hello_test_get2')
})

//响应POST请求--可以接收请求体参数
app.post('/test_post', (request, response) => {
    console.log('有人请求test_post了--携带的请求体参数是', request.body);
    response.send('hello_test_post')
})

//响应get请求  解析json 数据
app.get('/get_person', (request, response) => {
    console.log('有人请求get_person了');
    const person = { name: 'tom', age: 18, sex: '女' }
    response.send(JSON.stringify(person))
})

//响应get请求 超过一定时间 就不要数据了
app.get('/get_person_delay', (request, response) => {
    console.log('有人请求get_person了');
    const person = { name: 'tom', age: 18, sex: '女' }
    setTimeout(() => {
        response.send(JSON.stringify(person))
    }, 3000)
})
app.listen(8080, (err) => {
    if (!err) {
        console.log('express server running at http://127.0.0.1:8080/test_get')
        console.log('http://127.0.0.1:8080/1_ajax小试牛刀.html');
        console.log('http://127.0.0.1:8080/2_xhr的5种状态.html');
        console.log('http://127.0.0.1:8080/3_ajax_get请求.html');
        console.log('http://127.0.0.1:8080/4_ajax_post请求.html');
        console.log('http://127.0.0.1:8080/5_ajax_解析json数据.html');
        console.log('http://127.0.0.1:8080/6_ajax_处理IE浏览器get请求缓存问题.html');
        console.log('http://127.0.0.1:8080/7_ajax请求的异常与超时处理.html');
        console.log('http://127.0.0.1:8080/8_ajax取消请求.html');
        console.log('http://127.0.0.1:8080/9_避免多次重复请求.html');
        console.log('http://127.0.0.1:8080/10_jquery封装的ajax.html');
        console.log('http://127.0.0.1:8080/11_演示回调地狱.html');

    }
})
