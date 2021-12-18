<template>
  <div>
    <p>Input your name</p>
    <input type="text" v-model="name" />
    <button @click="open = !open">click</button>
    <p v-if="open" data-testid="greet">Welcome, {{ name }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      name: '',
    }
  },
}
</script>
