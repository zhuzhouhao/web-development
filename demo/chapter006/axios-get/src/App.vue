<template>
  <div id="app">
    <table>
      <template v-for="item in qsList">
        <tr :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.title}}</td>
          <td>{{item.time}}</td>
          <td :class="item.state === 'inissue'? 'inissue':''">{{item.stateTitle}}</td>
        </tr>
      </template>
    </table>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      qsList: [],
    }
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      this.$axios({
        method: 'get',
        url: '../data.json'
      }).then(res =>{
        console.log(res.data);
        this.qsList = res.data.lists;
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
</style>
