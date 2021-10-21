<template>
  <div id="app" class="app">
 
    <div class="header">
 
      <h1>TECHNOSHOP </h1>
      <nav>
        <button v-if="is_auth"> Inicio </button>
        <button v-if="is_auth"> Cuenta </button>
        <button v-if="is_auth"> Cerrar Sesión </button>
        <button v-if="!is_auth" v-on:click="loadLogIn"> Iniciar Sesión </button>
        <button v-if="!is_auth" v-on:click="loadSignUp">> Registrarse </button>
      </nav>
    </div>
 
 
    <div class="main-component">
      <router-view
      v-on:completedLogIn="completedLogIn"
      v-on:completedSignUp="completedSignUp"
    >
    </router-view>
  </div>
 
 
  <div class="footer">
    <h2>TECHNOSHOP</h2>
    </div>
 
  </div>
</template>
 
 <script>
 export default {
   name:'App',
   data:function(){
     return {
       is_auth:false
     }
    },
    methods:{
      verifiyAuth: function(){
        if(this.is_auth == false)
          this.$router.push({name: "logIn"})
      },
 
      loadLogIn: function(){
      this.$router.push({name: "logIn"})
      },
      loadSignUp: function(){
      this.$router.push({name:"signUp"})
      },
      completedLogIn: function(data) {
        console.log("Autenticado")
      },
 
      completedSignUp: function(data) {
        console.log("Registrado", data)
      },
    },
 
  created: function(){
    this.verifiyAuth();
  }  
 }
 
</script>
 
<style>
  body{
    margin: 0 0 0 0;
  }
 
  .header{
    margin: 0%;
    padding: 0;
    width: 100%;
    height: 10vh; 
    min-height: 100px;
 
    background-color: #2f2847 ;
    color:#087ff7  ;
 
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header h1{
    width: 20%;
    text-align: center;
  }
  .header nav {
    height: 100%;
    width: 20%;
    display: flex;
    justify-content: space-around;
    align-items: center;
 
    font-size: 20px;
  }
  .header nav button{
    color:snow;
    background: slategrey;
    border: 1px solid snow;
    border-radius: 10px 20px;
    padding: 10px 20px;
  }
  .header nav button:hover{
    color:slategrey;
    background: snow;
    border:1px solid snow;
  }
  .main-component{
    height: 75vh;
    margin: 0%;
    padding: 0%;
 
    background: white;
 
  }
 
  .footer h2{
    width: 100%;
    height: 100%;
 
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>