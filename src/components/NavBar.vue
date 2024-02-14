<template>
  <nav>
    <ul>
      <li :class="{ backgorundColor: navBarClasses }">
        <RouterLink to="/">Klasser</RouterLink>
      </li>
      <!--sätter en klass med v-bind och backgroundcolor på varje länk-->
      <li :class="{ backgorundColor: navBarTest }">
        <RouterLink to="/test">Prov</RouterLink>
      </li>
      <li :class="{ backgorundColor: navBarSettings }">
        <RouterLink to="/settings">Inställningar</RouterLink>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  //beräknande egenskap som kollar vilken sida man ör på om man är på respektive sida så sätts den bakgrundsfärg som klassen backgroundcolor har till respektive länk
  computed: {
    navBarClasses() {
      if (this.$route.path === "/") {
        return true;
      }
      return false;
    },
    navBarTest() {
      if (this.$route.path === "/test") {
        return true;
      }
      return false;
    },
    navBarSettings() {
      if (this.$route.path === "/settings") {
        return true;
      }
      return false;
    },
  },
};
</script>
<style scoped>
/* style för mobil*/
a {
  font-family: "Lexend", sans-serif;
  color: black;
  text-decoration: none;
}
ul {
  display: flex;
  list-style-type: none;
}
li {
  background-color: #f4e2d1;
  margin: auto;
  padding: 1rem;
  border-radius: 0.5rem;
}
.backgorundColor {
  background-color: #eac8a9;
}
/* style för tablet */
@media only screen and (min-width: 600px) {
  ul {
    margin-left: 15rem;
  }
  li {
    margin: 0rem 2rem;
    padding: 1rem;
  }
}
/*style för desktop  */
/* @media only screen and (min-width: 980px) {
  li {
    margin-left: 15rem;
    padding: 1rem;
  }
} */
</style>
