<script>
  export default {
    data() {
      return {
        showModal: false
      }
    },
    methods: {
      onOk() {
        this.$router.push('/')
      }
    }
  }
</script>

<template>
  <BButton @click="showModal = !showModal" variant="primary">
    Logga ut
  </BButton>
  <BModal @ok="onOk" v-model="showModal" title="Logga ut">
    Är du säker att du vill logga ut?
  </BModal>
</template>
