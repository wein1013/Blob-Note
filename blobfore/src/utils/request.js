/*
 * @Author: GEOWAY\zhaoweiwen 2565088230@qq.com
 * @Date: 2022-08-16 16:33:24
 * @LastEditors: GEOWAY\zhaoweiwen 2565088230@qq.com
 * @LastEditTime: 2022-08-16 17:47:16
 * @FilePath: \blobfore\src\utils\http.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//对axios进行二次封装,将刚才下载好的axios导入进来
import axios from "axios";

//1.利用axios对象的方法create,去创建一个axios实例
//2.requests就是axios,只不过稍微配置一下
const requests = axios.create({
    //配置对象
    //基础路径，发请求的时候，路径当中会出现api，不用你手写
    baseURL: '/blobnote',
    //请求时间超过5秒
    timeout: 5000
});
//请求拦截器:在发请求之前，请求拦截器可以检测到,可以在请求发出去之前做一些事情
requests.interceptors.request.use((config) => {
    //config是个配置对象，对象里面有一个属性很重要，headers请求头
    if (config.contentType) {
        config.headers = {
            "Content-Type": config.contentType,
        };
    } else {
        config.headers = {
            "Content-Type": "application/json;charset=utf-8",
        };
    }
    return config;
});

//响应拦截器：包含两个函数（一个是成功返回的函数，一个是失败的返回的函数）
requests.interceptors.response.use(
    response => {
        const res = response;
        // token失效处理及用户登录未授权处理（状态码需与后台人员保持一致）
        if (/^(401|-1003|-1009)$/.test(res.data.resCode)) {

        }
        if (res.status == 200) {
            if (
                res.data.resCode != 1 &&
                res.data.resCode != 10008 &&
                res.data.msg &&
                res.data.msg != ""
            ) {
                // 错误统一提示语
                instanceVue.$toast.center(res.data.msg);
            }
            return res.data;
        }
    },
    error => {
      
    });
//对外暴露requests(axios的二次封装)
export default requests;

