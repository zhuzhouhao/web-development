<template>
  <div id="app">
    <table class="product">
      <tr>
        <th>编号</th>
        <th>商品图片</th>
        <th>商品名称</th>
        <!--
        <th>商品简介</th>
        -->
        <th>价格</th>
      </tr>
      <tr v-for="item in list" :key="item.id">
        <td>{{item.id}}</td>
        <td>
          <img class="goods-image" :src="item.productPic" style="width: 100px; height: 100px;" />
        </td>
        <td>{{item.productName}}</td>
        <!--
        <td>{{item.productInfo}}</td>
        -->
        <td>{{item.price}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      list: [],
    }
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      this.$axios({
        method: 'get',
        url: '/prod/list'
      }).then(res =>{
        this.list = res.data.data;
        console.log(this.list);
      }, res => {
        console.log("error:" + res);
      })    
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.product {
  border: 1px black solid;
  margin-left: auto;
  margin-right: auto;
  width: 900px;
  border-collapose: collapose;
}
</style>
