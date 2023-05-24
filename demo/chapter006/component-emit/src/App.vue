<template>
  <div id="app">
    <child @increment="changeTotal" @decrement="changeTotal"></child>
    <h2>点击次数：{{total}}</h2>
  </div>
</template>

<script>
import child from './components/child.vue'

export default {
  name: 'App',
  data() {
    return {
      total: 0
    }
  },
  components: {
    child
  },
  methods: {
    changeTotal(counter) {
      this.total = counter;
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
