<template>
  <header>
    <div class="logo">
      <img src="../assets/Logo.jpg" alt="logo" />
      <h1>Räkna Lätt</h1>
    </div>
  </header>
</template>

<script></script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 52px;
  margin-left: 59px;
}

h1 {
  font-family: 'Expletus Sans', sans-serif;
}

img {
  border-radius: 100%;
  height: 131px;
  width: 131px;
}

header {
  background: linear-gradient(
    180deg,
    rgba(220, 165, 114, 1) 0%,
    rgba(220, 165, 114, 0.41) 72%,
    rgba(220, 165, 114, 0) 100%
  );
  padding-top: 41px;
}

/*style för tablett och desktop  */
@media only screen and (min-width: 600px) {
  /* h1 { */
  /* margin-top: 7rem;
    font-size: 3rem; */
  /* } */
}
/* @media only screen and (min-width: 600px) {
  h1 {
    margin-top: 2rem;
  }
} Nödvändigt attt ha detta? */
</style>
