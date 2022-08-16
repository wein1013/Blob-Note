/*
 * @Author: GEOWAY\zhaoweiwen 2565088230@qq.com
 * @Date: 2022-08-16 16:56:08
 * @LastEditors: GEOWAY\zhaoweiwen 2565088230@qq.com
 * @LastEditTime: 2022-08-16 17:42:07
 * @FilePath: \blobfore\src\apis\api.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import requests from "@/utils/request";
// 定义发送求的函数
export function _getUser() {
    return requests({
        url: "/users",
        method: "get",
    })
}