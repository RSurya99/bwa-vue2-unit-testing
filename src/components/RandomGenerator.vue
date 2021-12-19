<template>
  <div>
    <center>
      <p>Generate Random Number</p>
      <button @click="onClickHandler" data-testid="btn">Click Me!</button>
      <p v-if="randomNumber" data-testid="randomNumberTest">
        {{ randomNumber }}
      </p>
      <p v-if="randomNumber > 90" data-testid="messageTest">
        You got special number!
      </p>
    </center>
  </div>
</template>

<script>
export default {
  data() {
    return {
      randomNumber: 0,
    }
  },
  methods: {
    onClickHandler() {
      this.randomNumber = Math.floor(Math.random() * 100)
    },
  },
}
</script>
