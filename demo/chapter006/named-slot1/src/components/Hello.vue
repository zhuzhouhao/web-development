<template>
  <div class="hello">
    <h1><slot></slot></h1>
    <h3><slot></slot></h3>
  </div>
</template>

<script>
export default {
  name: 'Hello',
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
