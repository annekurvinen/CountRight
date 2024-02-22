<script>
export default {
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    onOk() {
      console.log('Ok')
    }
  }
}

</script>

<template>
  <BButton @click="showModal = !showModal" variant="primary">
    Logga ut
  </BButton>
  <BModal @ok="onOk" v-model="showModal" title="Godkänna">
    Är du säker att du vill logga ut?
  </BModal>
</template>