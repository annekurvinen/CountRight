<template>
  <h2>Ändra Lösenord</h2>
  <div class="password-container">
    <form class="form-container">
      <label :for="currentPassword">Nuvarande lösenord: </label>
      <BFormInput
        type="password"
        v-model="currentPassword"
        class="input-field"
        placeholder="Nuvarande lösenord"
      />

      <label :for="newPassword">Nytt lösenord: </label>
      <BFormInput
        type="password"
        v-model="newPassword"
        class="input-field"
        placeholder="Nytt lösenord (Minst 8 tecken)"
      />

      <label :for="confirmPassword">Bekräfta nytt lösenord: </label>
      <BFormInput
        type="password"
        v-model="confirmPassword"
        class="input-field"
        placeholder="Bekräfta nytt lösenord"
      />

      <BButton
        @click="showModal = !showModal"
        class="submit-button"
        variant="primary"
        :state="checkPassword() ? true : false"
        :disabled="!isDisabled"
        >Ändra lösenord</BButton
      >

<!-- RUTA MED EN BEKRÄFTELSE PÅ ATT LÖSENORDET HAR ÄNDRATS -->
      <BModal @ok="onOk" v-model="showModal" title="Bekräftelseruta"
        >Ditt lösenord har ändrats!</BModal
      >

<!-- TÖMMER INMATAD TEXT I SAMTLIGA TEXT FÄLT -->
      <BButton
        @on-click="resetPasswordFields"
        type="reset"
        class="submit-button"
        variant="primary"
        >Ångra inmatningar</BButton
      >

<!-- ÅTERGÅR TILL FÖREGÅENDE SIDA -->
      <BButton @click="back" class="submit-button" variant="primary"
        >Tillbaka</BButton
      >
    </form>
  </div>
</template>

<script setup>
  import { computed, ref } from 'vue'
  import { useRouter } from 'vue-router'

  const showModal = ref(false),
    currentPassword = ref(''),
    newPassword = ref(''),
    confirmPassword = ref(''),
    router = useRouter()


// KNAPP KLICKBAR FÖRST NÄR RÄTT INFORMATION SKRIVITS IN I SAMTLIGA FÄLT
  const isDisabled=computed(() => {
    return (
      currentPassword.value.length >= 8 &&
      newPassword.value.length >= 8 &&
      confirmPassword.value.length >= 8 &&
      newPassword.value === confirmPassword.value
    )
  })

// ANROPAR FUNKTIONEN FÖR ATT TÖMMA SAMTLIGA LÖSENORDSFÄLT
  function onOk() {
    console.log('Ok')
    resetPasswordFields()
  }

// TÖMMER SAMTLIGA LÖSENORDSFÄLT
  function resetPasswordFields() {
    currentPassword.value = '',
    newPassword.value = '',
    confirmPassword.value = ''
  }

// KONTROLLERAR ATT SAMTLIGA FÄLT ÄR KORREKT IFYLLA
  function checkPassword() {
    return (
      currentPassword.value.length >= 8 &&
      newPassword.value.length >= 8 &&
      confirmPassword.value.length >= 8 &&
      newPassword.value === confirmPassword.value
    )
  }

// FUNKTION FÖR ATT GÅ TILLBAKA TILL FÖREGÅENDE SIDA
  function back() {
    router.go(-1)
  }
</script>

<style scoped>
  .password-container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form-container {
    width: 90vw;
    /* Adjust depending on desired width */
    padding: 20px;
    /* Adjust depending on desired distance from edges */
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  h2 {
    padding: 20px;
  }

  .input-field {
    width: 100%;
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
    font-size: 16px;
  }

  .checkbox-container {
    margin-bottom: 10px;
  }

  .checkbox-container label {
    display: block;
    margin-bottom: 5px;
    font-size: 16px;
  }

  .submit-button {
    font-family: 'Lexend', sans-serif;
    color: var(--mörkbrun);
    margin: 1rem auto;
    width: 100%;
    padding: 10px;
    border-radius: 3px;
    font-size: 16px;
    cursor: pointer;
  }
</style>
