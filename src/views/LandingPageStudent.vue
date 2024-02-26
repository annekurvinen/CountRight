<template>
  <!-- <change-passwordview></change-passwordview> -->
  <h1 id="student-name">Hej Alice</h1>
  <section id="student-button">
    <RouterLink to="/testStudent"
      ><b-button variant="primary" class="student-landing-button"
        >Starta prov</b-button
      >
    </RouterLink>
    <!-- <b-button variant="primary" class="studentLandingButton"
      >Se tidigare prov</b-button
    > -->
    <RouterLink to="/changePasswordView">
      <b-button variant="primary" class="student-landing-button"
        >Ändra lösenord</b-button
      >
    </RouterLink>
  </section>
</template>

<script></script>
<style scoped>
  .student-landing-button {
    margin: 4rem;
    font-family: 'Lexend', sans-serif;
    color: var(--mörkbrun);
  }

  #student-name {
    margin-top: 5rem;
  }

  h1 {
    display: flex;
    justify-content: center;
  }

  #student-button {
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
    #student-button {
      flex-direction: row;
      justify-content: center;
    }
  }
</style>
