<template>
  <div class="child">
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
export default {
  name: 'child',
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increment() {
      this.counter++;
      this.$emit("increment", this.counter);
    },
    decrement() {
      this.counter--;
      this.$emit("decrement", this.counter);
    }
  }
}
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
