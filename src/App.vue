<template>
  <header-logo></header-logo>
  <main>
    <RouterView />
  </main>
</template>

<script>
<<<<<<< HEAD
import HeaderLogo from './components/HeaderLogo.vue';
import LoginForm from './components/LoginForm.vue';
export default {
  components: {
    HeaderLogo,
    LoginForm,
=======
import HeaderLogo from "../components/HeaderLogo.vue";
export default {
  components: {
    HeaderLogo,
>>>>>>> 8064254a8c98c2ae1f9fc3686490a8d560719844
  },
};
</script>

<<<<<<< HEAD
=======
<<<<<<< HEAD
<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-container {
  width: 100vw; /* Anpassa beroende på önskad bredd */
  padding: 100px; /* Justera beroende på önskat avstånd från sidokanter */
  border: 2px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.input-field {
  width: 100%;
  margin-bottom: 20px;
  padding: 20px;
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
  width: 100%;
  padding: 10px;
  background-color: rgb(232, 137, 13);
  border: none;
  border-radius: 3px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #b38900;
}
</style>
=======
<style scoped></style>
>>>>>>> 8064254a8c98c2ae1f9fc3686490a8d560719844
>>>>>>> 46b01701702b2b51393ef059c9d40715f86a405d
