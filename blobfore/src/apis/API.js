/*
 * @Author: GEOWAY\zhaoweiwen 2565088230@qq.com
 * @Date: 2022-08-16 16:56:08
 * @LastEditors: GEOWAY\zhaoweiwen 2565088230@qq.com
 * @LastEditTime: 2022-08-17 10:28:53
 * @FilePath: \blobfore\src\apis\api.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import requests from "@/utils/request";
import API from "@/apis/apiUrl"
// 定义发送求的函数
export function _getUser() {
    return requests({
        url:    API.blobnote.welcome,
        method: "get",
    })
}