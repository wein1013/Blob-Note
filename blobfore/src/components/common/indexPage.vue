<!--
 * @Author: GEOWAY\zhaoweiwen 2565088230@qq.com
 * @Date: 2022-08-16 14:17:20
 * @LastEditors: GEOWAY\zhaoweiwen 2565088230@qq.com
 * @LastEditTime: 2022-08-16 17:49:32
 * @FilePath: \Blob-Note\blobfore\src\components\HelloWorld.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { _getUser } from "@/apis/API";
export default {
  data() {
    return {
      name: "HelloWorld",
      msg:"",
    };
  },
  mounted() {
    this._initMethod();
  },
  methods: {
    _initMethod() {
      _getUser().then((res) => {
        console.log(res);
        this.msg = res.content;
      });
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
