<template>
  <div id="app">
 <template>
    <el-table
      :data="list"
      class="product"
      style="width: 900px;">
      <el-table-column
        prop="id"
        label="编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="productPic"
        label="商品图片"
        width="180">
        <template slot-scope="scope">
          <img style="width:100px; height:100px" :src="scope.row.productPic">
        </template>
      </el-table-column>
      <el-table-column
        prop="productName"
        label="商品名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="price"
        label="商品价格">
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template>
          <el-button type="primary" size="mini">加入购物车</el-button>
        </template>
      </el-table-column>
    </el-table>
  </template>
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
  border: 1px lightgray solid;
  margin-left: auto;
  margin-right: auto;
  width: 900px;
  border-collapose: collapose;
}
</style>
