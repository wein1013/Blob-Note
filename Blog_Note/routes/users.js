/*
 * @Author: GEOWAY\zhaoweiwen 2565088230@qq.com
 * @Date: 2022-08-15 18:11:05
 * @LastEditors: GEOWAY\zhaoweiwen 2565088230@qq.com
 * @LastEditTime: 2022-08-16 17:07:11
 * @FilePath: \Blog_Note\routes\users.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let msg = {
    "content":"我的测试链接"
  }
  res.json(msg);
});

module.exports = router;
