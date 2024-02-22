<template>
  <div id="navBar">
    <b-navbar toggleable="lg" type="dark" variant="none">
      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <ul>
          <!--sätter en klass med v-bind och backgroundcolor på den länk man har tryckt på---->
          <li :class="{ backgorundColor: navBarClasses }">
            <RouterLink to="/landingpageTeacher">Klasser</RouterLink>
          </li>
          <li :class="{ backgorundColor: navBarTest }">
            <RouterLink to="/testT">Prov</RouterLink>
          </li>
          <li :class="{ backgorundColor: navBarSettings }">
            <RouterLink to="/settings">Inställningar</RouterLink>
          </li>
          <RouterLink to="/changePasswordView">
            <b-button variant="primary">Ändra lösenord</b-button>
          </RouterLink>
          <b-button variant="primary"><log-out /></b-button>
        </ul>
      </b-collapse>
    </b-navbar>
  </div>
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
      },

      navBarSettings() {
        return this.$route.path === '/settings'
      }
    }
  }
</script>
<style scoped>
  /* style för mobil*/
  a {
    text-decoration: none;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;
  }

  li {
    background-color: #eac8a9;
    margin: 0.5rem;
    padding: 1rem;
    border-radius: 0.5rem;
  }

  .backgorundColor {
    background-color: #dca572;
  }

  /* style för tablet */
  @media only screen and (min-width: 990px) {
    ul {
      flex-direction: row;
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
