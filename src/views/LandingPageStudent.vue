<template>
  <h1>Hej Alice</h1>
  <main id="studentButton">
    <b-button variant="warning">Starta prov</b-button>
    <b-button variant="warning">Se tidigare prov</b-button>
    <b-button variant="warning">Ändra lösenord </b-button>
  </main>
</template>

<script></script>
<style>
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
</style>
