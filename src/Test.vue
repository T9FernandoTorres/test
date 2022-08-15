<template>
  <div class="test">{{ message }}</div>
</template>

<script>
export default {
  name:'TestComponent'
  setup() {
    const message = 'torres'
    return{
      message
    }
  },
}
</script>

<style lang="scss" scoped>
.test {
  color: aquamarine;
}
</style>
