<template>
    <div class="signUp_user">
    <div class="container_signUp_user">
        <h2>Registrarse</h2>
 
        <form v-on:submit.prevent="precessSignUpUser">
            <imput type="text" v-model="user.username" placeholder="Username" />
            <br />
 
            <imput type="password" v-model="user.password" placeholder="Password" />
            <br />
 
            <imput type="tex" v-model="user.name" placeholder="Name" />
            <br />
 
            <imput type="email" v-model="user.email" placeholder="Email" />
            <br />
 
            <input
            type="number"
            v-model="user.account.balance"
            placeholder="Initial Balance"
            />
            <br />
 
            <button type="submit">Registrarse</button>
        </form>
    </div>
  </div>     
</template>
 
<script>
import axios from '../config/axios'
export default {
    name: "SignUp",
 
    data: function(){
        return{
            username: "",
            password: "",
            name: "",
            email: "",
            account: {
                lastChangeDate: (new Date()).toJSON().toString(),
                balance: 0,
                isActive: true
            }
        }
    },
    methods:{
        processSignUp: function (){
            axios.post("user/",this.user,{ headers: {} })
            .then((result)=>{
                let dataSignUp = {
                    username: this.user.username,
                    token_acess: result.data.access,
                    token_refresh: result.data.refresh,
                };
                this.$emit("completedSignUp", dataSignUp);
            })
            .cath((error)=>{
            console.log(error);
            alert("ERROREN EL REGISTRO.");
            }); 
        },
    }
}
</script>
<style>
    .login_singUp{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
 
        display: flex;
        justify-content: center;
        align-items: center;
    }
 
    .container_singUp_user {
        border: 3px solid #283747;
        border-radius: 10%;
        width: 25%;
        height: 60%;
 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
 
    .singUp_user h2{
        color: #283747;
 
    }
 
    .singUp_user form{
        width: 70%;
 
    }
 
    .singUp_user input{
        height: 40%;
        width: 100%;
 
        box-sizing: border-box;
        padding: 10% 20%;
        margin: 5% 0;
 
        border: 1px solid #283747;
    }
 
    .singUp_user button{
        width: 100%;
        height: 40%;
 
        color: #e5e7e9;
        background: #283747;
        border: 1px solid #e5e7e9;
 
        border-radius: 5%;
        padding: 10px 25px;
        margin: 5px 0;
    }
 
    .singUp_user button:hover{
        color: snow;
        background: crimson;
        border: 1px solid #283747;
}
</style>