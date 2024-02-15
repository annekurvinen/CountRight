<template>
  <nav>
    <ul>
      <!--sätter en klass med v-bind och backgroundcolor på den länk man har tryckt på---->
      <li :class="{ backgorundColor: navBarClasses }">
        <RouterLink to="/">Klasser</RouterLink>
      </li>
      <li :class="{ backgorundColor: navBarTest }">
        <RouterLink to="/testT">Prov</RouterLink>
      </li>
      <li :class="{ backgorundColor: navBarSettings }">
        <RouterLink to="/settings">Inställningar</RouterLink>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  //kollar vilken sida man är på, om den ser att man är på en path som matchar någon av de vi har i computed så lägger man till en klass på länken. på så vis kan färgen på länken ändras beroende på vart vilken path man är på
  computed: {
    navBarClasses() {
      return this.$route.path === '/';
    },

    navBarTest() {
      return this.$route.path === '/testT';
    },

    navBarSettings() {
      return this.$route.path === '/settings';
    },
  },
};
</script>
<style scoped>
@import '../style.css';
/* style för mobil*/
a {
  text-decoration: none;
}
ul {
  display: flex;
  list-style-type: none;
}
li {
  background-color: #eac8a9;
  margin: auto;
  padding: 1rem;
  border-radius: 0.5rem;
}
.backgorundColor {
  background-color: #dca572;
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
</style>

<!-- källa för conputed-egenskapen
  https://stackoverflow.com/questions/71800155vue-3-how-to-change-body-background-color-only-in-specific-page -->
