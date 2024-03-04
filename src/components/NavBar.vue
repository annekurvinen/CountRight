<template>
  <section>
    <b-navbar toggleable="lg" type="dark" variant="none">
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav>
        <ul>
          <!--sätter en klass med v-bind och backgroundcolor på den länk man har tryckt på---->
          <li :class="{ backgroundColor: navBarClasses }">
            <RouterLink to="/landingpageTeacher">Klasser</RouterLink>
          </li>
          <li :class="{ backgroundColor: navBarTest }">
            <RouterLink to="/testT">Skapa prov</RouterLink>
          </li>
          <RouterLink to="/changePasswordView">
            <li>Ändra lösenord</li>
          </RouterLink>
          <li id="logout-button"><log-out /></li>
        </ul>
      </b-collapse>
    </b-navbar>
  </section>
</template>

<script>
  import LogOut from './LogOut.vue'
  export default {
    components: {
      LogOut
    },
    //kollar vilken sida man är på, om den ser att man är på en path som matchar någon av de vi har i computed så lägger man till en klass på länken. på så vis kan färgen på länken ändras beroende på vart vilken path man är på
    computed: {
      navBarClasses() {
        return this.$route.path === '/landingpageTeacher'
      },

      navBarTest() {
        return this.$route.path === '/testT'
      }
    }
  }
</script>
<style scoped>
  /* style för mobil*/
  #logout-button {
    padding: 0.5rem;
  }
  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    margin: 0;
    padding: 0;
    max-width: fit-content;
  }

  li {
    background-color: #eac8a9;
    margin: 0.5rem;
    padding: 1rem;
    border-radius: 0.5rem;
  }

  .backgroundColor {
    background-color: #dca572;
  }

  /* style för tablet/desktop*/
  @media only screen and (min-width: 990px) {
    ul {
      flex-direction: row;
      margin-left: 10rem;
    }

    li {
      margin: 0rem 2rem;
    }
  }
</style>

<!-- källa för computed-egenskapen
  https://stackoverflow.com/questions/71800155vue-3-how-to-change-body-background-color-only-in-specific-page -->
