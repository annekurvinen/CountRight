<template>
  <h2> Ändra Lösenord </h2>
  <div class="password-container">
    <form class="form-container">
      <label :for="currentPassword">Current Password: </label>
      <BFormInput
        type="password"
        v-model="currentPassword"
        class="input-field"
        placeholder="Nuvarande lösenord"
      />

      <label :for="newPassword">New Password: </label>
      <BFormInput
        type="password"
        v-model="newPassword"
        class="input-field"
        placeholder="Nytt lösenord (Minst 8 tecken)"
      />

      <label :for="confirmPassword">Confirm Password: </label>
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
      >Ändra lösenord</BButton>

 <!--// POPUPRUTA VID BEKRÄFTELSE ATT LÖSENORDET ÄR ÄNDRAT -->
      <BModal
      @ok="onOk"
      v-model="showModal"
      title="Bekräftelseruta"
      >Ditt lösenord har ändrats!</BModal>

 <!-- // ÅNGRAKNAPP - RADERAR INNEHÅLLET I ALLA FÄLTEN
      FLYTTA KNAPPEN SÅ DEN ÄR BREDVID ÄNDRA LÖSENORDKNAPPEN???-->
      <BButton
      @onClick="resetPasswordFields"
      type="reset"
      class="submit-button"
      variant="primary"
      >Ångra inmatningar</BButton>


 <!-- // DEN HÄR SKALL RÄTTAS TILL FUNGERAR INTE SOM DET ÄR TÄNKT
   GÖRAS MINDRE ? ALLA KNAPPAR PÅ SAMMA RAD???? -->
     <RouterLink to="/LandingPageStudent.vue">
        <BButton
        @click="back"
        class="submit-button"
        variant="primary"
        >Tillbaka</BButton>
      </RouterLink>

    </form>
  </div>
</template>


<script setup>

  import { ref } from 'vue'

  const showModal = ref(false),
    currentPassword = ref (''),
    newPassword = ref (''),
    confirmPassword = ref ('')

// ANROPA FUNKTIONEN FÖR ATT TÖMMA LÖSENORDFÄLTEN
  function onOk() {
    console.log('Ok')
    resetPasswordFields()
  }
  function resetPasswordFields() {
    currentPassword.value = '',
    newPassword.value = '',
    confirmPassword.value = ''
  }
 // SKALL KONTROLLERA ATT NYTT LÖSENORD x 2 ÄR LIKA
  function checkPassword() {
    return (
      currentPassword.value.length >= 8 &&
      newPassword.value.length >= 8 &&
      confirmPassword.value.length >= 8 &&
      newPassword.value === confirmPassword.value
    )
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
    margin: 1rem;
    width: 100%;
    padding: 10px;
    border-radius: 3px;
    font-size: 16px;
    cursor: pointer;
  }
</style>
