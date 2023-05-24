<template>
  <div id="app">
    <Hello>
      <template v-slot:name>
      张三
      </template>
      <template v-slot:info>
      是一个超人
      </template>
    </Hello>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'

export default {
  name: 'App',
  components: {
    Hello
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
