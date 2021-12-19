<template>
  <div class="home">
    <greeting></greeting>
    <random-generator></random-generator>
  </div>
</template>

<script>
import Greeting from '../components/Greeting.vue'
import RandomGenerator from '../components/RandomGenerator.vue'
// @ is an alias to /src

export default {
  components: { Greeting, RandomGenerator },
  name: 'Home',
}
</script>
