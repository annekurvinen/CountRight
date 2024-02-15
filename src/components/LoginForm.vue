 <template>
    <div class="login-container">
      <div class="form-container">
        <input type="text" v-model="skola" class="input-field" placeholder="Skola">
         {{ skola }}
        <input type="text" v-model="mail" class="input-field" placeholder="Email">
        <input type="password" v-model="lös" class="input-field" placeholder="Password">
 
        <div class="checkbox-container">
          <label for="Elev">
            <input type="checkbox" name="Elev" id="elevCheckbox">
            Är Elev
          </label>
          <label for="Lärare">
            <input type="checkbox" name="Lärare" id="larareCheckbox">
            Är lärare
          </label>
        </div>
 
        <input type="button" class="submit-button" value="Logga in">
      </div>
    </div>  
  <main></main>
  </template>
 
<script>

export default {
    data() {
        return {skola:"", mail:"", lös:""}


    }
}
</script>
