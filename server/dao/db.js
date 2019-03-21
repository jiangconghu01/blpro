// 引入mongoose
const mongoose = require('mongoose')

// 将mongoose推出

module.exports = () => {
  // 连接数据库
  mongoose.connect(
    'mongodb://127.0.0.1:27017/article',
    { useCreateIndex: true, useNewUrlParser: true }
  )

  // 连接失败
  mongoose.connection.on('error', function(err) {
    console.error('数据库链接失败:' + err)
  })

  // 连接成功
  mongoose.connection.on('open', function() {
    console.log('数据库链接成功')
  })

  // 断开数据库
  mongoose.connection.on('disconnected', function() {
    console.log('数据库断开')
  })
}
