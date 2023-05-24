<template>
  <a :href="url">
    <slot>默认内容</slot>
  </a>
</template>

<script>
export default {
  name: 'Nav',
  props: ["url"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
