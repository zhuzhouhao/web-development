<template>
  <div id="app">
    <Nav url="/login"><h1>登录</h1></Nav>
    <Nav url="/register"><h1 class="highlight">注册</h1></Nav>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
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
.highlight {
  color: red;
}
</style>
