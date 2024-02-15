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
<style scoped>
.login-container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form-container {
    width: 90vw; /* Anpassa beroende på önskad bredd */
    padding: 20px; /* Justera beroende på önskat avstånd från sidokanter */
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }

  .input-field {
    width: 100%;
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
    font-size: 16px;
  }

  .checkbox-container {
    margin-bottom: 10px;
  }

  .checkbox-container label {
    display: block;
    margin-bottom: 5px;
    font-size: 16px;
  }

  .submit-button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    border: none;
    border-radius: 3px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }

  .submit-button:hover {
    background-color: #0056b3;
  }
</style>