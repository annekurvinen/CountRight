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
            <RouterLink to="/testT">Prov</RouterLink>
          </li>

          <div id="logout-change-password">
            <RouterLink to="/changePasswordView">
              <b-button
                size="sm"
                class="my-2 my-sm-0"
                type="primary"
                id="logout-button-teacher"
                >Ändra lösenord</b-button
              >
            </RouterLink>

            <b-button size="sm" class="my-2 my-sm-0" type="primary"
              ><log-out
            /></b-button>
          </div>
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

  #logout-button-teacher {
    padding: 0.5rem;
    margin-right: 0.5rem;
    margin-top: 2rem;
  }
  #logout-change-password {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
  }
  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    margin: 0;
    padding: 0;
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
  @media only screen and (min-width: 569px) {
    .my-2 {
      margin-top: 0.5rem !important;
      margin-bottom: 0.5rem !important;
    }
  }
  /* style för tablet */
  @media only screen and (min-width: 990px) {
    #logout-change-password {
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-end;
      margin: 0;
    }
    #logout-button-teacher {
      margin-left: 0.5rem;
    }

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
