<template>
  <div>
    <p>Counter</p>
    <div>
      <span data-testid="numberTest">{{ number }}</span>
      <button data-testid="btnPlus" @click="plusNumber">+</button>
      <button data-testid="btnMin" @click="minNumber">-</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
    }
  },
  methods: {
    plusNumber() {
      if (this.number >= 10) {
        this.number += 10
      } else {
        this.number += 1
      }
    },
    minNumber() {
      if (this.number >= 10) {
        this.number -= 10
      } else if (this.number > 0) {
        this.number -= 1
      }
    },
  },
}
</script>
