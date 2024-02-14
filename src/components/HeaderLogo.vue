<template>
  <header>
    <img src="../assets/Logo.jpg" alt="logo" />
    <h1>Räkna Lätt</h1>
  </header>
</template>

<script></script>
<style>
/* @import url('https://fonts.googleapis.com/css2?family=Expletus+Sans:ital,wght@0,400..700;1,400..700&family=Istok+Web:ital,wght@0,400;0,700;1,400;1,700&display=swap') */

* {
  margin: 0;
  padding: 0;
}
header {
  display: flex;
}
h1 {
  margin-top: 2rem;
  font-family: "Expletus Sans", sans-serif;
}

img {
  border-radius: 100%;
  height: auto;
  width: 7rem;
  margin: 0.2rem;
}
header {
  background: linear-gradient(
    180deg,
    rgba(220, 165, 114, 1) 0%,
    rgba(220, 165, 114, 0.41) 72%,
    rgba(220, 165, 114, 0) 100%
  );
}

/*style för tablett och desktop  */
@media only screen and (min-width: 600px) {
  img {
    border-radius: 100%;
    height: auto;
    width: 15rem;
    margin: 1rem;
  }
  h1 {
    margin-top: 7rem;
    font-size: 3rem;
  }
}
/* @media only screen and (min-width: 600px) {
  h1 {
    margin-top: 2rem;
  }
} Nödvändigt attt ha detta? */
</style>
