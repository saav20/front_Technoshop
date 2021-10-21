<template>
    <div class="logIn_user">
    <div class="container_logIn_user">
        <h2>Iniciar sesión</h2>
        <form v-on:submit.prevent="precessLogInUser">
            <input type="text" v-model="user.username" placeholder="Username" />
            <br/>
            <imput type="password" v-model="user.password" placeholder="Password" />
            <br />
            <button type="submit">Iniciar Sesión</button>
        </form>
    </div>
  </div>     
 
</template>
<script>
import axios from '../config/axios'
export default {
    name: "LogIn",
    data: function (){
        return {
            user: {
                username:"",
                password:""
            }
        }
    },
    methods:{
        processLogInUser: function (){
            axios
            .post("login/",this.user,{
             headers:{},
            })
            .then((result)=>{
                let dataLogIn = {
                    username: this.user.username,
                    token_acess: result.data.access,
                    token_refresh: result.data.refresh,
                };
                this.$emit("completedLogIn", dataLogIn);
            })
            .cath((error)=>{
            if (error.response.status == "401")
            alert("ERROR 401: Credenciales Incorrectas.");
            }); 
        },
    },
};
</script>
<style>
    .login_user{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
 
        display: flex;
        justify-content: center;
        align-items: center;
    }
 
    .container_logIn_user {
        border: 3px solid #283747;
        border-radius: 10%;
        width: 25%;
        height: 60%;
 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
 
    .login_user h2{
        color: #283747;
 
    }
 
    .login_user form{
        width: 70%;
 
    }
 
    .login_user input{
        height: 40%;
        width: 100%;
 
        box-sizing: border-box;
        padding: 10% 20%;
        margin: 5% 0;
 
        border: 1px solid #283747;
    }
 
    .login_user button{
        width: 100%;
        height: 40%;
 
        color: #e5e7e9;
        background: #283747;
        border: 1px solid #e5e7e9;
 
        border-radius: 5%;
        padding: 10px 25px;
        margin: 5px 0;
    }
 
    .login_user button:hover{
        color: snow;
        background: crimson;
        border: 1px solid #283747;
}
</style>