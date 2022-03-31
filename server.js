// 引入express
const express = require('express');
// 创建服务对象
const app = express()
// 准备数据
var data = '123'
// 监听路由
app.get('/', (req, res) => {
  res.end(data);
})
// 开启服务
app.listen(3000)
