// 1. 导入需要的包
// 注意：导入的名称，就是装包时候的名称
const moment = require('moment')
//'YYYY-MM-DD HH:mm:ss'  时间日期的固定写法
const dt = moment().format('YYYY-MM-DD HH:mm:ss')
console.log(dt)
