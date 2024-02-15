<template>
  <h1 id="studentName">Hej Alice</h1>
  <main id="studentButton">
    <RouterLink to="/testStudent"
      ><b-button variant="none" class="studentLandingButton"
        >Starta prov</b-button
      ></RouterLink
    >
    <b-button variant="none" class="studentLandingButton"
      >Se tidigare prov</b-button
    >
    <b-button variant="none" class="studentLandingButton"
      >Ändra lösenord
    </b-button>
  </main>
</template>

<script></script>
<style scoped>
.studentLandingButton {
  margin: 4rem;
  background-color: var(--orange);
}
#studentName {
  margin-top: 5rem;
}
h1 {
  display: flex;
  justify-content: center;
}
#studentButton {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
b-button {
  margin: 10rem;
}
/*gör mediaquery till 750 för knapparnsas skull, texten blir på två rader på skärm mindre än 750px*/
@media only screen and (min-width: 750px) {
  #studentButton {
    flex-direction: row;
    justify-content: center;
  }
}
</style>
