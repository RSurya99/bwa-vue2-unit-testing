<template>
  <div>
    <p>Input your email</p>
    <input type="text" v-model="email" data-testid="emailTest" />
    <button @click="onClickHandler" data-testid="btn">click</button>
    <p style="color: red" v-if="isWrongEmail" data-testid="messageTest">
      format email tidak sesuai
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      isWrongEmail: false,
    }
  },
  methods: {
    onClickHandler() {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      const isEmailValid = re.test(String(this.email).toLowerCase())
      this.isWrongEmail = !isEmailValid
    },
  },
}
</script>
