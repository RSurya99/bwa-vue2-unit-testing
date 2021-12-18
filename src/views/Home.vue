<template>
  <div class="home">
    <greeting></greeting>
  </div>
</template>

<script>
import Greeting from '../components/Greeting.vue'
// @ is an alias to /src

export default {
  components: { Greeting },
  name: 'Home',
}
</script>
